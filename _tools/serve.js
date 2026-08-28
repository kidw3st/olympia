'use strict';
// Простой статический сервер для локальной копии сайта.
// Запуск: node _tools/serve.js [порт]
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[3]
  ? path.resolve(process.argv[3])
  : path.resolve(__dirname, '..', 'site');
const PORT = Number(process.argv[2] || 8099);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.htm': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon',
  '.bmp': 'image/bmp', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject', '.otf': 'font/otf', '.mp4': 'video/mp4',
  '.webm': 'video/webm', '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.ogg': 'audio/ogg',
  '.pdf': 'application/pdf', '.zip': 'application/zip',
  '.doc': 'application/msword', '.xls': 'application/vnd.ms-excel',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
};

http.createServer((req, res) => {
  let p;
  try { p = decodeURIComponent(req.url.split('?')[0].split('#')[0]); }
  catch (e) { p = req.url.split('?')[0]; }

  // защита от выхода за пределы каталога
  let abs = path.join(ROOT, path.normalize(p).replace(/^([\\/]|\.\.)+/, ''));
  if (!abs.startsWith(ROOT)) { res.writeHead(403); return res.end('403'); }

  fs.stat(abs, (err, st) => {
    if (!err && st.isDirectory()) abs = path.join(abs, 'index.html');
    fs.readFile(abs, (e2, buf) => {
      if (e2) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end('<h1>404</h1><p>Нет файла: ' + p + '</p>');
      }
      const ct = MIME[path.extname(abs).toLowerCase()] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': ct, 'Cache-Control': 'no-cache' });
      res.end(buf);
    });
  });
}).listen(PORT, '127.0.0.1', () => {
  console.log('Локальная копия сайта: http://127.0.0.1:' + PORT + '/');
  console.log('Каталог: ' + ROOT);
});
