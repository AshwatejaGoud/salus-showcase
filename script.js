/* ============================================================
   SALUS SHOWCASE — script.js
   ============================================================ */
(function () {
  'use strict';

  /* ---------- status bar (shared) ---------- */
  const statusBar = () => `
    <div class="sbar">
      <span>9:41</span>
      <span class="dots">
        <i data-lucide="signal"></i><i data-lucide="wifi"></i><i data-lucide="battery-full"></i>
      </span>
    </div>`;

  /* ---------- PATIENT HOME mockup ---------- */
  function patientHome() {
    return `<div class="device-screen">${statusBar()}
      <div class="app">
        <div class="ptop">
          <div>
            <div class="brand">Sal<b>us</b></div>
            <div class="ploc"><i data-lucide="map-pin"></i> Gadwal, Telangana</div>
          </div>
          <div class="pavatar">A</div>
        </div>
        <div class="psearch"><i data-lucide="search"></i><span>Search clinics, doctors, labs…</span></div>
        <div class="pchips">
          <span class="chip on">All</span><span class="chip">Dental</span><span class="chip">Eye Care</span><span class="chip">General</span><span class="chip">Pediatrics</span>
        </div>
        <div class="app-scroll">
          <div class="psec">Verified clinics near you</div>
          ${clinicCard('🏥','pc-g','Sunrise Multi-Specialty','Hospital · 1.2 km','4.8','₹300')}
          ${clinicCard('🦷','pc-t','Dr. Sharma Dental Studio','Dental · 2.1 km','4.9','₹250')}
          ${clinicCard('👁️','pc-n','Vision Care Eye Centre','Eye Care · 3.0 km','4.7','₹400')}
        </div>
        <div class="pnav">
          ${navItem('home','Home',true)}${navItem('search','Search')}${navItem('calendar-check','Bookings')}${navItem('user','Profile')}
        </div>
      </div></div>`;
  }
  const clinicCard = (emoji, cls, name, meta, rate, price) => `
    <div class="pclinic">
      <div class="pc-img ${cls}">${emoji}</div>
      <div class="pc-body">
        <div class="pc-name">${name} <span class="pc-badge">VERIFIED</span></div>
        <div class="pc-meta">${meta}</div>
        <div class="pc-row">
          <span class="pc-rate"><i data-lucide="star"></i>${rate}</span>
          <span class="pc-price">From ${price}</span>
        </div>
      </div>
    </div>`;
  const navItem = (icon, label, on) => `<div class="ni ${on ? 'on' : ''}"><i data-lucide="${icon}"></i><span>${label}</span></div>`;

  /* ---------- PRO DASHBOARD mockup ---------- */
  function proDashboard() {
    return `<div class="device-screen">${statusBar()}
      <div class="pro">
        <div class="pro-top">
          <div>
            <div class="pro-hi">Good morning,</div>
            <div class="pro-name">Salus <b>Pro</b></div>
          </div>
          <div class="pro-bell"><i data-lucide="bell"></i></div>
        </div>
        <div class="pro-scroll">
          <div class="pro-stats">
            ${proStat('calendar','Today', '24', '+12% vs avg', 'up')}
            ${proStat('indian-rupee','Revenue', '₹48k', '+8% this week', 'up')}
            ${proStat('users','Patients', '1,284', '+34 new', 'up')}
            ${proStat('star','Rating', '4.8', 'Top 5% nearby', 'up')}
          </div>
          <div class="pcard">
            <div class="pcard-h"><span class="t">Revenue · last 7 days</span><span class="m">+18%</span></div>
            <div class="bars">
              <div class="bar" style="height:45%"></div><div class="bar" style="height:62%"></div>
              <div class="bar" style="height:38%"></div><div class="bar" style="height:78%"></div>
              <div class="bar" style="height:55%"></div><div class="bar peak" style="height:95%"></div>
              <div class="bar" style="height:70%"></div>
            </div>
          </div>
          <div class="pcard">
            <div class="pcard-h"><span class="t">Today's appointments</span><span class="m">See all</span></div>
            ${appt('PR','Priya Reddy','Cardiology · Dr. Mehta','10:00')}
            ${appt('AK','Arjun Kumar','General · Dr. Rao','10:30')}
            ${appt('SN','Sana Naaz','Dental · Dr. Sharma','11:15')}
          </div>
          <div class="pcard pro-ai">
            <div class="pcard-h"><span class="t"><i data-lucide="sparkles"></i> AI Insight</span><span class="tag">PRO</span></div>
            <p>Thursdays are your busiest. Open 2 more evening slots to capture ~₹6,200 in missed demand.</p>
          </div>
        </div>
        <div class="pro-nav">
          ${proNav('layout-dashboard','Home',true)}${proNav('calendar','Appts')}${proNav('bar-chart-3','Revenue')}${proNav('sparkles','AI')}
        </div>
      </div></div>`;
  }
  const proStat = (icon, label, val, delta, dir) => `
    <div class="pstat">
      <div class="pl"><i data-lucide="${icon}"></i>${label}</div>
      <div class="pv">${val}</div>
      <div class="pd ${dir}">${delta}</div>
    </div>`;
  const appt = (init, name, meta, time) => `
    <div class="appt"><div class="ph">${init}</div><div class="ab"><div class="an">${name}</div><div class="am">${meta}</div></div><span class="at">${time}</span></div>`;
  const proNav = (icon, label, on) => `<div class="ni ${on ? 'on' : ''}"><i data-lucide="${icon}"></i><span>${label}</span></div>`;

  /* ---------- inject mockups ---------- */
  const MOCKUPS = { 'patient-home': patientHome, 'patient-home-2': patientHome, 'pro-dashboard': proDashboard };
  document.querySelectorAll('[data-mockup]').forEach((el) => {
    const fn = MOCKUPS[el.getAttribute('data-mockup')];
    if (fn) el.innerHTML = fn();
  });

  /* ---------- FEATURE CARDS ---------- */
  const FEATURES = [
    ['🩸', 'Lab Tests at Home', 'Reports on your phone', 'A phlebotomist comes to your door for blood tests & full-body checkups. Digital reports land on your phone.'],
    ['🚨', 'Emergency SOS', 'One tap. Instant help.', 'One tap alerts your contacts and the nearest hospital with your live location. Every second counts.'],
    ['🤰', 'Pregnancy Journey', 'Week-by-week care', 'Personalised guidance, checkup reminders and vaccination tracking for both mum and baby.'],
    ['🐶', 'Pet Health Care', 'Family includes furry ones', 'Vets, vaccinations and a pet pharmacy — book a home visit or a clinic slot in seconds.'],
    ['💊', 'Medicine Delivery', 'Often within the hour', 'Upload a prescription and get genuine medicines delivered to your door — fast.'],
    ['🎙️', 'Symptom-to-Specialist AI', 'Speak your language', 'Describe how you feel — by voice, in your language — and our AI routes you to the right specialist.'],
    ['🌍', 'Travel Healthcare', 'Healthy anywhere', 'Vaccines, travel kits and tele-consults so you stay protected wherever you go.'],
    ['🤝', 'Second Opinion', 'Verified senior doctors', 'Unsure about a diagnosis? Get a trusted second opinion from a senior specialist.'],
  ];
  const grid = document.getElementById('feature-grid');
  if (grid) {
    grid.innerHTML = FEATURES.map(([emoji, title, tag, desc], i) => `
      <div class="flip" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
        <div class="flip-inner">
          <div class="flip-face flip-front">
            <div class="flip-emoji">${emoji}</div>
            <div class="flip-arrow"><i data-lucide="refresh-cw"></i></div>
            <div class="flip-title">${title}</div>
            <div class="flip-tag">${tag}</div>
          </div>
          <div class="flip-face flip-back">
            <h4>${title}</h4>
            <p>${desc}</p>
          </div>
        </div>
      </div>`).join('');
    // tap to flip (mobile)
    grid.querySelectorAll('.flip').forEach((c) =>
      c.addEventListener('click', () => c.classList.toggle('flipped')));
  }

  /* ---------- icons ---------- */
  if (window.lucide) lucide.createIcons();

  /* ---------- AOS ---------- */
  if (window.AOS) AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 80 });

  /* ---------- NAV scrolled ---------- */
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- COUNT-UP ---------- */
  function animateCount(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const dur = 1600, start = performance.now();
    const fmt = (n) => Math.round(n).toLocaleString('en-IN');
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = fmt(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const counters = document.querySelectorAll('[data-target]');
  const cObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !e.target.dataset.done) {
        e.target.dataset.done = '1';
        animateCount(e.target);
      }
    });
  }, { threshold: 0.6 });
  counters.forEach((c) => cObserver.observe(c));

  /* ---------- GSAP parallax (Apple-like scrub) ---------- */
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    // hero phone drifts up as you scroll
    gsap.to('.phone-float', {
      yPercent: -18, ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 },
    });
    // hero blobs parallax
    gsap.to('.blob-gold', { yPercent: 30, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 } });
    gsap.to('.blob-teal', { yPercent: -20, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 } });
    // solution phones scrub in from the sides
    const sd = document.querySelectorAll('#solution .device');
    if (sd[0]) gsap.from(sd[0], { x: -120, opacity: 0, ease: 'power2.out', scrollTrigger: { trigger: '#solution', start: 'top 75%', end: 'top 35%', scrub: 1 } });
    if (sd[1]) gsap.from(sd[1], { x: 120, opacity: 0, ease: 'power2.out', scrollTrigger: { trigger: '#solution', start: 'top 75%', end: 'top 35%', scrub: 1 } });
  }

  /* ---------- INTERACTIVE BOOKING DEMO ---------- */
  const demoScreen = document.getElementById('demo-screen');
  if (demoScreen) {
    const DOCTORS = [
      ['Dr. Ananya Mehta', 'Cardiologist · 12 yrs', 'AM'],
      ['Dr. Vikram Rao', 'General Physician · 9 yrs', 'VR'],
      ['Dr. Sara Khan', 'Dermatologist · 7 yrs', 'SK'],
    ];
    const SLOTS = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'];
    const OFF = new Set(['10:00']); // one booked slot
    const state = { step: 0, doctor: null, slot: null };

    function render() {
      if (state.step === 2) { renderConfirm(); return; }
      const isDoc = state.step === 0;
      demoScreen.innerHTML = `${statusBar()}
        <div style="height:calc(100% - 34px);display:flex;flex-direction:column">
          <div class="demo-head">
            <div class="demo-title">${isDoc ? 'Choose a doctor' : 'Pick a time'}</div>
            <div class="demo-sub">${isDoc ? 'Sunrise Multi-Specialty · Gadwal' : 'with ' + state.doctor[0] + ' · Today, 13 Jun'}</div>
          </div>
          <div class="demo-steps"><span class="on"></span><span class="${state.step >= 1 ? 'on' : ''}"></span><span></span></div>
          <div class="demo-body">${isDoc ? docList() : slotGrid()}</div>
          <div class="demo-foot">
            ${isDoc
              ? `<button class="dbtn" id="d-next" ${state.doctor ? '' : 'disabled'}>Continue <i data-lucide="arrow-right"></i></button>`
              : `<button class="dbtn gold" id="d-confirm" ${state.slot ? '' : 'disabled'}>Confirm booking <i data-lucide="check"></i></button>`}
          </div>
        </div>`;
      bind();
      if (window.lucide) lucide.createIcons();
    }
    const docList = () => DOCTORS.map(([n, m, init], i) => `
      <div class="opt ${state.doctor && state.doctor[0] === n ? 'sel' : ''}" data-doc="${i}">
        <div class="oi">${init}</div>
        <div class="ob"><div class="on2">${n}</div><div class="om">${m}</div></div>
        <i data-lucide="check-circle-2" class="ock"></i>
      </div>`).join('');
    const slotGrid = () => `<div class="slots">${SLOTS.map((s) => {
      const off = OFF.has(s); const sel = state.slot === s;
      return `<div class="slot ${off ? 'off' : ''} ${sel ? 'sel' : ''}" ${off ? '' : `data-slot="${s}"`}>${s}</div>`;
    }).join('')}</div>`;

    function bind() {
      demoScreen.querySelectorAll('[data-doc]').forEach((o) =>
        o.addEventListener('click', () => { state.doctor = DOCTORS[+o.dataset.doc]; render(); }));
      demoScreen.querySelectorAll('[data-slot]').forEach((o) =>
        o.addEventListener('click', () => { state.slot = o.dataset.slot; render(); }));
      const next = demoScreen.querySelector('#d-next');
      if (next) next.addEventListener('click', () => { if (state.doctor) { state.step = 1; render(); } });
      const conf = demoScreen.querySelector('#d-confirm');
      if (conf) conf.addEventListener('click', () => { if (state.slot) { state.step = 2; render(); } });
    }

    function renderConfirm() {
      demoScreen.innerHTML = `
        <div class="demo-confirm">
          <div class="confirm-ring"><i data-lucide="check"></i></div>
          <h3 style="font-size:22px;font-weight:800">Booking Confirmed!</h3>
          <p style="color:rgba(255,255,255,.75);font-size:13px;margin-top:10px;line-height:1.6">
            ${state.doctor[0]}<br/>Today · ${state.slot} · Sunrise Multi-Specialty
          </p>
          <div style="margin-top:18px;font-size:11px;color:rgba(255,255,255,.5);background:rgba(255,255,255,.08);padding:9px 14px;border-radius:10px">
            A confirmation has been sent. The clinic sees this live in Salus Pro.
          </div>
          <button class="dbtn gold" id="d-reset" style="margin-top:22px;width:auto;padding:11px 22px">
            <i data-lucide="rotate-ccw"></i> Try again
          </button>
        </div>`;
      if (window.lucide) lucide.createIcons();
      demoScreen.querySelector('#d-reset').addEventListener('click', () => {
        state.step = 0; state.doctor = null; state.slot = null; render();
      });
    }
    render();
  }

  /* ---------- FORMS ---------- */
  function wireForm(formId, msgId) {
    const f = document.getElementById(formId);
    if (!f) return;
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById(msgId);
      if (msg) msg.style.opacity = '1';
      f.reset();
      setTimeout(() => { if (msg) msg.style.opacity = '0'; }, 4000);
    });
  }
  wireForm('hero-form', 'hero-form-msg');
  wireForm('cta-form', 'cta-form-msg');

  /* ---------- TOASTS ---------- */
  const toast = document.getElementById('toast');
  let toastTimer;
  document.querySelectorAll('[data-toast]').forEach((b) =>
    b.addEventListener('click', (e) => {
      e.preventDefault();
      toast.textContent = b.getAttribute('data-toast');
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    }));

  /* ---------- DEMO VIDEO WALKTHROUGH (auto-playing "video") ---------- */
  function bookingScene() {
    return `<div class="device-screen">${statusBar()}
      <div class="app">
        <div class="demo-head" style="padding:12px 16px 8px">
          <div class="demo-title">Pick a time</div>
          <div class="demo-sub">Dr. Ananya Mehta · Cardiology · Today</div>
        </div>
        <div style="padding:0 16px">
          <div class="slots">
            <div class="slot">09:00</div><div class="slot sel">09:30</div><div class="slot off">10:00</div>
            <div class="slot">10:30</div><div class="slot">11:00</div><div class="slot">11:30</div>
          </div>
        </div>
        <div style="margin-top:auto;padding:14px 16px 18px">
          <button class="dbtn gold" style="pointer-events:none">Confirm booking <i data-lucide="check"></i></button>
        </div>
      </div></div>`;
  }
  function confirmedScene() {
    return `<div class="device-screen">${statusBar()}
      <div class="demo-confirm" style="position:relative;height:calc(100% - 34px)">
        <div class="confirm-ring"><i data-lucide="check"></i></div>
        <h3 style="font-size:21px;font-weight:800">Booking Confirmed!</h3>
        <p style="color:rgba(255,255,255,.78);font-size:13px;margin-top:9px;line-height:1.6">Dr. Ananya Mehta · Today, 09:30<br/>Sunrise Multi-Specialty, Gadwal</p>
      </div></div>`;
  }
  function growScene() {
    return `<div class="device-screen">${statusBar()}
      <div class="pro">
        <div class="pro-top"><div><div class="pro-hi">Grow your clinic</div><div class="pro-name">Salus <b>Pro</b></div></div><div class="pro-bell"><i data-lucide="trending-up"></i></div></div>
        <div class="pro-scroll">
          <div class="pcard" style="display:flex;align-items:center;gap:10px">
            <div class="grow-ic" style="width:36px;height:36px;margin:0;border-radius:11px"><i data-lucide="globe"></i></div>
            <div><div style="font-size:12px;font-weight:800;color:#0A2463">SEO website live</div><div style="font-size:9.5px;color:#7a8290">Ranking #1 for “clinic in Gadwal”</div></div>
          </div>
          <div class="pcard" style="display:flex;align-items:center;gap:10px">
            <div class="grow-ic" style="width:36px;height:36px;margin:0;border-radius:11px"><i data-lucide="megaphone"></i></div>
            <div><div style="font-size:12px;font-weight:800;color:#0A2463">Ads running</div><div style="font-size:9.5px;color:#7a8290">+38 new patients this month</div></div>
          </div>
          <div class="pcard pro-ai"><div class="pcard-h"><span class="t"><i data-lucide="sparkles"></i> AI Insight</span><span class="tag">PRO</span></div><p>Reviews just hit 4.9★ — add ₹500 ad spend to ride the surge.</p></div>
        </div>
      </div></div>`;
  }

  const modal = document.getElementById('demo-modal');
  if (modal) {
    const WALK = [
      { html: patientHome(), cap: 'Open Salus — verified clinics, right around you.' },
      { html: bookingScene(), cap: 'Pick a doctor and a free slot.' },
      { html: confirmedScene(), cap: 'Booked in seconds — the clinic sees it live.' },
      { html: proDashboard(), cap: 'Clinics run it all from Salus Pro.' },
      { html: growScene(), cap: 'And Salus grows your clinic — website, ads & reviews.' },
    ];
    const SCENE_MS = 3400;
    const vdevice = document.getElementById('vdevice');
    const vcap = document.getElementById('vcap');
    const vbar = document.getElementById('vbar');
    const vplay = document.getElementById('vplay');
    const vdots = document.getElementById('vdots');
    let idx = 0, playing = false, t0 = 0, raf = 0;

    vdots.innerHTML = WALK.map((_, i) => `<button class="vdot" data-i="${i}" aria-label="Scene ${i + 1}"></button>`).join('');
    const dotEls = Array.from(vdots.querySelectorAll('.vdot'));

    function show(i) {
      idx = (i + WALK.length) % WALK.length;
      vdevice.innerHTML = WALK[idx].html;
      vcap.textContent = WALK[idx].cap;
      dotEls.forEach((d, k) => d.classList.toggle('on', k === idx));
      if (window.lucide) lucide.createIcons();
      t0 = performance.now();
    }
    function tick(now) {
      if (!playing) return;
      const p = Math.min((now - t0) / SCENE_MS, 1);
      vbar.style.width = (p * 100).toFixed(1) + '%';
      if (p >= 1) show(idx + 1);
      raf = requestAnimationFrame(tick);
    }
    function setIcon(name) { vplay.innerHTML = `<i data-lucide="${name}"></i>`; if (window.lucide) lucide.createIcons(); }
    function play() { playing = true; setIcon('pause'); t0 = performance.now(); cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); }
    function pause() { playing = false; setIcon('play'); cancelAnimationFrame(raf); }
    function openModal() { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.classList.add('vlock'); show(0); play(); }
    function closeModal() { pause(); modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.classList.remove('vlock'); }

    const wd = document.getElementById('watch-demo');
    if (wd) wd.addEventListener('click', openModal);
    vplay.addEventListener('click', () => (playing ? pause() : play()));
    dotEls.forEach((d) => d.addEventListener('click', () => { show(+d.dataset.i); if (!playing) play(); }));
    modal.querySelectorAll('[data-vclose]').forEach((b) => b.addEventListener('click', closeModal));
    const vcta = document.getElementById('vcta');
    if (vcta) vcta.addEventListener('click', () => { closeModal(); document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' }); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
  }

})();
