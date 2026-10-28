'use strict';
/* ====== Settings ====== */
const EMAIL = '';            // ← put your email here to enable the contact form + Email button
const TELEGRAM = 'NeoCode5'; // fallback when EMAIL is empty

const SKILLS = [
  ['🌐', 'HTML', 90], ['🎨', 'CSS', 85], ['⚙️', 'JavaScript', 70], ['🐍', 'Python', 50],
  ['🔀', 'Git', 65], ['🐙', 'GitHub', 70], ['📱', 'Responsive Design', 88], ['🖌️', 'UI Design', 80]
];

const PROJECTS = [
  { icon: '🍽️', bg: 'linear-gradient(135deg,#f97316,#7c5cff)', name: 'FoodStock Manager',
    desc: 'Inventory, staff, menu and food-order management system with a public customer order page.',
    tech: ['HTML', 'JavaScript', 'Cloudflare Workers', 'D1'],
    github: 'https://github.com/mamdlj/MAMD-site', live: 'https://mamdlj.github.io/MAMD-site' },
  { icon: '🏫', bg: 'linear-gradient(135deg,#22d3ee,#2563eb)', name: 'Classico 7 — Principal Assistant',
    desc: 'Persian RTL features page for a school-management app: report cards, attendance, grades, SMS and discipline.',
    tech: ['HTML', 'CSS', 'RTL'] },
  { icon: '🛍️', bg: 'linear-gradient(135deg,#ec4899,#7c5cff)', name: 'Order Form (Skin-care Store)',
    desc: 'Multi-step order form with optional accounts and an admin panel to manage orders.',
    tech: ['HTML', 'JavaScript', 'Firebase', 'Firestore'] },
  { icon: '💼', bg: 'linear-gradient(135deg,#7c5cff,#22d3ee)', name: 'MAMD Portfolio',
    desc: 'Multi-language personal website with hero, services, pricing packages and contact sections.',
    tech: ['PHP', 'CSS', 'JavaScript'] },
  { icon: '🪪', bg: 'linear-gradient(135deg,#334155,#7c5cff)', name: 'Bio Page',
    desc: 'Single-file bio page inspired by design-software layers: about, languages & tools, contact.',
    tech: ['HTML', 'CSS'] }
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ====== Render skills & projects ====== */
$('#skillGrid').innerHTML = SKILLS.map(([i, n, p]) =>
  `<div class="card skill reveal"><i>${i}</i><div class="row"><span>${n}</span><span>${p}%</span></div>
   <div class="bar"><span data-w="${p}"></span></div></div>`).join('');

$('#projectGrid').innerHTML = PROJECTS.map(p => `
  <article class="card proj reveal">
    <div class="thumb"><div style="background:${p.bg}">${p.icon}</div></div>
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

/* ====== Contact form ====== */
if (EMAIL) $('#mailLink').href = 'mailto:' + EMAIL;
else $('#mailLink').href = 'https://t.me/' + TELEGRAM;

$('#form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target, d = Object.fromEntries(new FormData(f)), st = $('#status');
  let ok = true;
  $$('input,textarea', f).forEach(i => {
    const bad = !i.checkValidity() || !i.value.trim();
    i.classList.toggle('bad', bad); if (bad) ok = false;
  });
  if (!ok) { st.style.color = '#ef4444'; st.textContent = 'Please fill all fields correctly.'; return; }
  const body = `Name: ${d.name}\nEmail: ${d.email}\n\n${d.message}`;
  st.style.color = 'var(--acc2)';
  if (EMAIL) {
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
    st.textContent = 'Opening your email app…';
  } else {
    navigator.clipboard?.writeText(`${d.subject}\n${body}`).catch(() => {});
    window.open('https://t.me/' + TELEGRAM, '_blank');
    st.textContent = 'Message copied — paste it in Telegram chat.';
  }
  f.reset();
});
