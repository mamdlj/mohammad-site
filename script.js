'use strict';
/* ====== Settings ====== */
const TELEGRAM = 'NeoCode5'; // fallback when EMAIL is empty

const SKILLS = [
  ['🌐', 'HTML', 90], ['🎨', 'CSS', 85], ['⚙️', 'JavaScript', 70], ['🐍', 'Python', 50],
  ['🔀', 'Git', 65], ['🐙', 'GitHub', 70], ['📱', 'Responsive Design', 88], ['🖌️', 'UI Design', 80]
];

const PROJECTS = [
  { img: 'assets/images/project-comingsoon.svg', name: 'Coming Soon',
    desc: 'Modern coming-soon landing page.', tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/mamdlj/Coming-soon-', live: 'https://mamdlj.github.io/Coming-soon-/' }
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ====== Render skills & projects ====== */
$('#skillGrid').innerHTML = SKILLS.map(([i, n, p]) =>
  `<div class="card skill reveal"><i>${i}</i><div class="row"><span>${n}</span><span>${p}%</span></div>
   <div class="bar"><span data-w="${p}"></span></div></div>`).join('');

$('#projectGrid').innerHTML = PROJECTS.map(p => `
  <article class="card proj reveal">
    <div class="thumb"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
    <div class="body"><h3>${p.name}</h3><p>${p.desc}</p>
      <div class="tags">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
      <div class="links">${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">GitHub</a>` : ''}
      ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live Demo</a>` : ''}</div>
    </div></article>`).join('');

/* ====== Loader ====== */
window.addEventListener('load', () => setTimeout(() => $('#loader').classList.add('done'), 500));

/* ====== Theme ====== */
const root = document.documentElement, themeBtn = $('#theme');
const setTheme = t => { root.dataset.theme = t; themeBtn.textContent = t === 'dark' ? '🌙' : '☀️'; try { localStorage.setItem('theme', t); } catch (e) {} };
let saved = 'dark'; try { saved = localStorage.getItem('theme') || 'dark'; } catch (e) {}
setTheme(saved);
themeBtn.onclick = () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');

/* ====== Mobile menu ====== */
$('#burger').onclick = () => $('#menu').classList.toggle('open');
$$('#menu a').forEach(a => a.onclick = () => $('#menu').classList.remove('open'));

/* ====== Scroll: progress, back-to-top, active link ====== */
const sections = $$('main section[id]'), links = $$('#menu a');
addEventListener('scroll', () => {
  const h = document.documentElement;
  $('#progress').style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  $('#top').classList.toggle('show', h.scrollTop > 600);
  let cur = sections[0].id;
  sections.forEach(s => { if (scrollY >= s.offsetTop - 140) cur = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
}, { passive: true });
$('#top').onclick = () => scrollTo({ top: 0, behavior: 'smooth' });

/* ====== Reveal, counters, skill bars ====== */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  $$('.bar span', e.target).forEach(b => b.style.width = b.dataset.w + '%');
  $$('[data-count]', e.target).forEach(c => {
    const to = +c.dataset.count; let n = 0;
    const t = setInterval(() => { n += Math.ceil(to / 40); if (n >= to) { n = to; clearInterval(t); } c.textContent = n; }, 35);
  });
  io.unobserve(e.target);
}), { threshold: .15 });
$$('.reveal').forEach(el => io.observe(el));

/* ====== Custom cursor ====== */
const cur = $('.cursor');
addEventListener('mousemove', e => { cur.style.left = e.clientX + 'px'; cur.style.top = e.clientY + 'px'; });
document.addEventListener('mouseover', e => cur.classList.toggle('big', !!e.target.closest('a,button,input,textarea')));

/* ====== Typing terminal ====== */
(() => {
  const el = $('#typed'); if (!el) return;
  const lines = ['building modern websites, one commit at a time', 'designing clean, fast interfaces', 'turning ideas into real products'];
  let li = 0, ci = 0, del = false;
  (function tick() {
    const t = lines[li];
    el.textContent = t.slice(0, ci);
    if (!del && ci === t.length) { del = true; return setTimeout(tick, 1800); }
    if (del && ci === 0) { del = false; li = (li + 1) % lines.length; }
    ci += del ? -1 : 1;
    setTimeout(tick, del ? 25 : 55);
  })();
})();

/* ====== Message builder ====== */
(() => {
  const topic = $('#topic'), name = $('#gname'), desc = $('#gdesc'), msg = $('#gmsg'), tg = $('#tg'), st = $('#status');
  const build = () => {
    msg.value = `Hi Mohammad Taha,\n${name.value.trim() ? 'My name is ' + name.value.trim() + '.\n' : ''}I'd like to talk about: ${topic.value}.\n\nProject: ${desc.value.trim() || '(I will explain in the chat)'}\n\nThanks!`;
    tg.href = 'https://t.me/' + TELEGRAM + '?text=' + encodeURIComponent(msg.value);
  };
  [topic, name, desc].forEach(e => e.addEventListener('input', build)); build();
  $('#copy').onclick = async () => {
    try { await navigator.clipboard.writeText(msg.value); } catch (e) { msg.select(); document.execCommand('copy'); }
    st.textContent = 'Message copied ✓';
  };
  tg.addEventListener('click', () => { navigator.clipboard?.writeText(msg.value).catch(() => {}); st.textContent = 'Opening Telegram — message copied too.'; });
})();
