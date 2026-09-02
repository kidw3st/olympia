'use strict';
// Проверка качества текста в разделе новостей и акций.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function walk(dir, out) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) walk(abs, out);
    else if (e.name === 'index.html') out.push(abs);
  }
  return out;
}

const issues = {};
const examples = {};
function add(key, file) {
  issues[key] = (issues[key] || 0) + 1;
  if (!examples[key]) examples[key] = path.relative(ROOT, file);
}

let checked = 0;
for (const section of ['news', 'actions']) {
  const dir = path.join(ROOT, 'redesign', section);
  if (!fs.existsSync(dir)) continue;
  for (const f of walk(dir, [])) {
    const html = fs.readFileSync(f, 'utf8');
    const i = html.indexOf('post__body');
    if (i < 0) continue;               // это список, не статья
    checked++;
    // срез строго внутри тела, иначе в выборку попадает сам класс
    const open = html.indexOf('>', i) + 1;
    const end = html.indexOf('</article>', open);
    const body = html.slice(open, end < 0 ? html.length : end);
    // блочные теги дают перенос, строчные склеиваются: иначе «В<b>иноградов</b>»
    // читается как две части слова и даёт ложные срабатывания
    const text = body
      .replace(/<\/?(?:p|div|h[1-6]|li|ul|ol|br|table|tr|td|th|figure)\b[^>]*>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/[ \t]*\n[ \t\n]*/g, '\n');

    if (body.indexOf('&nbsp;') !== -1) add('неразрывные пробелы Битрикса', f);
    if (/<br\s*\/?>\s*<br/i.test(body)) add('двойные переносы', f);
    if (/<p>\s*(?:<br\s*\/?>|\s)*<\/p>/i.test(body)) add('пустые абзацы', f);
    if (/[ \t]{3,}/.test(text)) add('лишние пробелы', f);
    if (/!{2,}|\?{2,}/.test(text)) add('повторные ! или ?', f);
    if (/Уважаемые\s+(?:клиенты|посетители|родители)/i.test(text)) add('«Уважаемые…» отдельной строкой', f);
    if (/<font\b|<span\b/i.test(body)) add('остатки font/span', f);
    if (/\s-\s/.test(text)) add('дефис вместо тире', f);
    if (/"/.test(text)) add('прямые кавычки', f);
    if (/style="/i.test(body)) add('инлайн-стили', f);
    if (/\s+[,.;:]/.test(text)) add('пробел перед знаком препинания', f);
  }
}

console.log('Статей проверено: ' + checked);
const rows = Object.entries(issues).sort((a, b) => b[1] - a[1]);
if (!rows.length) {
  console.log('  замечаний нет');
} else {
  rows.forEach(r => console.log('  ' + String(r[1]).padStart(4) + '  ' + r[0] +
    '   напр.: ' + examples[r[0]]));
}
