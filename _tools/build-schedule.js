'use strict';
// Генерирует redesign/data/schedule.json — сетку занятий из реальных программ.
// Времена расставляются детерминированно (без Math.random), чтобы пересборка
// давала тот же результат. Файл после генерации правится руками.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'redesign', 'data');
const programs = JSON.parse(fs.readFileSync(path.join(DATA, 'programs.json'), 'utf8'));

const DAYS = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const DAYS_SHORT = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

// Направления расписания
const TRACKS = [
  { id: 'group', name: 'Групповые залы', rooms: ['Зал групповых программ', 'Зал единоборств', 'Студия'] },
  { id: 'aqua', name: 'Аквааэробика', rooms: ['Малый бассейн', 'Большой бассейн'] },
  { id: 'pool', name: 'Бассейн', rooms: ['Большой бассейн'] },
  { id: 'kids', name: 'Детский центр', rooms: ['Детский бассейн', 'Малый бассейн'] }
];

// Раскладка программ по трекам
function trackFor(p) {
  const cat = (p.category || '').toLowerCase();
  const name = (p.name || '').toLowerCase();
  if (p.area === 'kids') return 'kids';
  if (p.area === 'pool') return 'pool';
  if (cat.includes('аква') || name.includes('aqua') || name.includes('аква')) return 'aqua';
  return 'group';
}

// Слоты по времени: утро, день, вечер — расписание клуба 07:00–22:30
const SLOTS = {
  group: ['08:00', '09:15', '10:30', '12:00', '17:30', '18:45', '20:00'],
  aqua: ['09:00', '10:15', '11:30', '18:00', '19:15', '20:30'],
  pool: ['07:00', '08:30', '10:00', '12:00', '14:00', '17:00', '19:00', '21:00'],
  kids: ['09:00', '10:00', '11:00', '16:00', '17:00', '18:00', '19:00']
};

const DURATION = { group: 55, aqua: 45, pool: 45, kids: 45 };

function addMinutes(hhmm, mins) {
  const [h, m] = hhmm.split(':').map(Number);
  const total = h * 60 + m + mins;
  return String(Math.floor(total / 60)).padStart(2, '0') + ':' +
    String(total % 60).padStart(2, '0');
}

// Программы, сгруппированные по трекам
const byTrack = {};
for (const p of programs) {
  const t = trackFor(p);
  (byTrack[t] = byTrack[t] || []).push(p);
}

// Свободное плавание — реальная услуга бассейна, не из programs.json
const FREE_SWIM = {
  name: 'Свободное плавание',
  category: 'Бассейн',
  desc: '50-метровый бассейн олимпийского стандарта: 10 дорожек для свободного плавания. Сеанс 45 минут. Требуется справка-допуск.'
};
const KIDS_EXTRA = [
  { name: 'Обучение плаванию', category: 'Детский центр', desc: 'Групповые занятия по возрастам: постановка дыхания, техника, уверенность на воде.' },
  { name: 'Мама и малыш', category: 'Детский центр', desc: 'Совместные занятия родителя с малышом в тёплом детском бассейне.' },
  { name: 'Дежурная группа', category: 'Детский центр', desc: 'Занятие в дежурной группе Центра детского плавания без закрепления за расписанием абонемента.' }
];

const events = [];
let uid = 0;

for (const track of TRACKS) {
  let pool = (byTrack[track.id] || []).slice();
  if (track.id === 'pool') pool = [FREE_SWIM].concat(pool);
  if (track.id === 'kids') pool = KIDS_EXTRA.concat(pool);
  if (!pool.length) continue;

  const slots = SLOTS[track.id];
  const dur = DURATION[track.id];

  for (let d = 0; d < 7; d++) {
    // выходные — сокращённая сетка
    const daySlots = d >= 5 ? slots.filter((_, i) => i % 2 === 0) : slots;
    daySlots.forEach((start, si) => {
      // детерминированный выбор программы
      const idx = (d * 3 + si * 2) % pool.length;
      const p = pool[idx];
      const room = track.rooms[(d + si) % track.rooms.length];
      events.push({
        id: 't' + (++uid),
        track: track.id,
        day: d,
        start,
        end: addMinutes(start, dur),
        name: p.name,
        category: p.category || track.name,
        room,
        desc: p.desc || ''
      });
    });
  }
}

const out = {
  _note: 'Времена и залы — редактируемый образец сетки. Названия и описания занятий взяты с сайта «Олимпии». Замените расписание на актуальное перед публикацией или подключите живой виджет.',
  _howto: 'Каждое событие: {track, day (0=ПН), start, end, name, category, room, desc}. Треки описаны в tracks.',
  updated: '',
  days: DAYS,
  daysShort: DAYS_SHORT,
  hours: { from: '07:00', to: '22:30' },
  tracks: TRACKS.map(t => ({ id: t.id, name: t.name })),
  events
};

fs.writeFileSync(path.join(DATA, 'schedule.json'), JSON.stringify(out, null, 1), 'utf8');
console.log('Событий в сетке: ' + events.length);
const per = {};
events.forEach(e => { per[e.track] = (per[e.track] || 0) + 1; });
Object.entries(per).forEach(e => console.log('  ' + e[0] + ': ' + e[1]));
