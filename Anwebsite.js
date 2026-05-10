
/* ---- DATA ---- */
const SERVICES = [
  { icon:'📱', title:'Social Media Marketing',    desc:'Strategic campaigns that grow your audience, boost engagement, and turn followers into loyal customers.' },
  { icon:'📊', title:'Social Media Management',   desc:'Full management of your social channels — content calendar, posting, monitoring, and community growth.' },
  { icon:'🎯', title:'Facebook Meta Ads',          desc:'Laser-targeted Meta ad campaigns that deliver real leads and measurable ROI for your business.' },
  { icon:'🎵', title:'TikTok Ads',                 desc:'Viral-ready TikTok ad creatives that capture attention and drive massive brand awareness at scale.' },
  { icon:'💻', title:'Website Creation',           desc:'Premium, conversion-optimized websites built for speed, SEO, and stunning first impressions.' },
  { icon:'🔍', title:'SEO Optimization',           desc:'Dominate search rankings with proven on-page and off-page SEO strategies that bring organic traffic.' },
  { icon:'🎬', title:'Video Editing',              desc:'Professional video production and editing that tells your brand story and stops the scroll.' },
  { icon:'🎨', title:'Graphic Designing',          desc:'Bold, beautiful visuals that communicate your brand message and stand out in any feed or format.' },
  { icon:'✦',  title:'Branding & Identity Design', desc:'Complete brand identity systems — logo, typography, color, and guidelines that command premium positioning.' },
];

const WHY_US = [
  { icon:'🚀', num:'500', suffix:'+', unit:'Campaigns', label:'Result-Driven Strategies' },
  { icon:'🎯', num:'98',  suffix:'%', unit:'Retention',  label:'Targeted Advertising' },
  { icon:'💡', num:'10',  suffix:'×', unit:'Avg. ROI',   label:'Creative Solutions' },
  { icon:'⚡', num:'24',  suffix:'h', unit:'Response',   label:'Fast Communication' },
  { icon:'📈', num:'8',   suffix:'M+',unit:'Ad Spend',   label:'High ROI Marketing', prefix:'$' },
  { icon:'🏆', num:'50',  suffix:'+', unit:'Clients',    label:'Professional Team' },
];

const PORTFOLIO = [
  { tag:'Meta Ads',    icon:'🎯', title:'FashionBrand PK',   result:'+380% ROAS',          desc:'Full-funnel Facebook campaign driving DTC sales',          color:'#FF2E63' },
  { tag:'SEO + Web',   icon:'🔍', title:'TechStartup UAE',   result:'#1 Google Ranking',   desc:'Complete website overhaul and SEO domination',             color:'#FF7A00' },
  { tag:'Branding',    icon:'✦',  title:'LuxeRetail Identity',result:'Brand Recognition ×5',desc:'End-to-end identity design and brand strategy',            color:'#818cf8' },
  { tag:'TikTok Ads',  icon:'🎵', title:'FoodChain Lahore',  result:'2M+ Views',           desc:'Viral TikTok creative driving in-store traffic',           color:'#FF4A3D' },
  { tag:'Social Media',icon:'📱', title:'HealthCare Clinic', result:'+12K Followers',      desc:'90-day social media growth and content strategy',          color:'#FF2E63' },
  { tag:'Video',       icon:'🎬', title:'Auto Dealership',   result:'300% Lead Increase',  desc:'Premium video ads for social and YouTube',                 color:'#FF7A00' },
];

const TESTIMONIALS = [
  { name:'Sarah Mitchell',  role:'CEO, TechVibe Solutions', text:'AN Marketing transformed our online presence completely. Our leads tripled in just 3 months. Absolutely outstanding work!', rating:5, initials:'SM', color:'#FF2E63' },
  { name:'James Al-Rashid', role:'Founder, NovaBuild',      text:'The Meta Ads campaign they ran for us broke every internal record. We saw 400% ROAS in the first month. Incredible team.', rating:5, initials:'JR', color:'#FF7A00' },
  { name:'Priya Sharma',    role:'Marketing Director, Lumina Co.', text:'From branding to social media — they handle everything with precision and creativity. Best agency we\'ve ever worked with.', rating:5, initials:'PS', color:'#818cf8' },
  { name:'Marcus Okafor',   role:'E-commerce Owner',        text:'Our website redesign and SEO strategy brought us to page 1 on Google within 2 months. ROI has been phenomenal.', rating:5, initials:'MO', color:'#FF4A3D' },
];

const PROCESS = [
  { step:'01', title:'Discovery Call',     desc:'We deep-dive into your business goals, target audience, competitors, and current marketing gaps.' },
  { step:'02', title:'Strategy Blueprint', desc:'Our team crafts a custom, data-backed digital marketing strategy tailored to your growth objectives.' },
  { step:'03', title:'Campaign Launch',    desc:'We execute with precision — launching campaigns, creatives, and content across all relevant channels.' },
  { step:'04', title:'Optimize & Scale',  desc:'Continuous analysis, A/B testing, and optimization to maximize ROI and accelerate your growth.' },
];

/* ---- RENDER ---- */

// Dashboard bars
(function(){
  const el = document.getElementById('dash-bars');
  const heights = [28,46,36,68,52,78,62,88,72,56,82,100];
  el.innerHTML = heights.map(h=>`<div class="bar" style="height:${h}%;opacity:${0.5+h/200}"></div>`).join('');
})();

