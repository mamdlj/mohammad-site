'use strict';
/* ====== Settings ====== */
const TELEGRAM = 'NeoCode5'; // fallback when EMAIL is empty

const SKILLS = [
  ['🌐', 'HTML', 90], ['🎨', 'CSS', 85], ['⚙️', 'JavaScript', 70], ['🐍', 'Python', 50],
  ['🔀', 'Git', 65], ['🐙', 'GitHub', 70], ['📱', 'Responsive Design', 88], ['🖌️', 'UI Design', 80]
];

const PROJECTS = [
  { img: 'assets/images/project-hesabi.svg', name: 'Hesabi_Student_Manager', status: 'In progress',
    desc: 'Telegram bot for managing students — currently in development.', tech: ['Python', 'Telegram Bot'] },
  { img: 'assets/images/project-portfolio.svg', name: 'Personal Portfolio', status: 'In progress',
    desc: 'This website — bilingual, responsive, with dark and light themes.', tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/mamdlj/mohammad-site', live: 'https://mamdlj.github.io/mohammad-site/' },
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
    <div class="thumb"><img src="${p.img}" alt="${p.name}" loading="lazy">${p.status ? `<span class="status">${p.status}</span>` : ''}</div>
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

/* ====== Language (EN / FA) ====== */
const FA = {
  'Home':'خانه','About':'درباره من','Skills':'مهارت‌ها','Projects':'پروژه‌ها','Services':'خدمات','FAQ':'سؤالات متداول','Contact':'تماس','Contact Me':'تماس با من',
  'Web • Design • AI':'وب • طراحی • هوش مصنوعی',"Hello, I'm":'سلام، من','Mohammad Taha':'محمد طاها','Web Developer & Designer':'توسعه‌دهنده و طراح وب',
  'I create modern, responsive and creative websites with clean code and great user experiences.':'وب‌سایت‌های مدرن، ریسپانسیو و خلاقانه می‌سازم؛ با کد تمیز و تجربه‌ی کاربری عالی.',
  'View My Projects':'مشاهده‌ی پروژه‌ها','About Me':'درباره من',
  "I'm Mohammad Taha. I love web design, programming and building creative projects. My goal is to build modern, fast, useful and beautiful websites.":'من محمد طاها هستم و به طراحی وب، برنامه‌نویسی و ساخت پروژه‌های خلاقانه علاقه دارم. هدف من ساخت وب‌سایت‌هایی مدرن، سریع، کاربردی و زیبا است.',
  'Web Developer':'توسعه‌دهنده وب','UI Designer':'طراح رابط کاربری','Beginner Programmer':'برنامه‌نویس مبتدی','Creative Problem Solver':'حل‌کننده‌ی خلاق مسائل',
  '+ Projects':'+ پروژه','+ Technologies':'+ فناوری','% Passion':'% اشتیاق','Responsive Design':'طراحی ریسپانسیو','UI Design':'طراحی رابط کاربری',
  'Personal Portfolio':'پورتفولیوی شخصی','Coming Soon':'به‌زودی','In progress':'در حال انجام','GitHub':'گیت‌هاب','Live Demo':'دمو زنده',
  'Telegram bot for managing students — currently in development.':'ربات تلگرام برای مدیریت دانش‌آموزان — در حال توسعه.',
  'This website — bilingual, responsive, with dark and light themes.':'همین وب‌سایت — دوزبانه، ریسپانسیو و دارای تم تیره و روشن.',
  'Modern coming-soon landing page.':'صفحه‌ی لندینگ مدرن «به‌زودی».',
  'Web Development':'توسعه وب','Landing Page':'لندینگ پیج','Website Optimization':'بهینه‌سازی وب‌سایت',
  'Building modern, responsive websites.':'ساخت وب‌سایت‌های مدرن و ریسپانسیو.','Designing modern, user-friendly interfaces.':'طراحی رابط کاربری مدرن و کاربرپسند.',
  'Designing professional, eye-catching landing pages.':'طراحی لندینگ پیج‌های حرفه‌ای و جذاب.',"Improving your site's speed and user experience.":'بهینه‌سازی سرعت و تجربه‌ی کاربری سایت.',
  'Why Work With Me?':'چرا با من کار کنید؟','Clean Code':'کد تمیز','Modern Design':'طراحی مدرن','Responsive Websites':'وب‌سایت‌های ریسپانسیو','Fast Performance':'عملکرد سریع','Creative Ideas':'ایده‌های خلاقانه','Continuous Learning':'یادگیری مداوم',
  'What do you build?':'چه چیزی می‌سازید؟','Modern, responsive websites, landing pages and UI designs, plus speed and experience optimization for existing sites.':'وب‌سایت‌های مدرن و ریسپانسیو، لندینگ پیج و طراحی رابط کاربری، به‌علاوه‌ی بهینه‌سازی سرعت و تجربه‌ی کاربری سایت‌های موجود.',
  'How do I start a project?':'چطور پروژه را شروع کنم؟','Use the message builder below: pick a topic, describe your idea in a few lines and send it to me on Telegram.':'از پیام‌ساز پایین استفاده کنید: موضوع را انتخاب کنید، ایده‌تان را در چند خط بنویسید و در تلگرام یا ایتا برایم بفرستید.',
  'How is the cost decided?':'هزینه چطور مشخص می‌شود؟',"It depends on the pages, features and design you need. Send me your idea and I'll reply with a clear quote.":'بستگی به تعداد صفحات، امکانات و طراحی مورد نیاز دارد. ایده‌تان را بفرستید تا قیمت مشخص را اعلام کنم.',
  'Will my website work on mobile?':'آیا سایت من روی موبایل خوب کار می‌کند؟','Yes. Every site I build is responsive and tested on phones, tablets and desktops.':'بله. همه‌ی سایت‌هایی که می‌سازم ریسپانسیو هستند و روی موبایل، تبلت و دسکتاپ تست می‌شوند.',
  'Can you improve my existing website?':'می‌توانید سایت فعلی من را بهتر کنید؟','Yes. I can redesign it or optimize its speed and user experience without starting from zero.':'بله. می‌توانم آن را بازطراحی کنم یا سرعت و تجربه‌ی کاربری‌اش را بدون شروع از صفر بهینه کنم.',
  'Which technologies do you use?':'از چه فناوری‌هایی استفاده می‌کنید؟','HTML, CSS, JavaScript and Python, with Git and GitHub for version control.':'HTML، CSS، جاوااسکریپت و پایتون، همراه با Git و GitHub برای مدیریت نسخه.',
  "Let's Work Together":'بیایید با هم کار کنیم',"Have an idea or project in mind? Let's turn it into reality.":'ایده یا پروژه‌ای در ذهن دارید؟ بیایید آن را به واقعیت تبدیل کنیم.',
  'Topic':'موضوع','Website design':'طراحی وب‌سایت','Landing page':'لندینگ پیج','UI design':'طراحی رابط کاربری','Website optimization':'بهینه‌سازی وب‌سایت','Something else':'موضوع دیگر',
  'Name (optional)':'نام (اختیاری)','Describe your project in 2–3 lines':'پروژه‌تان را در ۲ تا ۳ خط توضیح دهید','Ready message':'پیام آماده','Copy message':'کپی پیام',
  'Send on Telegram':'ارسال در تلگرام','Send on Eitaa':'ارسال در ایتا','🐙 GitHub':'🐙 گیت‌هاب','✈️ Telegram':'✈️ تلگرام','📸 Instagram':'📸 اینستاگرام','💬 Eitaa':'💬 ایتا','Telegram':'تلگرام','Instagram':'اینستاگرام','Eitaa':'ایتا',
  'What happens next?':'بعدش چه می‌شود؟','Send me a short message about your idea or need.':'یک پیام کوتاه درباره‌ی ایده یا نیازتان بفرستید.','We talk briefly so I understand your goals.':'کوتاه صحبت می‌کنیم تا هدف‌هایتان را بفهمم.','You get a written proposal with scope and timing.':'یک پیشنهاد مکتوب با محدوده‌ی کار و زمان‌بندی دریافت می‌کنید.',
  '© 2026 Mohammad Taha. All Rights Reserved.':'© ۲۰۲۶ محمد طاها. تمامی حقوق محفوظ است.','💬 Message me':'💬 پیام بده'
};
const UI = {
  en: { lines: ['building modern websites, one commit at a time', 'designing clean, fast interfaces', 'turning ideas into real products'], ph: 'e.g. I need a modern landing page for my shop', copied: 'Message copied ✓', tg: 'Opening Telegram — message copied too.', ea: 'Opening Eitaa — message copied, paste it in the chat.', btn: 'فارسی', title: 'Mohammad Taha — Web Developer & Designer' },
  fa: { lines: ['ساخت وب‌سایت‌های مدرن، یک کامیت در هر قدم', 'طراحی رابط‌های تمیز و سریع', 'تبدیل ایده‌ها به محصول واقعی'], ph: 'مثلاً: برای فروشگاهم یک لندینگ پیج مدرن می‌خواهم', copied: 'پیام کپی شد ✓', tg: 'در حال باز کردن تلگرام — پیام کپی هم شد.', ea: 'در حال باز کردن ایتا — پیام کپی شد، در گفتگو پیست کنید.', btn: 'EN', title: 'محمد طاها — توسعه‌دهنده و طراح وب' }
};
let LANG = 'en'; try { LANG = localStorage.getItem('lang') || 'en'; } catch (e) {}
const orig = new WeakMap();
const norm = t => t.replace(/\s+/g, ' ').trim();
function translate(lang) {
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: n => /^(SCRIPT|STYLE|TEXTAREA)$/.test(n.parentNode.nodeName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
  nodes.forEach(n => {
    if (!orig.has(n)) { if (!(norm(n.nodeValue) in FA)) return; orig.set(n, n.nodeValue); }
    const o = orig.get(n), lead = o.match(/^\s*/)[0], trail = o.match(/\s*$/)[0];
    n.nodeValue = lang === 'fa' ? lead + FA[norm(o)] + trail : o;
  });
}

/* ====== Typing terminal ====== */
let li = 0, ci = 0, del = false;
(function tick() {
  const el = $('#typed'), arr = UI[LANG].lines, t = arr[li % arr.length];
  if (el) el.textContent = t.slice(0, ci);
  if (!del && ci >= t.length) { del = true; return setTimeout(tick, 1800); }
  if (del && ci <= 0) { del = false; li = (li + 1) % arr.length; }
  ci += del ? -1 : 1; if (ci < 0) ci = 0;
  setTimeout(tick, del ? 25 : 55);
})();

/* ====== Message builder (Telegram / Eitaa) ====== */
const topic = $('#topic'), gname = $('#gname'), gdesc = $('#gdesc'), gmsg = $('#gmsg'), tg = $('#tg'), ea = $('#ea'), st = $('#status');
function build() {
  const n = gname.value.trim(), d = gdesc.value.trim();
  gmsg.value = LANG === 'fa'
    ? `سلام محمد طاها،\n${n ? 'نام من ' + n + ' است.\n' : ''}می‌خواهم درباره‌ی «${topic.value}» صحبت کنم.\n\nپروژه: ${d || '(در گفتگو توضیح می‌دهم)'}\n\nممنونم!`
    : `Hi Mohammad Taha,\n${n ? 'My name is ' + n + '.\n' : ''}I'd like to talk about: ${topic.value}.\n\nProject: ${d || '(I will explain in the chat)'}\n\nThanks!`;
  tg.href = 'https://t.me/' + TELEGRAM + '?text=' + encodeURIComponent(gmsg.value);
}
[topic, gname, gdesc].forEach(e => e.addEventListener('input', build));
const copyMsg = () => navigator.clipboard?.writeText(gmsg.value).catch(() => {});
$('#copy').onclick = async () => { try { await navigator.clipboard.writeText(gmsg.value); } catch (e) { gmsg.select(); document.execCommand('copy'); } st.textContent = UI[LANG].copied; };
tg.addEventListener('click', () => { copyMsg(); st.textContent = UI[LANG].tg; });
ea.addEventListener('click', () => { copyMsg(); st.textContent = UI[LANG].ea; });

/* ====== Apply language ====== */
function setLang(l) {
  LANG = l; const r = document.documentElement;
  r.lang = l; r.dir = l === 'fa' ? 'rtl' : 'ltr';
  translate(l);
  gdesc.placeholder = UI[l].ph; document.title = UI[l].title; $('#lang').textContent = UI[l].btn;
  li = 0; ci = 0; del = false; st.textContent = ''; build();
  try { localStorage.setItem('lang', l); } catch (e) {}
}
$('#lang').onclick = () => setLang(LANG === 'fa' ? 'en' : 'fa');
setLang(LANG);
