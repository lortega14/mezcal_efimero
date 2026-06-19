// === Script block 1 ===
(function(){
    var gate=document.getElementById('agegate');
    document.getElementById('agYes').addEventListener('click',function(){
      gate.style.display='none';
      document.body.classList.remove('gate-open');
    });
    document.getElementById('agNo').addEventListener('click',function(){
      gate.classList.add('denied');
    });
  })();

// === Script block 2 ===
const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));

  const heroBg = document.getElementById('heroBg');
  window.addEventListener('scroll', () => {
    if (window.scrollY < window.innerHeight) heroBg.style.transform = `scale(1.06) translateY(${window.scrollY*0.18}px)`;
  });

  const io = new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:0.14});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  const lb = document.getElementById('lb'), lbImg = lb.querySelector('img');
  document.querySelectorAll('[data-lb]').forEach(el=>{
    el.addEventListener('click', ()=>{
      const img = el.tagName === 'IMG' ? el : el.querySelector('img');
      lbImg.src = img.src; lb.classList.add('open');
    });
  });
  lb.addEventListener('click', ()=>{lb.classList.remove('open'); lbImg.src='';});

  // CTA "Pedir por WhatsApp" usa su enlace directo (sin handler)

  // === Mobile Navigation ===
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  function openNav() {
    nav.classList.add('nav-open');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    nav.classList.remove('nav-open');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', () => {
    nav.classList.contains('nav-open') ? closeNav() : openNav();
  });
  navOverlay.addEventListener('click', closeNav);

  // Close nav when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close nav on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  // Close nav if resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) closeNav();
  });
