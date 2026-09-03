'use strict';
// Экспорт всех фото/картинок из site/ с понятными именами + ZIP-архив.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const SITE = path.join(ROOT, 'site');
const OUT = path.join(ROOT, 'olympia-site-photos');
const ZIP = path.join(ROOT, 'olympia-site-photos.zip');
const IMG_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif', '.bmp']);

const CYR = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh', з: 'z', и: 'i',
  й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't',
  у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '',
  э: 'e', ю: 'yu', я: 'ya'
};

function slug(s) {
  return String(s || '')
    .toLowerCase()
    .replace(/&[a-z]+;|&#\d+;/gi, ' ')
    .replace(/[а-яё]/g, ch => CYR[ch] || ch)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 72) || 'image';
}

function hash8(rel) {
  return crypto.createHash('md5').update(rel).digest('hex').slice(0, 8);
}

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(abs, acc);
    else if (IMG_EXT.has(path.extname(ent.name).toLowerCase())) acc.push(abs);
  }
  return acc;
}

function walkHtml(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, ent.name);
    if (ent.isDirectory()) walkHtml(abs, acc);
    else if (ent.name === 'index.html') acc.push(abs);
  }
  return acc;
}

function resolveUrl(fromHtml, url) {
  const u = url.trim().replace(/^\//, '');
  if (/^(https?:|data:|mailto:|tel:|#)/i.test(u)) return null;
  const base = path.dirname(fromHtml);
  const abs = path.normalize(path.join(base, u.split('?')[0].split('#')[0]));
  if (!abs.startsWith(SITE)) return null;
  return abs;
}

function pageMeta(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const rel = path.relative(SITE, htmlPath).replace(/\\/g, '/');
  const parts = rel.split('/');
  parts.pop();
  const section = parts[0] || 'root';
  const pageSlug = parts.length ? parts[parts.length - 1] : 'index';
  const h1 = ((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '')
    .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const title = ((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '')
    .replace(/\s+/g, ' ').trim();
  return { section, pageSlug, h1, title, relDir: parts.join('/') };
}

function nearbyLabel(html, idx) {
  const win = html.slice(Math.max(0, idx - 900), Math.min(html.length, idx + 900));
  const patterns = [
    /class="title"[^>]*>([^<]{2,120})/i,
    /class="name"[^>]*>([^<]{2,120})/i,
    /class="title_slide"[^>]*>[\s\S]*?<a[^>]*>([^<]{2,120})/i,
    /alt="([^"]{2,120})"/i
  ];
  for (const re of patterns) {
    const m = win.match(re);
    if (m && m[1]) {
      const t = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
      if (t && !/^https?:/i.test(t)) return t;
    }
  }
  return '';
}

function roleFromContext(snippet) {
  if (/head_section|hero|banner/i.test(snippet)) return 'hero';
  if (/photo_slide|slide/i.test(snippet)) return 'slide';
  if (/class="photo"/i.test(snippet)) return 'card';
  if (/class="icon"/i.test(snippet) || /\.svg/i.test(snippet)) return 'icon';
  if (/gallery|smartPhoto/i.test(snippet)) return 'gallery';
  if (/logo|favicon/i.test(snippet)) return 'brand';
  return 'photo';
}

function collectRefs() {
  const refs = new Map();
  for (const htmlPath of walkHtml(SITE)) {
    const html = fs.readFileSync(htmlPath, 'utf8');
    const meta = pageMeta(htmlPath);

    const add = (abs, ctx) => {
      if (!abs || !fs.existsSync(abs)) return;
      const rel = path.relative(SITE, abs).replace(/\\/g, '/');
      if (!refs.has(rel)) refs.set(rel, []);
      refs.get(rel).push(ctx);
    };

    const imgRe = /<img\b[^>]*>/gi;
    let m;
    while ((m = imgRe.exec(html))) {
      const tag = m[0];
      const src = (tag.match(/\bsrc="([^"]+)"/i) || [])[1];
      if (!src) continue;
      const abs = resolveUrl(htmlPath, src);
      const alt = ((tag.match(/\balt="([^"]*)"/i) || [])[1] || '').trim();
      add(abs, { ...meta, alt, role: roleFromContext(tag), label: alt || nearbyLabel(html, m.index) });
    }

    const bgRe = /url\(\s*['"]?([^'")]+)['"]?\s*\)/gi;
    while ((m = bgRe.exec(html))) {
      const abs = resolveUrl(htmlPath, m[1]);
      const snippet = html.slice(Math.max(0, m.index - 120), m.index + 120);
      add(abs, {
        ...meta,
        alt: '',
        role: roleFromContext(snippet),
        label: nearbyLabel(html, m.index)
      });
    }
  }
  return refs;
}

function pickName(rel, ctxList) {
  const ext = path.extname(rel).toLowerCase();
  const ctx = ctxList && ctxList.length ? ctxList[0] : null;
  const parts = [];

  if (ctx) {
    if (ctx.section && ctx.section !== 'root') parts.push(slug(ctx.section));
    if (ctx.pageSlug && ctx.pageSlug !== 'index') parts.push(slug(ctx.pageSlug));
    const label = slug(ctx.alt || ctx.label || ctx.h1 || ctx.title);
    if (label && label !== 'image') parts.push(label);
    if (ctx.role && ctx.role !== 'photo') parts.push(ctx.role);
  } else {
    const p = rel.replace(/\\/g, '/');
    if (p.includes('upload/iblock/')) parts.push('iblock');
    else if (p.includes('upload/medialibrary/')) parts.push('medialibrary');
    else if (p.includes('local/templates/')) parts.push('template');
    else if (p.includes('bitrix/')) parts.push('bitrix');
    else parts.push('misc');
    parts.push(slug(path.basename(rel, ext)));
  }

  let base = parts.filter(Boolean).join('--');
  if (!base) base = 'image';
  return `${base}--${hash8(rel)}${ext}`;
}

function sectionFolder(rel, ctxList) {
  const ctx = ctxList && ctxList[0];
  if (ctx && ctx.section) return slug(ctx.section) || 'root';
  const p = rel.replace(/\\/g, '/');
  if (p.startsWith('upload/')) return 'upload';
  if (p.startsWith('local/')) return 'template';
  if (p.startsWith('bitrix/')) return 'bitrix';
  return 'misc';
}

function ensureEmpty(dir) {
  if (fs.existsSync(dir)) fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function main() {
  console.log('Сканирую HTML…');
  const refs = collectRefs();
  console.log('  ссылок на картинки в HTML:', refs.size);

  console.log('Собираю файлы…');
  const files = walk(SITE);
  console.log('  файлов на диске:', files.length);

  ensureEmpty(OUT);
  const usedNames = new Set();
  const manifest = [];

  for (const abs of files) {
    const rel = path.relative(SITE, abs).replace(/\\/g, '/');
    const ctxList = refs.get(rel) || null;
    let name = pickName(rel, ctxList);
    const folder = sectionFolder(rel, ctxList);
    let destDir = path.join(OUT, folder);
    let dest = path.join(destDir, name);

    let n = 2;
    while (usedNames.has(dest.replace(OUT + path.sep, '').replace(OUT + '/', ''))) {
      const ext = path.extname(name);
      const stem = path.basename(name, ext);
      name = `${stem}-v${n}${ext}`;
      dest = path.join(destDir, name);
      n++;
    }
    usedNames.add(dest.slice(OUT.length + 1).replace(/\\/g, '/'));
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(abs, dest);

    const ctx = ctxList && ctxList[0];
    manifest.push({
      original: rel,
      exportPath: path.join(folder, name).replace(/\\/g, '/'),
      section: ctx ? ctx.section : '',
      page: ctx ? ctx.relDir : '',
      role: ctx ? ctx.role : 'unreferenced',
      label: ctx ? (ctx.alt || ctx.label || ctx.h1 || '') : '',
      bytes: fs.statSync(abs).size
    });
  }

  manifest.sort((a, b) => a.exportPath.localeCompare(b.exportPath, 'ru'));
  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify({
    generated: new Date().toISOString(),
    source: 'site/',
    count: manifest.length,
    items: manifest
  }, null, 2), 'utf8');

  const csvHead = 'export_path,original_path,section,page,role,label,bytes\n';
  const csvBody = manifest.map(r =>
    [r.exportPath, r.original, r.section, r.page, r.role,
      `"${String(r.label).replace(/"/g, '""')}"`, r.bytes].join(',')
  ).join('\n');
  fs.writeFileSync(path.join(OUT, 'manifest.csv'), csvHead + csvBody, 'utf8');

  const readme = `# Фото с оригинального сайта «Олимпия»

Сгенерировано: ${new Date().toISOString().slice(0, 10)}

- **${manifest.length}** файлов из \`site/\`
- Имена: \`раздел--страница--подпись--роль--хеш.ext\`
- \`manifest.csv\` / \`manifest.json\` — соответствие новых имён исходным путям

Пересобрать: \`node _tools/export-site-photos.js\`

Папка: \`olympia-site-photos/\`  
Архив: \`olympia-site-photos.zip\` (в корне проекта)
`;
  fs.writeFileSync(path.join(OUT, 'README.md'), readme, 'utf8');

  console.log('Готово:', OUT);
  console.log('  manifest.json, manifest.csv, README.md');
  return manifest.length;
}

function zipExport() {
  if (!fs.existsSync(OUT)) return false;
  const { execSync } = require('child_process');
  const ps = `if (Test-Path '${ZIP.replace(/'/g, "''")}') { Remove-Item '${ZIP.replace(/'/g, "''")}' -Force }; Compress-Archive -Path '${OUT.replace(/'/g, "''")}\\*' -DestinationPath '${ZIP.replace(/'/g, "''")}' -CompressionLevel Optimal`;
  execSync(`powershell -NoProfile -Command "${ps}"`, { stdio: 'inherit' });
  const mb = (fs.statSync(ZIP).size / 1024 / 1024).toFixed(1);
  console.log('Архив:', ZIP, `(${mb} МБ)`);
  return true;
}

if (require.main === module) {
  const n = main();
  console.log('Файлов экспортировано:', n);
  zipExport();
}

module.exports = { main, zipExport, OUT, ZIP };
