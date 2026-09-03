'use strict';
// Горизонтальный фокус для широких баннеров команды (лицо не всегда по центру кадра).
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const CACHE_FILE = path.join(__dirname, 'team-focal-cache.json');

let sharp = null;
try { sharp = require('sharp'); } catch (e) { /* optional */ }

function loadCache() {
  try { return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8')); } catch (e) { return {}; }
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2) + '\n', 'utf8');
}

function resolveImagePath(relPath) {
  if (!relPath) return null;
  const clean = relPath.replace(/^\/+/, '');
  const abs = path.join(SITE, clean);
  return fs.existsSync(abs) ? abs : null;
}

function rgbDist(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
}

function sampleBg(data, w, h, channels) {
  const pts = [];
  for (let x = 0; x < w; x += Math.max(1, Math.floor(w / 24))) pts.push([x, 0]);
  for (let x = 0; x < w; x += Math.max(1, Math.floor(w / 24))) pts.push([x, h - 1]);
  pts.push([0, Math.floor(h * 0.5)], [w - 1, Math.floor(h * 0.5)]);
  const acc = [0, 0, 0];
  for (const [x, y] of pts) {
    const i = (y * w + x) * channels;
    acc[0] += data[i]; acc[1] += data[i + 1]; acc[2] += data[i + 2];
  }
  return acc.map(v => v / pts.length);
}

function isSubject(px, bg, minDiff) {
  const diff = rgbDist(px, bg);
  if (diff < minDiff) return false;
  const lum = (px[0] + px[1] + px[2]) / 3;
  const bgLum = (bg[0] + bg[1] + bg[2]) / 3;
  // игнорируем лёгкий шум фона и полоску пола
  if (Math.abs(lum - bgLum) < 18 && diff < 55) return false;
  return true;
}

function columnBg(data, w, h, channels, x) {
  const ys = [0, 1, 2, Math.floor(h * 0.08)];
  const acc = [0, 0, 0];
  for (const y of ys) {
    const i = (y * w + x) * channels;
    acc[0] += data[i]; acc[1] += data[i + 1]; acc[2] += data[i + 2];
  }
  return acc.map(v => v / ys.length);
}

/** @returns {{ x: number, y: number } | null} percents 0–100 */
async function detectFocal(absPath) {
  if (!sharp || !absPath || !fs.existsSync(absPath)) return null;

  const meta = await sharp(absPath).metadata();
  const targetW = Math.min(480, meta.width || 480);
  const { data, info } = await sharp(absPath)
    .resize({ width: targetW, withoutEnlargement: true })
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width: w, height: h, channels } = info;
  if (!w || !h) return null;

  const yMax = Math.floor(h * 0.78);
  const headMax = Math.floor(h * 0.42);
  const colScore = new Float64Array(w);
  let minX = w;
  let maxX = 0;
  let minY = headMax;
  let maxY = 0;
  let hits = 0;

  for (let x = 0; x < w; x++) {
    const bgCol = columnBg(data, w, h, channels, x);
    for (let y = 0; y < yMax; y++) {
      const i = (y * w + x) * channels;
      const px = [data[i], data[i + 1], data[i + 2]];
      if (!isSubject(px, bgCol, 36)) continue;
      const diff = rgbDist(px, bgCol);
      const weight = diff / 255;
      if (y <= headMax) {
        colScore[x] += weight * (1 + (headMax - y) / headMax);
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
      hits++;
    }
  }

  if (hits < 40 || maxX <= minX) return { x: 50, y: 22 };

  // берём связный блок колонок с максимальной плотностью (человек, не фон)
  const maxScore = Math.max(...colScore);
  const thresh = maxScore * 0.28;
  let bestL = 0;
  let bestR = 0;
  let bestSum = 0;
  let curL = -1;
  let curSum = 0;
  for (let x = 0; x <= w; x++) {
    const s = x < w ? colScore[x] : 0;
    if (s >= thresh) {
      if (curL < 0) curL = x;
      curSum += s;
    } else if (curL >= 0) {
      if (curSum > bestSum) { bestSum = curSum; bestL = curL; bestR = x - 1; }
      curL = -1;
      curSum = 0;
    }
  }

  let cx;
  if (bestSum > 0) {
    let sum = 0;
    let wx = 0;
    for (let x = bestL; x <= bestR; x++) {
      sum += colScore[x];
      wx += x * colScore[x];
    }
    cx = wx / sum;
  } else {
    cx = (minX + maxX) / 2;
  }

  let peakX = bestL;
  let peakScore = 0;
  for (let x = bestL; x <= bestR; x++) {
    if (colScore[x] > peakScore) { peakScore = colScore[x]; peakX = x; }
  }
  const blobStart = bestL / (w - 1);
  const blobEnd = bestR / (w - 1);
  if (blobStart > 0.38) cx = peakX * 0.72 + cx * 0.28;
  else if (blobEnd < 0.62) cx = peakX * 0.72 + cx * 0.28;
  else cx = cx * 0.45 + peakX * 0.55;

  const faceY = minY + Math.max(0, maxY - minY) * 0.18;

  let xPct = Math.round((cx / (w - 1)) * 1000) / 10;
  let yPct = Math.round((faceY / (h - 1)) * 1000) / 10;
  xPct = Math.max(35, Math.min(75, xPct));
  yPct = Math.max(5, Math.min(45, yPct));
  return { x: xPct, y: yPct };
}

function focalStyle(focal, variant) {
  if (!focal) return '';
  if (variant === 'card') return `${focal.x}% ${Math.max(focal.y, 18)}%`;
  return `${focal.x}% ${Math.min(focal.y, 28)}%`;
}

const cache = loadCache();
let cacheDirty = false;

async function getFocal(relPath) {
  if (!relPath) return null;
  const key = relPath.replace(/\\/g, '/');
  const abs = resolveImagePath(key);
  if (!abs) return null;

  const stat = fs.statSync(abs);
  const stamp = stat.mtimeMs + ':' + stat.size;
  if (cache[key] && cache[key].stamp === stamp) return cache[key].focal;

  const focal = await detectFocal(abs);
  if (focal) {
    cache[key] = { stamp, focal };
    cacheDirty = true;
  }
  return focal;
}

function getFocalSync(relPath) {
  if (!relPath) return null;
  const key = relPath.replace(/\\/g, '/');
  return cache[key] ? cache[key].focal : null;
}

async function enrichPeople(people) {
  if (!sharp) return people;
  const out = [];
  for (const p of people) {
    const focal = p.img ? await getFocal(p.img) : null;
    out.push(Object.assign({}, p, {
      focal,
      imgPos: focal ? focalStyle(focal, 'card') : '50% 22%'
    }));
  }
  return out;
}

function flushCache() {
  if (cacheDirty) saveCache(cache);
}

async function warmAll(siteRoot) {
  if (!sharp) {
    console.warn('team-focal: sharp не установлен — object-position по умолчанию');
    return 0;
  }
  const teamOrder = require('./team-order');
  let n = 0;
  for (const slug of teamOrder.TEAM_CAT_ORDER) {
    for (const p of teamOrder.loadPeople(siteRoot, slug)) {
      if (!p.img) continue;
      await getFocal(p.img);
      n++;
    }
  }
  flushCache();
  return n;
}

if (require.main === module) {
  warmAll(SITE).then(n => {
    console.log('team-focal: кэш обновлён для', n, 'фото');
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = {
  getFocal,
  getFocalSync,
  enrichPeople,
  focalStyle,
  flushCache,
  warmAll,
  hasSharp: !!sharp
};
