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

  // تحسين سلوك الروابط الداخلية للتمرير السلس وتعويض الهيدر
  document.addEventListener('click', function (e) {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (id && id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        history.replaceState(null, '', id);
        scrollSectionIntoView(target);
      }
    }
  });

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
  // أقسام محسنة
  let extraSectionsContainer;

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

    // أقسام إضافية اختيارية: التاريخ، الجغرافيا، المهرجانات، التعليم، الصحة
    if (!extraSectionsContainer) {
      extraSectionsContainer = document.createElement('div');
      extraSectionsContainer.className = 'modal-sections';
      modal.querySelector('.modal-body').appendChild(extraSectionsContainer);
    }
    extraSectionsContainer.innerHTML = '';
    const extra = [
      { key: 'history', title: 'التاريخ' },
      { key: 'geography', title: 'الجغرافيا' },
      { key: 'festivals', title: 'مهرجانات وفعاليات', isList: true },
      { key: 'education', title: 'التعليم' },
      { key: 'health', title: 'الصحة والخدمات' }
    ];
    extra.forEach(function (sec) {
      if (!p[sec.key]) return;
      const card = document.createElement('section');
      card.className = 'gold-card';
      const h = document.createElement('h4'); h.textContent = sec.title; card.appendChild(h);
      if (sec.isList && Array.isArray(p[sec.key])) {
        const ul = document.createElement('ul'); ul.className = 'gold-list';
        p[sec.key].forEach(function (item) { const li = document.createElement('li'); li.textContent = item; ul.appendChild(li); });
        card.appendChild(ul);
      } else {
        const pEl = document.createElement('p'); pEl.textContent = p[sec.key]; card.appendChild(pEl);
      }
      extraSectionsContainer.appendChild(card);
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

  // إشعارات (أسئلة اختيار من متعدد)
  const toastsEl = document.getElementById('toasts');
  const quizBank = [
    {
      id: 'q1',
      title: 'سؤال سريع',
      text: 'ما العاصمة السورية؟',
      choices: [
        { label: 'حلب', correct: false },
        { label: 'دمشق', correct: true },
        { label: 'حمص', correct: false }
      ]
    },
    {
      id: 'q2',
      title: 'معلومة ثقافية',
      text: 'على أي نهر تقع حماة؟',
      choices: [
        { label: 'الفرات', correct: false },
        { label: 'العاصي', correct: true },
        { label: 'الخابور', correct: false }
      ]
    }
  ];

  function showQuizToast() {
    if (!toastsEl || quizBank.length === 0) return;
    const q = quizBank[Math.floor(Math.random() * quizBank.length)];
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <h5>${q.title}</h5>
      <p>${q.text}</p>
      <div class="choices">
        ${q.choices.map((c, i) => `<button data-i="${i}">${c.label}</button>`).join('')}
      </div>
    `;
    toastsEl.appendChild(toast);
    const btns = toast.querySelectorAll('button');
    btns.forEach(function(btn){
      btn.addEventListener('click', function(){
        const idx = parseInt(btn.getAttribute('data-i'), 10);
        const pick = q.choices[idx];
        btns.forEach(b => b.disabled = true);
        if (pick.correct) {
          btn.classList.add('choice-correct');
          setTimeout(() => toast.remove(), 1200);
        } else {
          btn.classList.add('choice-wrong');
          const correctIdx = q.choices.findIndex(c => c.correct);
          if (correctIdx >= 0) btns[correctIdx].classList.add('choice-correct');
          setTimeout(() => toast.remove(), 1600);
        }
      });
    });
    // إزالة تلقائية بعد 10 ثوانٍ إن لم يُجَب
    setTimeout(() => { if (document.body.contains(toast)) toast.remove(); }, 10000);
  }

  // أظهر إشعارًا بعد قليل من الدخول
  setTimeout(showQuizToast, 3000);
  // أقسام الجامعات/الوزارات/المساجد
  const universitiesGrid = document.getElementById('universitiesGrid');
  const ministriesGrid = document.getElementById('ministriesGrid');
  const mosquesGrid = document.getElementById('mosquesGrid');

  function renderInfoGrid(targetEl, items, type) {
    if (!targetEl || !Array.isArray(items)) return;
    targetEl.innerHTML = '';
    items.forEach(function (it) {
      const card = document.createElement('article');
      card.className = 'info-card';
      const title = document.createElement('h3'); title.textContent = it.name; card.appendChild(title);
      const meta = document.createElement('div'); meta.className = 'meta'; meta.textContent = [it.city, it.note].filter(Boolean).join(' • '); card.appendChild(meta);
      const actions = document.createElement('div'); actions.className = 'actions';
      if (it.site) { const a = document.createElement('a'); a.href = it.site; a.target = '_blank'; a.rel = 'noopener'; a.textContent = 'الموقع'; actions.appendChild(a); }
      if (it.map) { const a = document.createElement('a'); a.href = it.map; a.target = '_blank'; a.rel = 'noopener'; a.textContent = 'الخريطة'; actions.appendChild(a); }
      card.appendChild(actions);
      targetEl.appendChild(card);
    });
  }

  if (window.institutionsData) {
    renderInfoGrid(universitiesGrid, window.institutionsData.universities, 'univ');
    renderInfoGrid(ministriesGrid, window.institutionsData.ministries, 'min');
    renderInfoGrid(mosquesGrid, window.institutionsData.mosques, 'mosque');
  }
})();