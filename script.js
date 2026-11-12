'use strict';
/* ====== Settings ====== */
const TELEGRAM = 'P4_Mamdjj';   // Telegram username
const EMAIL = '';   // ← put your email here to enable the Email row and button

const SKILLS = [
  ['🌐', 'HTML', 90], ['🎨', 'CSS', 90], ['⚙️', 'JavaScript', 70], ['🐍', 'Python', 70],
  ['🔀', 'Git', 70], ['🐙', 'GitHub', 70], ['📱', 'Responsive Design', 90], ['🖌️', 'UI Design', 90]
];

const PROJECTS = [
  { img: 'assets/images/shot-hesabi.jpg', name: 'Hesabi_Student_Manager', status: 'Completed', done: true,
    desc: 'Student registration and management portal for a school, with an admin panel and CSV export.', tech: ['Cloudflare Workers', 'Admin panel', 'CSV export'],
    cta: 'Contact me for a demo →',
    long: {
      en: ['Hesabi_Student_Manager is a web portal built for a school to collect student registration information online and manage it from one admin panel.',
           'Parents or students fill in a single registration form: student and guardian names, national IDs and phone numbers, grade, field of study and class. A guardian-consent checkbox is required before submitting, and every successful submission returns a tracking code.',
           'School staff sign in to a protected admin panel. After the first-run setup creates the initial administrator account, the dashboard shows the total number of students and today\'s registrations, lists every student in a table, lets staff edit a record, and exports all data to CSV.',
           'The application runs on Cloudflare Workers and the whole interface is right-to-left Persian. Because it handles real student data, the live system is private — contact me and I will show you a demo.'],
      fa: ['Hesabi_Student_Manager یک پورتال وب برای مدرسه است تا اطلاعات ثبت‌نام دانش‌آموزان را آنلاین جمع‌آوری کند و از یک پنل مدیریت بررسی و مدیریت کند.',
           'اولیا یا دانش‌آموز یک فرم ثبت‌نام را پر می‌کنند: نام و نام خانوادگی دانش‌آموز و ولی، کد ملی و شماره‌ی همراه، پایه، رشته و کلاس. قبل از ثبت، تأیید رضایت ولی الزامی است و بعد از هر ثبت موفق یک کد پیگیری نمایش داده می‌شود.',
           'کارکنان مدرسه وارد پنل مدیریت محافظت‌شده می‌شوند. بعد از راه‌اندازی اولیه و ساخت حساب مدیر، داشبورد تعداد کل دانش‌آموزان و ثبت‌های امروز را نشان می‌دهد، همه‌ی دانش‌آموزان را در یک جدول فهرست می‌کند، امکان ویرایش هر رکورد را می‌دهد و همه‌ی داده‌ها را به CSV خروجی می‌گیرد.',
           'برنامه روی Cloudflare Workers اجرا می‌شود و کل رابط کاربری فارسی و راست‌به‌چپ است. چون این سامانه با اطلاعات واقعی دانش‌آموزان کار می‌کند، نسخه‌ی زنده خصوصی است — با من صحبت کنید تا دمو را نشانتان بدهم.']
    },
    features: {
      en: ['Student registration form with guardian consent', 'Tracking code after every submission', 'First-run admin setup and secure sign-in', 'Dashboard: total students and today\'s registrations', 'Student list with record editing', 'One-click CSV export', 'Right-to-left Persian interface on Cloudflare Workers'],
      fa: ['فرم ثبت‌نام دانش‌آموز با تأیید رضایت ولی', 'کد پیگیری بعد از هر ثبت', 'راه‌اندازی اولیه‌ی مدیر و ورود امن', 'داشبورد: کل دانش‌آموزان و ثبت‌های امروز', 'فهرست دانش‌آموزان با امکان ویرایش', 'خروجی CSV با یک کلیک', 'رابط فارسی راست‌به‌چپ روی Cloudflare Workers']
    } },
  { img: 'assets/images/shot-portfolio.jpg', name: 'Personal Portfolio', status: 'Completed', done: true,
    desc: 'This website — bilingual, responsive, with dark and light themes.', tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/mamdlj/mohammad-site', live: 'https://mamdlj.github.io/mohammad-site/',
    long: {
      en: ['This is my personal portfolio: a single-page, bilingual (English and Persian) website that presents my skills, projects and ways to contact me.',
           'It is built with plain HTML, CSS and JavaScript — no frameworks — so it loads fast. It supports dark and light themes, a full right-to-left layout in Persian, and self-hosted fonts so nothing depends on external font servers.',
           'A message builder turns a topic and a few lines about your project into a ready-to-send message for Telegram or Instagram. The site also includes SEO metadata, accessibility features such as a skip link and clear keyboard focus, and a countdown screen that was used for the launch.'],
      fa: ['این پورتفولیوی شخصی من است: یک وب‌سایت تک‌صفحه‌ای و دوزبانه (انگلیسی و فارسی) که مهارت‌ها، پروژه‌ها و راه‌های ارتباط با من را نشان می‌دهد.',
           'با HTML، CSS و جاوااسکریپت ساده و بدون فریم‌ورک ساخته شده تا سریع باز شود. تم تیره و روشن، چیدمان کامل راست‌به‌چپ برای فارسی و فونت‌های داخل خود سایت دارد، پس به سرور فونت بیرونی وابسته نیست.',
           'پیام‌ساز بخش تماس، موضوع و چند خط درباره‌ی پروژه‌ی شما را به یک پیام آماده برای تلگرام یا اینستاگرام تبدیل می‌کند. سایت متاداده‌ی سئو، امکانات دسترس‌پذیری مثل لینک پرش به محتوا و فوکوس واضح کیبورد، و یک صفحه‌ی شمارش‌معکوس برای افتتاحیه هم دارد.']
    },
    features: {
      en: ['English / Persian with full RTL layout', 'Dark and light themes', 'Self-hosted fonts, no frameworks', 'Message builder for Telegram and Instagram', 'SEO metadata and accessibility basics', 'Responsive from phones to large screens'],
      fa: ['انگلیسی / فارسی با چیدمان کامل راست‌به‌چپ', 'تم تیره و روشن', 'فونت داخلی و بدون فریم‌ورک', 'پیام‌ساز برای تلگرام و اینستاگرام', 'متاداده‌ی سئو و اصول دسترس‌پذیری', 'ریسپانسیو از موبایل تا صفحه‌های بزرگ']
    } },
  { img: 'assets/images/shot-comingsoon.jpg', name: 'Coming Soon',
    desc: 'Modern coming-soon landing page.', tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/mamdlj/Coming-soon-', live: 'https://mamdlj.github.io/Coming-soon-/',
    preview: 'https://mamdlj.github.io/Coming-soon-/',
    long: {
      en: ['A modern "coming soon" landing page for a product that is about to launch. It shows a live countdown to the launch date together with a progress bar, so visitors can see how close the opening is.',
           'The background is an animated aurora with a soft grid and a spotlight that follows the cursor, and the headline rotates between words. A waitlist form validates the email address and celebrates with confetti. When the countdown ends, the page switches to a "We are live" state on its own.',
           'It is a single static page written in plain HTML, CSS and JavaScript and works on every screen size. The launch date is set in one line of code. The waitlist form only saves emails in the visitor\'s browser until a backend is connected.'],
      fa: ['یک صفحه‌ی «به‌زودی» مدرن برای محصولی که در آستانه‌ی راه‌اندازی است. شمارش‌معکوس زنده تا تاریخ افتتاح و یک نوار پیشرفت نشان می‌دهد تا بازدیدکننده بفهمد افتتاح چقدر نزدیک است.',
           'پس‌زمینه یک شفق متحرک با شبکه‌ی محو و نوری است که دنبال مکان‌نما می‌آید و کلمه‌ی تیتر مدام عوض می‌شود. فرم لیست انتظار ایمیل را بررسی می‌کند و با کنفتی جشن می‌گیرد. وقتی شمارش‌معکوس تمام شود، صفحه خودش به حالت «افتتاح شد» می‌رود.',
           'یک صفحه‌ی استاتیک با HTML، CSS و جاوااسکریپت ساده است و روی هر اندازه‌ی صفحه‌ای کار می‌کند. تاریخ افتتاح در یک خط کد تنظیم می‌شود. فرم لیست انتظار تا وقتی بک‌اند وصل نشود، ایمیل‌ها را فقط در مرورگر خود بازدیدکننده ذخیره می‌کند.']
    },
    features: {
      en: ['Live countdown with progress bar', 'Animated aurora background and cursor spotlight', 'Rotating headline word', 'Waitlist form with validation and confetti', 'Automatic "We are live" state', 'Responsive and lightweight'],
      fa: ['شمارش‌معکوس زنده با نوار پیشرفت', 'پس‌زمینه‌ی شفق متحرک و نور دنبال‌کننده‌ی مکان‌نما', 'کلمه‌ی تیتر متغیر', 'فرم لیست انتظار با اعتبارسنجی و کنفتی', 'حالت خودکار «افتتاح شد»', 'ریسپانسیو و سبک']
    } },
  { img: 'assets/images/project-bot.svg', name: 'Telegram AI Bot',
    desc: 'Telegram bot that forwards messages to Claude and sends the replies back.', tech: ['Node.js', 'Telegram Bot API', 'Claude API'],
    github: 'https://github.com/mamdlj/MAMD-site4',
    long: {
      en: ['A Telegram bot written in Node.js. It receives a user\'s message, sends it to Claude through the Anthropic API and replies in the same chat with the answer.',
           'It uses the node-telegram-bot-api library and the Anthropic SDK. The bot token and the API key are read from environment variables, so no secret is stored in the code. The repository includes a step-by-step Persian README that explains how to create a bot with BotFather and run this project.'],
      fa: ['یک ربات تلگرام که با Node.js نوشته شده است. پیام کاربر را می‌گیرد، از طریق API شرکت Anthropic برای Claude می‌فرستد و پاسخ را در همان گفتگو برمی‌گرداند.',
           'از کتابخانه‌ی node-telegram-bot-api و SDK شرکت Anthropic استفاده می‌کند. توکن ربات و کلید API از متغیرهای محیطی خوانده می‌شوند، پس هیچ رمزی داخل کد ذخیره نیست. مخزن یک README فارسی قدم‌به‌قدم دارد که ساخت ربات با BotFather و اجرای پروژه را توضیح می‌دهد.']
    },
    features: {
      en: ['Replies powered by Claude', 'Built with Node.js and the Telegram Bot API', 'Secrets kept in environment variables', 'Step-by-step Persian setup guide'],
      fa: ['پاسخ‌ها با Claude', 'ساخته‌شده با Node.js و Telegram Bot API', 'رمزها در متغیرهای محیطی نگهداری می‌شوند', 'راهنمای راه‌اندازی قدم‌به‌قدم به فارسی']
    } }
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ====== Render skills & projects ====== */
$('#skillGrid').innerHTML = SKILLS.map(([i, n, p]) =>
  `<div class="card skill reveal"><i>${i}</i><div class="row"><span>${n}</span><span>${p}%</span></div>
   <div class="bar"><span data-w="${p}"></span></div></div>`).join('');

$('#projectGrid').innerHTML = PROJECTS.map((p, i) => `
  <article class="card proj reveal" data-i="${i}">
    <div class="thumb"><img src="${p.img}" alt="${p.name}" loading="lazy">${p.status ? `<span class="status${p.done ? ' done' : ''}">${p.status}</span>` : ''}</div>
    <div class="body"><h3>${p.name}</h3><p>${p.desc}</p>
      <div class="tags">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
      <button class="detail" type="button" data-i="${i}">View details →</button>
      <div class="links">${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">GitHub</a>` : ''}
      ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Live Demo</a>` : ''}
      ${p.cta ? `<a href="#contact" data-topic="4">${p.cta}</a>` : ''}</div>
    </div></article>`).join('');

