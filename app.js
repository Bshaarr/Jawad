/* هنا سوريا - تهيئة تفاعلية */
(function () {
  'use strict';
  function getHeaderOffset() {
    var header = document.querySelector('.site-header');
    return header ? header.offsetHeight + 8 : 0; // هامش صغير بعد الرأس
  }

  function scrollSectionIntoView(sectionEl) {
    if (!sectionEl) return;
    try {
      var y = sectionEl.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset();
      window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' });
    } catch (_) {
      sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const greetings = [
    'مرحبًا بكم في "هنا سوريا"؛ حيث تبدأ الرحلة نحو الجمال والتاريخ.' ,
    'أهلًا وسهلًا بكم؛ اكتشفوا تنوّع المحافظات السورية في مكان واحد.' ,
    'سلامٌ عليكم؛ هذه بوابتكم لاستكشاف الثقافة واللهجات والمعالم السورية.' ,
    'مرحبًا بكم؛ نفتح أمامكم دروب المدن والجبال والسهول في سوريا.' ,
    'أهلًا بكم؛ هنا تجدون سحر الأمكنة وعبق التراث السوري.'
  ];
  const greetingEl = document.getElementById('greeting');
  if (greetingEl) {
    const msg = greetings[Math.floor(Math.random() * greetings.length)];
    greetingEl.textContent = msg;
  }

  const enterButton = document.getElementById('enterButton');
  if (enterButton) {
    enterButton.addEventListener('click', () => {
      openPanel('provinces');
      // ثبّت الرابط ومرّر إلى أعلى لوحة المحافظات
      try { history.replaceState(null, '', '#provinces'); } catch (_) {}
      var provincesEl = document.getElementById('provinces');
      scrollSectionIntoView(provincesEl);
    });
  }

  // عرض المحافظات
  const provincesGrid = document.getElementById('provincesGrid');
  const searchInput = document.getElementById('searchInput');

  function normalizeText(s) { return (s || '').toString().toLowerCase(); }

  // تتبع المحافظة المعروضة
  let currentProvinceId = null;

  function renderProvinces(list) {
    if (!provincesGrid) return;
    provincesGrid.innerHTML = '';
    list.forEach(function (p) {
      const card = document.createElement('article');
      card.className = 'province-card';
      card.setAttribute('role', 'listitem');
      card.setAttribute('tabindex', '0');
      card.dataset.id = p.id;

      const cover = (p.coverImage || (p.images && p.images[0])) || '';
      const media = document.createElement('div');
      media.className = 'province-media';
      media.style.backgroundImage = cover ? `url("${cover}")` : 'none';
      card.appendChild(media);

      const meta = document.createElement('div');
      meta.className = 'province-meta';
      const nameEl = document.createElement('h3');
      nameEl.className = 'province-name';
      nameEl.textContent = p.name;
      meta.appendChild(nameEl);

      const chips = document.createElement('div');
      chips.className = 'chips';
      const chipItems = [];
      if (p.attractions && p.attractions.length) chipItems.push(p.attractions[0]);
      if (p.cuisine && p.cuisine.length) chipItems.push(p.cuisine[0]);
      if (p.dialect) chipItems.push(p.dialect.split('،')[0]);
      chipItems.slice(0, 3).forEach(function (c) {
        const x = document.createElement('span');
        x.className = 'chip'; x.textContent = c; chips.appendChild(x);
      });
      meta.appendChild(chips);
      card.appendChild(meta);

      function onToggle() { toggleProvinceDetails(p); }
      card.addEventListener('click', onToggle);
      card.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); } });

      provincesGrid.appendChild(card);
    });
  }

  function filterProvinces(q) {
    const query = normalizeText(q);
    if (!query) return window.provincesData.slice();
    return window.provincesData.filter(function (p) {
      const hay = [
        p.name,
        p.description,
        p.dialect,
        p.economy,
        (p.cuisine || []).join(' '),
        (p.attractions || []).join(' '),
        (p.keywords || []).join(' ')
      ].join(' ').toLowerCase();
      return hay.indexOf(query) !== -1;
    });
  }

  if (Array.isArray(window.provincesData)) {
    renderProvinces(window.provincesData);
  }

  if (searchInput) {
    let last = 0;
    searchInput.addEventListener('input', function (e) {
      const now = Date.now();
      if (now - last < 100) return; // خنق بسيط
      last = now;
      const val = e.target.value || '';
      renderProvinces(filterProvinces(val));
    });
  }

  // نافذة التفاصيل
  const modal = document.getElementById('provinceModal');
  const modalGallery = document.getElementById('modalGallery');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalDialect = document.getElementById('modalDialect');
  const modalEconomy = document.getElementById('modalEconomy');
  const modalCuisine = document.getElementById('modalCuisine');
  const modalAttractions = document.getElementById('modalAttractions');
  const modalLinks = document.getElementById('modalLinks');

  function openModal(p) {
    if (!modal) return;
    modalTitle.textContent = p.name;
    modalDescription.textContent = p.description || '';
    modalDialect.textContent = p.dialect || '';
    modalEconomy.textContent = p.economy || '';

    modalCuisine.innerHTML = '';
    (p.cuisine || []).forEach(function (item) {
      const li = document.createElement('li'); li.textContent = item; modalCuisine.appendChild(li);
    });

    modalAttractions.innerHTML = '';
    (p.attractions || []).forEach(function (item) {
      const li = document.createElement('li'); li.textContent = item; modalAttractions.appendChild(li);
    });

    modalGallery.innerHTML = '';
    (p.images || []).slice(0, 6).forEach(function (src) {
      const img = document.createElement('img'); img.loading = 'lazy'; img.src = src; img.alt = p.name; modalGallery.appendChild(img);
    });

    modalLinks.innerHTML = '';
    (p.links || []).forEach(function (link) {
      const a = document.createElement('a'); a.className = 'link-card'; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.href = link.url; a.textContent = link.label; modalLinks.appendChild(a);
    });

    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    currentProvinceId = p.id;
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentProvinceId = null;
  }

  if (modal) {
    modal.addEventListener('click', function (e) { if (e.target && e.target.hasAttribute('data-close')) closeModal(); });
    const btn = modal.querySelector('.modal-close');
    if (btn) btn.addEventListener('click', closeModal);
    window.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  }

  function toggleProvinceDetails(p) {
    if (!modal) return;
    const isSameOpen = currentProvinceId && currentProvinceId === p.id && modal.getAttribute('aria-hidden') === 'false';
    if (isSameOpen) {
      closeModal();
    } else {
      openModal(p);
    }
  }

  // لوحات منبثقة للأقسام
  const panels = {
    provinces: document.getElementById('provinces'),
    resources: document.getElementById('resources'),
  };

  function openPanel(key) {
    Object.keys(panels).forEach(function (k) {
      const el = panels[k];
      if (!el) return;
      const isTarget = (k === key);
      el.classList.toggle('is-open', isTarget);
      el.setAttribute('aria-hidden', String(!isTarget));
      if (isTarget) {
        // إعادة ضبط موضع اللوحة عند الفتح
        try { el.scrollTop = 0; } catch (_) {}
        // عند فتح لوحة المحافظات، أعِد ضبط البحث واعرض كل المحافظات
        if (k === 'provinces') {
          if (searchInput) { searchInput.value = ''; }
          if (Array.isArray(window.provincesData)) { renderProvinces(window.provincesData); }
          // اجعلها صفحة كاملة إن لزم
          el.classList.add('full-page');
          // مرّر إلى بداية اللوحة مع تعويض ارتفاع الرأس بعد إعادة الرسم
          try {
            requestAnimationFrame(function () { scrollSectionIntoView(el); });
          } catch (_) { scrollSectionIntoView(el); }
        }
      }
    });
    document.body.style.overflow = '';
  }

  function closePanels() {
    Object.keys(panels).forEach(function (k) {
      const el = panels[k];
      if (!el) return;
      el.classList.remove('is-open');
      el.classList.remove('full-page');
      el.setAttribute('aria-hidden', 'true');
    });
    document.body.style.overflow = '';
  }

  function isPanelOpen(key) {
    const el = panels[key];
    if (!el) return false;
    return el.classList.contains('is-open');
  }

  function togglePanel(key) {
    if (isPanelOpen(key)) {
      closePanels();
    } else {
      openPanel(key);
    }
  }

  const navHomeBtn = document.getElementById('navHomeBtn');
  const navProvincesBtn = document.getElementById('navProvincesBtn');
  const navResourcesBtn = document.getElementById('navResourcesBtn');
  if (navHomeBtn) navHomeBtn.addEventListener('click', function () {
    closePanels();
    try { history.replaceState(null, '', '#home'); } catch (_) {}
    var homeEl = document.getElementById('home');
    scrollSectionIntoView(homeEl);
  });
  if (navProvincesBtn) navProvincesBtn.addEventListener('click', function () {
    openPanel('provinces');
    try { history.replaceState(null, '', '#provinces'); } catch (_) {}
    var provincesEl = document.getElementById('provinces');
    scrollSectionIntoView(provincesEl);
  });
  if (navResourcesBtn) navResourcesBtn.addEventListener('click', function () { togglePanel('resources'); });

  // أزرار إغلاق اللوحات
  const panelCloseButtons = document.querySelectorAll('.panel .panel-close-btn');
  panelCloseButtons.forEach(function (btn) { btn.addEventListener('click', closePanels); });

  // إغلاق اللوحات بمفتاح Escape عندما لا تكون نافذة المحافظة مفتوحة
  window.addEventListener('keydown', function (e) {
    const modalHidden = !modal || modal.getAttribute('aria-hidden') === 'true';
    if (e.key === 'Escape' && modalHidden) {
      closePanels();
    }
  });
})();