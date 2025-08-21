/* بيانات المحافظات السورية - هنا سوريا */
window.provincesData = [
  {
    id: 'damascus',
    name: 'دمشق',
    description: 'العاصمة السورية ومدينة التاريخ العريق؛ أقدم عواصم العالم المأهولة، تحتضن أسواقًا عتيقة وجوامع وكنائس ومنازل دمشقية ذات أفنية داخلية.',
    dialect: 'لهجة شامية حضرية فصيحة الميل، تتميز بوضوح النطق ورقّة الإيقاع.',
    economy: 'تاريخيًا مركزًا تجاريًا وخدميًا وثقافيًا، وتضم نشاطًا حرفيًا وسياحيًا مهمًا.',
    cuisine: ['محاشي', 'كبة سفرجلية', 'فتات', 'هريسة شامية'],
    attractions: ['الجامع الأموي', 'سوق الحميدية', 'قصر العظم', 'البيت الشامي'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Umayyad_Mosque_Courtyard.jpg/640px-Umayyad_Mosque_Courtyard.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Damascus_Old_City_-_Souq_Al-Hamidiyeh.jpg/640px-Damascus_Old_City_-_Souq_Al-Hamidiyeh.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Az-Zahir_Baybars_Mausoleum_Damascus.jpg/640px-Az-Zahir_Baybars_Mausoleum_Damascus.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: دمشق', url: 'https://ar.wikipedia.org/wiki/%D8%AF%D9%85%D8%B4%D9%82' },
      { label: 'خرائط غوغل', url: 'https://www.google.com/maps?q=%D8%AF%D9%85%D8%B4%D9%82' },
      { label: 'اليونسكو: مدينة دمشق القديمة', url: 'https://whc.unesco.org/en/list/20/' }
    ],
    history: 'عاصمة الأمويين ومركز حضاري عبر العصور، لعبت دورًا محوريًا تجاريًا وثقافيًا في المنطقة.',
    geography: 'تقع في جنوب غرب سوريا، محاطة بالغوطة وتخترقها أودية صغيرة، مناخ متوسطي جاف نسبيًا.',
    festivals: ['معرض دمشق الدولي', 'مهرجان سينمائي محلي'],
    education: 'جامعات ومعاهد عريقة مثل جامعة دمشق وكليات متخصصة.',
    health: 'مستشفيات تعليمية ومتخصصة ومراكز رعاية أولية.',
    keywords: ['الشام','العاصمة','الأسواق','الأموي']
  },
  {
    id: 'rif-dimashq',
    name: 'ريف دمشق',
    description: 'تحيط بالعاصمة، وتضم سهول الغوطة وسلاسل جبلية وبلدات تاريخية ذات طابع ريفي ومدني.',
    dialect: 'لهجة شامية ريفية متقاربة من لهجة دمشق مع فروق بسيطة في القافية والإطالة.',
    economy: 'زراعة البساتين والفاكهة، وبعض الصناعات الصغيرة والتجارة والخدمات.',
    cuisine: ['مكدوس', 'لبنة بلدية', 'معجنات ريفية'],
    attractions: ['بلودان', 'الزبداني', 'صيدنايا', 'معلولا'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Maaloula_2010.jpg/640px-Maaloula_2010.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Bloudan_Al-Hamra_Street.jpg/640px-Bloudan_Al-Hamra_Street.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: ريف دمشق', url: 'https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9_%D8%B1%D9%8A%D9%81_%D8%AF%D9%85%D8%B4%D9%82' },
      { label: 'خرائط غوغل', url: 'https://www.google.com/maps?q=%D8%B1%D9%8A%D9%81%20%D8%AF%D9%85%D8%B4%D9%82' }
    ],
    keywords: ['الغوطة','الزبداني','بلودان','صيدنايا']
  },
  {
    id: 'aleppo',
    name: 'حلب',
    description: 'مدينة صناعية وتاريخية كبرى، عُرفت بقلعتها وأسواقها المسقوفة وتراثها الموسيقي والطبخي.',
    dialect: 'لهجة حلبية مميزة بوضوح مخارج الحروف وبعض المفردات الخاصة مثل: "إيمتا"، "شو عم تعمل".',
    economy: 'صناعة النسيج والغذاء، التجارة والأسواق التقليدية، وحرف يدوية.',
    cuisine: ['كباب حلبي', 'كبة نيّة', 'كبة لبنية', 'محشي كرنب'],
    attractions: ['قلعة حلب', 'المدينة القديمة', 'الأسواق المسقوفة'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Citadel_of_Aleppo_2016.jpg/640px-Citadel_of_Aleppo_2016.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Aleppo_Souk.jpg/640px-Aleppo_Souk.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: حلب', url: 'https://ar.wikipedia.org/wiki/%D8%AD%D9%84%D8%A8' },
      { label: 'اليونسكو: مدينة حلب القديمة', url: 'https://whc.unesco.org/en/list/21/' },
      { label: 'خرائط غوغل', url: 'https://www.google.com/maps?q=%D8%AD%D9%84%D8%A8' }
    ],
    history: 'من أقدم المدن المأهولة؛ ازدهرت في العهدين الأيوبي والمملوكي، وأسواقها من الأكبر تاريخيًا.',
    geography: 'شمال سوريا، تضاريس سهلية وهضاب منخفضة، مناخ قاري نسبيًا.',
    festivals: ['فعاليات موسيقية تراثية', 'معارض صناعية'],
    education: 'جامعة حلب وكليات هندسية وطبية.',
    health: 'مستشفيات مركزية وتعليمية.',
    keywords: ['القلعة','الكبة','الصناعة']
  },
  {
    id: 'homs',
    name: 'حمص',
    description: 'تقع على نهر العاصي؛ مركز تاريخي بين الشمال والجنوب، وتشتهر بتنوعها الثقافي.',
    dialect: 'لهجة قريبة من الحلبية والشامية مع سمات محلية.',
    economy: 'صناعات غذائية ونسيجية، تجارة محلية، وزراعة محيطة.',
    cuisine: ['فتة حمص', 'كبة حمصية', 'سجق'],
    attractions: ['قلعة الحصن', 'مدينة حمص القديمة'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Krak_des_Chevaliers_2009.jpg/640px-Krak_des_Chevaliers_2009.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: حمص', url: 'https://ar.wikipedia.org/wiki/%D8%AD%D9%85%D8%B5' },
      { label: 'قلعة الحصن (ويكي)', url: 'https://ar.wikipedia.org/wiki/%D9%82%D9%84%D8%B9%D8%A9_%D8%A7%D9%84%D8%AD%D8%B5%D9%86' }
    ],
    keywords: ['العاصي','القلعة']
  },
  {
    id: 'hama',
    name: 'حماة',
    description: 'مدينة النواعير على نهر العاصي، ذات طابع تراثي وعمارة تقليدية.',
    dialect: 'لهجة قريبة من حمص مع مفردات محلية.',
    economy: 'زراعة وصناعات غذائية وحرف تقليدية.',
    cuisine: ['مجدّرة', 'كبة حماص', 'شعيبية'],
    attractions: ['نواعير حماة', 'قلعة حماة'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Norias_in_Hama.jpg/640px-Norias_in_Hama.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: حماة', url: 'https://ar.wikipedia.org/wiki/%D8%AD%D9%85%D8%A7%D8%A9' }
    ],
    keywords: ['نواعير','العاصي']
  },
  {
    id: 'latakia',
    name: 'اللاذقية',
    description: 'مدينة ساحلية على المتوسط، ميناء رئيسي ومقصد سياحي صيفي.',
    dialect: 'لهجة ساحلية مائلة للمدّ والإطالة بنبرة رخوة.',
    economy: 'مرفأ، تجارة، سياحة، زراعة حمضيات وتبغ.',
    cuisine: ['أسماك مشوية', 'متبل باذنجان', 'فريكة بحرية'],
    attractions: ['شاطئ الشقق', 'جامعة تشرين'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Latakia_coast.jpg/640px-Latakia_coast.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: اللاذقية', url: 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%84%D8%A7%D8%B0%D9%82%D9%8A%D8%A9' }
    ],
    keywords: ['البحر','الميناء','حمضيات']
  },
  {
    id: 'tartus',
    name: 'طرطوس',
    description: 'مدينة ساحلية ومركز زراعي، قريبة من جزر أرواد الأثرية.',
    dialect: 'ساحلية قريبة من لهجة اللاذقية.',
    economy: 'زراعة وتجارة وسياحة بحرية.',
    cuisine: ['أسماك أرواد', 'تبولة', 'كوسى محشي'],
    attractions: ['جزيرة أرواد', 'الكورنيش البحري'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Arwad_Island.jpg/640px-Arwad_Island.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: طرطوس', url: 'https://ar.wikipedia.org/wiki/%D8%B7%D8%B1%D8%B7%D9%88%D8%B3' }
    ],
    keywords: ['أرواد','البحر']
  },
  {
    id: 'idlib',
    name: 'إدلب',
    description: 'شمال غربي سوريا؛ أرض زراعية خصبة ومعالم أثرية مثل البازلت والمدن المنسية.',
    dialect: 'قريبة من الحلبية مع سمات ريفية.',
    economy: 'زراعة زيتون ومحاصيل متنوعة وحرف.',
    cuisine: ['زيت وزعتر', 'مؤونة ريفية', 'كبة إدلبية'],
    attractions: ['المدن المنسية', 'متحف إدلب'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Dead_Cities_Syria.jpg/640px-Dead_Cities_Syria.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: إدلب', url: 'https://ar.wikipedia.org/wiki/%D8%A5%D8%AF%D9%84%D8%A8' }
    ],
    keywords: ['المدن المنسية','زيتون']
  },
  {
    id: 'deir-ezzor',
    name: 'دير الزور',
    description: 'مدينة الفرات والبادية؛ جسور على النهر وتراث بدوي وزراعي.',
    dialect: 'لهجة جزراوية بسمات بدوية وقافية واضحة.',
    economy: 'زراعة القطن والقمح والتمور ونشاط نفطي سابق.',
    cuisine: ['كبسة بدوية', 'تمر', 'لبن رائب'],
    attractions: ['جسر دير الزور', 'متحف دير الزور'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Deir_ez-Zor_Suspension_Bridge.jpg/640px-Deir_ez-Zor_Suspension_Bridge.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: دير الزور', url: 'https://ar.wikipedia.org/wiki/%D8%AF%D9%8A%D8%B1_%D8%A7%D9%84%D8%B2%D9%88%D8%B1' }
    ],
    keywords: ['الفرات','البادية']
  },
  {
    id: 'hasakah',
    name: 'الحسكة',
    description: 'شمال شرق سوريا؛ محافظة زراعية متعددة الثقافات على ضفاف الخابور.',
    dialect: 'جزراوية مع تأثر بلهجات كردية وسريانية وعربية بدوية.',
    economy: 'زراعة القمح والشعير والقطن وتربية المواشي.',
    cuisine: ['خبز تنور', 'منتجات ألبان', 'كباب'],
    attractions: ['تل حلف', 'نهر الخابور'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Khabur_River.jpg/640px-Khabur_River.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: الحسكة', url: 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%AD%D8%B3%D9%83%D8%A9' }
    ],
    keywords: ['الخابور','قمح']
  },
  {
    id: 'raqqa',
    name: 'الرقة',
    description: 'مدينة على الفرات؛ إرث تاريخي في الصنوبريّة والقصور العباسية القديمة.',
    dialect: 'جزراوية قريبة من دير الزور والحسكة.',
    economy: 'زراعة قطن وحبوب وثروة حيوانية.',
    cuisine: ['منسف', 'أكلات لحم وضأن', 'تمر'],
    attractions: ['أسوار الرقة', 'نهر الفرات'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Raqqa_River_Euphrates.jpg/640px-Raqqa_River_Euphrates.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: الرقة', url: 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B1%D9%82%D8%A9' }
    ],
    keywords: ['الفرات','القطن']
  },
  {
    id: 'daraa',
    name: 'درعا',
    description: 'جنوب سوريا؛ بصرى الشام الأثرية وسهول حوران الزراعية.',
    dialect: 'لهجة قريبة من الأردن وفلسطين بسمات حورانية.',
    economy: 'زراعة قمح وخضار وفواكه، تجارة محلية.',
    cuisine: ['مسقعة', 'مقلوبة', 'مناسف'],
    attractions: ['بصرى الشام', 'المدرج الروماني'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bosra_Roman_Theatre_02.jpg/640px-Bosra_Roman_Theatre_02.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: درعا', url: 'https://ar.wikipedia.org/wiki/%D8%AF%D8%B1%D8%B9%D8%A7' },
      { label: 'اليونسكو: بصرى', url: 'https://whc.unesco.org/en/list/22/' }
    ],
    keywords: ['حوران','بصرى']
  },
  {
    id: 'sweida',
    name: 'السويداء',
    description: 'جبل العرب؛ طبيعة بركانية وكروم عنب وتقاليد ضيافة عريقة.',
    dialect: 'لهجة جبلية فصيحة الميل، مفردات قريبة من الشامية والبدوية.',
    economy: 'زراعة العنب والتفاح والكرز وحِرَف محلية.',
    cuisine: ['عريكة', 'قهوة مُرّة', 'مناسف'],
    attractions: ['قنوات', 'شهبا الأثرية'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Shahba_museum.jpg/640px-Shahba_museum.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: السويداء', url: 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D8%AF%D8%A7%D8%A1' }
    ],
    keywords: ['جبل العرب','الكروم']
  },
  {
    id: 'quneitra',
    name: 'القنيطرة',
    description: 'جولان سوري؛ طبيعة هضبية ومياه وينابيع ومعالم تاريخية.',
    dialect: 'قريبة من لهجات الجنوب السوري.',
    economy: 'زراعة وتربية ماشية ونشاط سياحي بيئي محدود.',
    cuisine: ['أطباق ريفية', 'ألبان وأجبان'],
    attractions: ['بحيرة مسعدة', 'ينابيع'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Masada_Lake.jpg/640px-Masada_Lake.jpg'
    ],
    links: [
      { label: 'ويكيبيديا: القنيطرة', url: 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%82%D9%86%D9%8A%D8%B7%D8%B1%D8%A9' }
    ],
    keywords: ['الجولان','هضاب']
  },
  
];