/* ====== Loader ====== */
const hideLoader = () => $('#loader').classList.add('done');
window.addEventListener('load', () => setTimeout(hideLoader, 400));
setTimeout(hideLoader, 3000);

/* ====== Theme ====== */
const root = document.documentElement, themeBtn = $('#theme');
const setTheme = t => { root.dataset.theme = t; themeBtn.textContent = t === 'dark' ? '🌙' : '☀️'; try { localStorage.setItem('theme', t); } catch (e) {} };
let saved = 'dark'; try { saved = localStorage.getItem('theme') || 'dark'; } catch (e) {}
setTheme(saved);
themeBtn.onclick = () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');

/* ====== Mobile menu ====== */
$('#burger').onclick = e => { const o = $('#menu').classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', o); };
$$('#menu a').forEach(a => a.onclick = () => $('#menu').classList.remove('open'));

/* ====== Scroll: progress, back-to-top, active link ====== */
const sections = $$('main section[id]'), links = $$('#menu a');
addEventListener('scroll', () => {
  const h = document.documentElement;
  $('#progress').style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
  $('#top').classList.toggle('show', h.scrollTop > 600);
  let cur = sections[0].id;
  sections.forEach(s => { if (scrollY >= s.offsetTop - 140) cur = s.id; });
  links.forEach(a => { const on = a.getAttribute('href') === '#' + cur; a.classList.toggle('active', on); on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'); });
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
  'Telegram AI Bot':'ربات هوش مصنوعی تلگرام','Telegram bot that forwards messages to Claude and sends the replies back.':'ربات تلگرامی که پیام‌ها را به Claude می‌فرستد و پاسخ را برمی‌گرداند.','Message on Instagram':'پیام در اینستاگرام','Email':'ایمیل','Send by email':'ارسال با ایمیل',
  'View details →':'مشاهده‌ی جزئیات ←','Completed':'تکمیل شده','Contact me for a demo →':'برای دمو با من صحبت کنید ←','Skip to content':'پرش به محتوا','Home':'خانه','About':'درباره من','Skills':'مهارت‌ها','Projects':'پروژه‌ها','Services':'خدمات','FAQ':'سؤالات متداول','Contact':'تماس','Contact Me':'تماس با من',
  'Web • Design • AI':'وب • طراحی • هوش مصنوعی',"Hello, I'm":'سلام، من','Mohammad Taha':'محمد طاها','Web Developer & Designer':'توسعه‌دهنده و طراح وب',
  'I create modern, responsive and creative websites with clean code and great user experiences.':'وب‌سایت‌های مدرن، ریسپانسیو و خلاقانه می‌سازم؛ با کد تمیز و تجربه‌ی کاربری عالی.',
  'View My Projects':'مشاهده‌ی پروژه‌ها','About Me':'درباره من',
  "I'm Mohammad Taha. I love web design, programming and building creative projects. My goal is to build modern, fast, useful and beautiful websites.":'من محمد طاها هستم و به طراحی وب، برنامه‌نویسی و ساخت پروژه‌های خلاقانه علاقه دارم. هدف من ساخت وب‌سایت‌هایی مدرن، سریع، کاربردی و زیبا است.',
  'Web Developer':'توسعه‌دهنده وب','UI Designer':'طراح رابط کاربری','Beginner Programmer':'برنامه‌نویس مبتدی','Creative Problem Solver':'حل‌کننده‌ی خلاق مسائل',
  '+ Projects':'+ پروژه','+ Technologies':'+ فناوری','% Passion':'% اشتیاق','Responsive Design':'طراحی ریسپانسیو','UI Design':'طراحی رابط کاربری',
  'Personal Portfolio':'پورتفولیوی شخصی','Coming Soon':'به‌زودی','In progress':'در حال انجام','GitHub':'گیت‌هاب','Live Demo':'دمو زنده',
  'Student registration and management portal for a school, with an admin panel and CSV export.':'پورتال ثبت‌نام و مدیریت دانش‌آموزان برای مدرسه، با پنل مدیریت و خروجی CSV.',
  'This website — bilingual, responsive, with dark and light themes.':'همین وب‌سایت — دوزبانه، ریسپانسیو و دارای تم تیره و روشن.',
  'Modern coming-soon landing page.':'صفحه‌ی لندینگ مدرن «به‌زودی».',
  'Web Development':'توسعه وب','Landing Page':'لندینگ پیج','Website Optimization':'بهینه‌سازی وب‌سایت',
  'Building modern, responsive websites.':'ساخت وب‌سایت‌های مدرن و ریسپانسیو.','Designing modern, user-friendly interfaces.':'طراحی رابط کاربری مدرن و کاربرپسند.',
  'Designing professional, eye-catching landing pages.':'طراحی لندینگ پیج‌های حرفه‌ای و جذاب.',"Improving your site's speed and user experience.":'بهینه‌سازی سرعت و تجربه‌ی کاربری سایت.',
  'SERVICES':'خدمات','PROBLEMS I SOLVE':'مشکلاتی که حل می‌کنم','From Idea to Live Website':'از ایده تا وب‌سایت آنلاین','Every project is handled by me from start to finish — no handoffs, no middlemen.':'هر پروژه از اول تا آخر توسط خودم انجام می‌شود؛ بدون واسطه و بدون دست‌به‌دست شدن.','Start a project →':'شروع پروژه ←',
  'Which problem is holding you back?':'کدام مشکل جلوی شما را گرفته؟','Find yours — each card leads straight to the solution.':'مشکل خودتان را پیدا کنید؛ هر کارت مستقیم به راه‌حل می‌رود.',
  'My website looks outdated':'سایتم قدیمی به نظر می‌رسد','A fresh, modern redesign that builds trust the moment visitors arrive.':'بازطراحی تازه و مدرن که از همان لحظه‌ی ورود اعتماد می‌سازد.','Get a redesign →':'بازطراحی می‌خواهم ←',
  'My site loads too slowly':'سایتم دیر باز می‌شود','Visitors leave when pages are slow. I optimize speed and smooth out the experience.':'وقتی صفحه کند باشد بازدیدکننده می‌رود. سرعت را بالا می‌برم و تجربه را روان می‌کنم.','Speed it up →':'سریعش کن ←',
  'It breaks on mobile':'روی موبایل به‌هم می‌ریزد','Most visitors are on phones. I make every page look right on every screen.':'بیشتر بازدیدکننده‌ها با موبایل می‌آیند. هر صفحه را روی هر صفحه‌نمایشی درست نشان می‌دهم.','Fix my layout →':'چیدمانم را درست کن ←',
  'I need a page that converts':'صفحه‌ای می‌خواهم که مشتری بیاورد','A focused landing page that explains your offer and guides people to act.':'لندینگ پیج متمرکز که پیشنهادتان را توضیح می‌دهد و مخاطب را به اقدام هدایت می‌کند.','Build my landing page →':'لندینگ پیجم را بساز ←',
  'I need a clean interface':'رابط کاربری تمیز می‌خواهم','Clear, user-friendly UI design so people find what they need without effort.':'طراحی رابط روشن و کاربرپسند تا کاربر بدون زحمت چیزی را که می‌خواهد پیدا کند.','Design my UI →':'رابط من را طراحی کن ←',
  "I don't know where to start":'نمی‌دانم از کجا شروع کنم','Send me a few lines about your idea — we will figure out the best first step together.':'چند خط درباره‌ی ایده‌تان برایم بنویسید؛ با هم بهترین قدم اول را پیدا می‌کنیم.','Talk to me →':'با من صحبت کنید ←',
  'Ways to reach me':'راه‌های ارتباط','My promise':'قول من','Site':'سایت','I build modern, fast and creative websites.':'وب‌سایت‌های مدرن، سریع و خلاقانه می‌سازم.',
  'Not sure a website is the right fit? Write to me anyway — I will tell you honestly what makes sense, even if the answer is that you do not need one yet.':'مطمئن نیستید وب‌سایت برایتان مناسب است؟ باز هم برایم بنویسید؛ صادقانه می‌گویم چه چیزی منطقی است، حتی اگر جواب این باشد که فعلاً به آن نیازی ندارید.',
  'Why Work With Me?':'چرا با من کار کنید؟','Clean Code':'کد تمیز','Modern Design':'طراحی مدرن','Responsive Websites':'وب‌سایت‌های ریسپانسیو','Fast Performance':'عملکرد سریع','Creative Ideas':'ایده‌های خلاقانه','Continuous Learning':'یادگیری مداوم',
  'What do you build?':'چه چیزی می‌سازید؟','Modern, responsive websites, landing pages and UI designs, plus speed and experience optimization for existing sites.':'وب‌سایت‌های مدرن و ریسپانسیو، لندینگ پیج و طراحی رابط کاربری، به‌علاوه‌ی بهینه‌سازی سرعت و تجربه‌ی کاربری سایت‌های موجود.',
  'How do I start a project?':'چطور پروژه را شروع کنم؟','Use the message builder below: pick a topic, describe your idea in a few lines and send it to me on Telegram.':'از پیام‌ساز پایین استفاده کنید: موضوع را انتخاب کنید، ایده‌تان را در چند خط بنویسید و در پیوی تلگرام برایم بفرستید.',
  'How is the cost decided?':'هزینه چطور مشخص می‌شود؟',"It depends on the pages, features and design you need. Send me your idea and I'll reply with a clear quote.":'بستگی به تعداد صفحات، امکانات و طراحی مورد نیاز دارد. ایده‌تان را بفرستید تا قیمت مشخص را اعلام کنم.',
  'Will my website work on mobile?':'آیا سایت من روی موبایل خوب کار می‌کند؟','Yes. Every site I build is responsive and tested on phones, tablets and desktops.':'بله. همه‌ی سایت‌هایی که می‌سازم ریسپانسیو هستند و روی موبایل، تبلت و دسکتاپ تست می‌شوند.',
  'Can you improve my existing website?':'می‌توانید سایت فعلی من را بهتر کنید؟','Yes. I can redesign it or optimize its speed and user experience without starting from zero.':'بله. می‌توانم آن را بازطراحی کنم یا سرعت و تجربه‌ی کاربری‌اش را بدون شروع از صفر بهینه کنم.',
  'Which technologies do you use?':'از چه فناوری‌هایی استفاده می‌کنید؟','HTML, CSS, JavaScript and Python, with Git and GitHub for version control.':'HTML، CSS، جاوااسکریپت و پایتون، همراه با Git و GitHub برای مدیریت نسخه.',
  "Let's Work Together":'بیایید با هم کار کنیم',"Have an idea or project in mind? Let's turn it into reality.":'ایده یا پروژه‌ای در ذهن دارید؟ بیایید آن را به واقعیت تبدیل کنیم.',
  'Topic':'موضوع','Website design':'طراحی وب‌سایت','Landing page':'لندینگ پیج','UI design':'طراحی رابط کاربری','Website optimization':'بهینه‌سازی وب‌سایت','Something else':'موضوع دیگر',
  'Name (optional)':'نام (اختیاری)','Describe your project in 2–3 lines':'پروژه‌تان را در ۲ تا ۳ خط توضیح دهید','Ready message':'پیام آماده','Copy message':'کپی پیام',
  'Message me on Telegram (PV)':'پیام در تلگرام (پیوی)','🐙 GitHub':'🐙 گیت‌هاب','✈️ Telegram':'✈️ تلگرام','📸 Instagram':'📸 اینستاگرام','Telegram':'تلگرام','Instagram':'اینستاگرام',
  'What happens next?':'بعدش چه می‌شود؟','Send me a short message about your idea or need.':'یک پیام کوتاه درباره‌ی ایده یا نیازتان بفرستید.','We talk briefly so I understand your goals.':'کوتاه صحبت می‌کنیم تا هدف‌هایتان را بفهمم.','You get a written proposal with scope and timing.':'یک پیشنهاد مکتوب با محدوده‌ی کار و زمان‌بندی دریافت می‌کنید.',
  '© 2026 Mohammad Taha. All Rights Reserved.':'© ۲۰۲۶ محمد طاها. تمامی حقوق محفوظ است.','💬 Message me':'💬 پیام بده'
};
const UI = {
  en: { lines: ['building modern websites, one commit at a time', 'designing clean, fast interfaces', 'turning ideas into real products'], ph: 'e.g. I need a modern landing page for my shop', copied: 'Message copied ✓', tg: 'Opening my Telegram PV — message copied too.', ig: 'Opening Instagram — message copied, paste it in the DM.', em: 'Opening your email app…', btn: 'فارسی', title: 'Mohammad Taha — Web Developer & Designer' },
  fa: { lines: ['ساخت وب‌سایت‌های مدرن، یک کامیت در هر قدم', 'طراحی رابط‌های تمیز و سریع', 'تبدیل ایده‌ها به محصول واقعی'], ph: 'مثلاً: برای فروشگاهم یک لندینگ پیج مدرن می‌خواهم', copied: 'پیام کپی شد ✓', tg: 'در حال باز کردن پیوی تلگرام — پیام کپی هم شد.', ig: 'در حال باز کردن اینستاگرام — پیام کپی شد، در دایرکت پیست کنید.', em: 'در حال باز کردن برنامه‌ی ایمیل…', btn: 'EN', title: 'محمد طاها — توسعه‌دهنده و طراح وب' }
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
const topic = $('#topic'), gname = $('#gname'), gdesc = $('#gdesc'), gmsg = $('#gmsg'), tg = $('#tg'), st = $('#status');
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
$('#ig').addEventListener('click', () => { copyMsg(); st.textContent = UI[LANG].ig; });
if (EMAIL) {
  const row = document.createElement('a'); row.className = 'card rowl'; row.href = 'mailto:' + EMAIL;
  row.innerHTML = '<b>Email</b><span></span>'; row.lastChild.textContent = EMAIL;
  document.querySelector('.social .note').before(row);
  const mb = document.createElement('a'); mb.className = 'btn btn-ghost'; mb.textContent = 'Send by email'; mb.href = '#';
  mb.addEventListener('click', e => { e.preventDefault(); location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(topic.value) + '&body=' + encodeURIComponent(gmsg.value); st.textContent = UI[LANG].em; });
  $('#ig').after(mb);
}

/* ====== Project details modal ====== */
const MUI = {
  en: { overview: 'Overview', features: 'Key features', tech: 'Built with', shot: 'Screenshot', live: 'Live preview', open: 'Open in new tab', close: 'Close', gh: 'GitHub', demo: 'Live Demo', ask: 'Contact me for a demo' },
  fa: { overview: 'معرفی', features: 'امکانات کلیدی', tech: 'ساخته‌شده با', shot: 'تصویر', live: 'پیش‌نمایش زنده', open: 'باز کردن در تب جدید', close: 'بستن', gh: 'گیت‌هاب', demo: 'دمو زنده', ask: 'برای دمو با من صحبت کنید' }
};
const dlg = document.createElement('dialog');
dlg.className = 'pm'; dlg.setAttribute('aria-labelledby', 'pm-title');
document.body.appendChild(dlg);
let openIdx = null, tabLive = false;
const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function renderModal() {
  if (openIdx === null) return;
  const p = PROJECTS[openIdx], u = MUI[LANG], t = LANG === 'fa' ? (FA[p.name] || p.name) : p.name;
  const host = (p.live || p.preview || '').replace(/^https?:\/\//, '');
  const view = tabLive && p.preview
    ? `<iframe src="${esc(p.preview)}" title="${esc(p.name)}" loading="lazy" sandbox="allow-scripts allow-same-origin allow-forms" referrerpolicy="no-referrer"></iframe>`
    : `<img src="${esc(p.img)}" alt="${esc(p.name)}">`;
  dlg.innerHTML = `
    <div class="pm-head"><h3 id="pm-title">${esc(t)}</h3>${p.status ? `<span class="status pm-status${p.done ? ' done' : ''}">${LANG === 'fa' ? (FA[p.status] || p.status) : p.status}</span>` : ''}
      <button class="pm-x" type="button" aria-label="${u.close}">×</button></div>
    <div class="pm-body">
      ${p.preview ? `<div class="pm-tabs"><button type="button" data-tab="shot" class="${tabLive ? '' : 'on'}">${u.shot}</button><button type="button" data-tab="live" class="${tabLive ? 'on' : ''}">${u.live}</button></div>` : ''}
      <div class="frame"><div class="fbar"><i></i><i></i><i></i><span>${esc(host || p.name)}</span></div><div class="view">${view}</div></div>
      <h4>${u.overview}</h4>${p.long[LANG].map(x => `<p>${esc(x)}</p>`).join('')}
      <h4>${u.features}</h4><ul class="pm-feat">${p.features[LANG].map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      <h4>${u.tech}</h4><div class="tags">${p.tech.map(x => `<span>${esc(x)}</span>`).join('')}</div>
      <div class="pm-links">${p.github ? `<a class="btn btn-sm" href="${esc(p.github)}" target="_blank" rel="noopener">${u.gh}</a>` : ''}
        ${p.live ? `<a class="btn btn-sm btn-ghost" href="${esc(p.live)}" target="_blank" rel="noopener">${u.open}</a>` : ''}
        ${p.cta ? `<a class="btn btn-sm" href="#contact" data-topic="4" data-close="1">${u.ask}</a>` : ''}</div>
    </div>`;
}
function openProject(i) { openIdx = i; tabLive = false; renderModal(); dlg.showModal(); document.documentElement.classList.add('modal-open'); dlg.scrollTop = 0; }
dlg.addEventListener('close', () => { document.documentElement.classList.remove('modal-open'); openIdx = null; dlg.innerHTML = ''; });
dlg.addEventListener('click', e => {
  if (e.target === dlg || e.target.closest('.pm-x')) return dlg.close();
  const tab = e.target.closest('[data-tab]'); if (tab) { tabLive = tab.dataset.tab === 'live'; renderModal(); return; }
  const ask = e.target.closest('[data-close]');
  if (ask) { topic.selectedIndex = +ask.dataset.topic; build(); dlg.close(); }
});
document.addEventListener('click', e => {
  const card = e.target.closest('.proj'); if (!card || e.target.closest('a')) return;
  openProject(+card.dataset.i);
});

/* ====== Apply language ====== */
function setLang(l) {
  LANG = l; const r = document.documentElement;
  r.lang = l; r.dir = l === 'fa' ? 'rtl' : 'ltr';
  translate(l);
  gdesc.placeholder = UI[l].ph; document.title = UI[l].title; $('#lang').textContent = UI[l].btn;
  renderModal(); li = 0; ci = 0; del = false; st.textContent = ''; build();
  try { localStorage.setItem('lang', l); } catch (e) {}
}
$('#lang').onclick = () => setLang(LANG === 'fa' ? 'en' : 'fa');
setLang(LANG);

/* ====== Release lock: site stays closed until the timer ends ====== */
const RELEASE = new Date('2026-11-11T10:30:00Z').getTime();   // ← change this to move the opening time
const LOCK_SPAN = 80415000;           // length of the countdown (for the progress bar)
(function () {
  const lock = $('#lock'); if (!lock) return;
  if (Date.now() >= RELEASE) { lock.remove(); return; }
  const root = document.documentElement;
  const guarded = ['header.nav', 'main', 'footer', '.chat', '#top'].map(q => document.querySelector(q)).filter(Boolean);
  root.classList.add('locked'); guarded.forEach(e => e.setAttribute('inert', ''));
  const C = 276.46, p2 = n => String(n).padStart(2, '0');
  const fmt = (o, tz) => { try { return new Date(RELEASE).toLocaleString(o, { dateStyle: 'medium', timeStyle: 'short', timeZone: tz }); } catch (e) { return ''; } };
  $('#lk-date').textContent = 'Opens: ' + fmt(undefined) + '  ·  تهران: ' + fmt('fa-IR', 'Asia/Tehran');
  let done = false;
  function confetti() {
    const c = $('#lk-fx'), g = c.getContext('2d'); c.width = innerWidth; c.height = innerHeight;
    const cols = ['#8f85ff', '#4ddcff', '#4ade80', '#ffffff'];
    const ps = Array.from({ length: 140 }, () => ({ x: innerWidth / 2, y: innerHeight / 2, vx: (Math.random() - .5) * 18, vy: Math.random() * -16 - 3, s: Math.random() * 7 + 3, c: cols[Math.random() * 4 | 0], l: 110 }));
    (function f() { g.clearRect(0, 0, c.width, c.height);
      ps.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .35; p.l--; g.globalAlpha = Math.max(0, p.l / 110); g.fillStyle = p.c; g.fillRect(p.x, p.y, p.s, p.s); });
      if (ps[0].l > 0) requestAnimationFrame(f); else g.clearRect(0, 0, c.width, c.height); })();
  }
  function tick() {
    const d = Math.max(0, RELEASE - Date.now()), h = Math.floor(d / 36e5), m = Math.floor(d / 6e4) % 60, s = Math.floor(d / 1e3) % 60;
    $('#lk-h').textContent = p2(h); $('#lk-m').textContent = p2(m); $('#lk-s').textContent = p2(s);
    $('#r-h').style.strokeDashoffset = C * (1 - Math.min(1, h / 24));
    $('#r-m').style.strokeDashoffset = C * (1 - m / 60);
    $('#r-s').style.strokeDashoffset = C * (1 - ((d % 6e4) / 6e4));
    $('#lk-bar').style.width = Math.min(100, Math.max(0, (1 - d / LOCK_SPAN) * 100)) + '%';
    if (d <= 0 && !done) {
      done = true; clearInterval(iv);
      lock.classList.add('live'); $('#lk-title').textContent = "We're live! 🎉"; $('#lk-sub').textContent = 'افتتاح شد — خوش آمدید';
      confetti();
      setTimeout(() => { lock.classList.add('opening'); root.classList.remove('locked'); guarded.forEach(e => e.removeAttribute('inert')); setTimeout(() => lock.remove(), 1000); }, 2200);
    }
  }
  const iv = setInterval(tick, 200); tick();
})();