// Services
(function(){
  const g = document.getElementById('services-grid');
  g.innerHTML = SERVICES.map((s,i)=>`
    <div class="srv fade-up" style="transition-delay:${i*0.07}s">
      <div class="srv-icon">${s.icon}</div>
      <div class="srv-title">${s.title}</div>
      <div class="srv-desc">${s.desc}</div>
      <div class="srv-arrow">→</div>
    </div>`).join('');
})();

// Why Us
(function(){
  const g = document.getElementById('why-grid');
  g.innerHTML = WHY_US.map((w,i)=>`
    <div class="why-card fade-up" style="transition-delay:${i*0.08}s">
      <div class="why-icon">${w.icon}</div>
      <div class="why-num" data-target="${w.num}" data-suffix="${w.suffix}"${w.prefix?` data-prefix="${w.prefix}"`:''}>${w.prefix||''}0${w.suffix}</div>
      <div class="why-unit">${w.unit}</div>
      <div class="why-lbl">${w.label}</div>
    </div>`).join('');
})();

// Portfolio
(function(){
  const g = document.getElementById('port-grid');
  g.innerHTML = PORTFOLIO.map((p,i)=>`
    <div class="port-card fade-up" style="transition-delay:${i*0.08}s">
      <div class="port-visual" style="background:linear-gradient(135deg,${p.color}20,${p.color}44)">
        <div class="port-vis-icon">${p.icon}</div>
        <div class="port-vis-tag">${p.tag}</div>
      </div>
      <div class="port-body">
        <span class="port-badge" style="background:${p.color}25;color:${p.color}">${p.tag}</span>
        <div class="port-title">${p.title}</div>
        <div class="port-desc">${p.desc}</div>
        <div class="port-result" style="color:${p.color}">${p.result}</div>
      </div>
    </div>`).join('');
})();

// Process
(function(){
  const g = document.getElementById('proc-grid');
  g.innerHTML = PROCESS.map((p,i)=>`
    <div class="proc-card fade-up" style="transition-delay:${i*0.1}s">
      <div class="proc-circle">${p.step}</div>
      <div class="proc-title">${p.title}</div>
      <div class="proc-desc">${p.desc}</div>
    </div>`).join('');
})();

// Testimonials
let activeTest = 0;
function renderTest(){
  const t = TESTIMONIALS[activeTest];
  document.getElementById('test-card').innerHTML = `
    <div class="test-stars">${'<span>★</span>'.repeat(t.rating)}</div>
    <p class="test-text">"${t.text}"</p>
    <div class="test-author">
      <div class="test-av" style="background:${t.color}33;color:${t.color}">${t.initials}</div>
      <div><div class="test-name">${t.name}</div><div class="test-role">${t.role}</div></div>
    </div>`;
  const dots = document.getElementById('test-dots');
  dots.innerHTML = TESTIMONIALS.map((_,i)=>`<button class="test-dot${i===activeTest?' active':''}" onclick="setTest(${i})"></button>`).join('');
}
function setTest(i){ activeTest=i; renderTest(); }
renderTest();
setInterval(()=>{ activeTest=(activeTest+1)%TESTIMONIALS.length; renderTest(); }, 5000);

/* ---- NAV SCROLL ---- */
window.addEventListener('scroll', function(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ---- HAMBURGER ---- */
const ham = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('menu-close-btn');
ham.addEventListener('click',()=>{ ham.classList.toggle('open'); mobileMenu.classList.toggle('open'); });
closeBtn.addEventListener('click',()=>{ ham.classList.remove('open'); mobileMenu.classList.remove('open'); });
document.querySelectorAll('.mobile-link').forEach(l=>l.addEventListener('click',()=>{ ham.classList.remove('open'); mobileMenu.classList.remove('open'); }));

/* ---- FADE-UP ON SCROLL ---- */
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:0.12});
function observeAll(){ document.querySelectorAll('.fade-up').forEach(el=>observer.observe(el)); }
observeAll();

/* ---- ANIMATED COUNTERS ---- */
let countersRan = false;
const counterObserver = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting && !e.target.dataset.counted){
      e.target.dataset.counted = '1';
      animateCounter(e.target);
    }
  });
},{threshold:0.4});
function animateCounter(el){
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix||'';
  const prefix = el.dataset.prefix||'';
  const duration = 1600;
  const start = performance.now();
  function step(now){
    const elapsed = now - start;
    const progress = Math.min(elapsed/duration,1);
    const ease = 1-Math.pow(1-progress,3);
    const val = target*ease;
    el.textContent = prefix + (Number.isInteger(target)?Math.floor(val):val.toFixed(1)) + suffix;
    if(progress<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
function setupCounters(){
  document.querySelectorAll('[data-target]').forEach(el=>counterObserver.observe(el));
}
setupCounters();

/* ---- LOADER ---- */
window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.getElementById('loader').classList.add('hidden');
    observeAll();
    setupCounters();
  },600);
});

/* ---- FORM SUBMIT ---- */
function handleSubmit(e){
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = 'linear-gradient(135deg,#4ade80,#22c55e)';
  setTimeout(()=>{ btn.textContent='Send Message →'; btn.style.background=''; e.target.reset(); },3000);
}

/* ---- SMOOTH RE-OBSERVE after dynamic content ---- */
setTimeout(observeAll, 300);
