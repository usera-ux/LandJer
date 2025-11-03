
  document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideCount = dots.length;

    
    function showSlide(index) {
      if (index >= slideCount) index = 0;
      if (index < 0) index = slideCount - 1;
      slides.style.transform = `translateX(-${index * 100}%)`;
      currentSlide = index;

      
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }


    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
      });
    });

 
    showSlide(0);



    const projectCards = document.querySelector('.project-cards');
    const dots2 = document.querySelectorAll('.dot2');
    let currentProjectSlide = 0;
    const cardWidth = 450; 
    const cardsPerSlide = 3; 
    const totalCards = document.querySelectorAll('.project-card').length;
    const maxSlides = Math.ceil(totalCards / cardsPerSlide);

    function showProjectSlide(index) {
      if (index >= maxSlides) index = 0;
      if (index < 0) index = maxSlides - 1;
      const translateX = -index * (cardWidth * cardsPerSlide);
      projectCards.style.transform = `translateX(${translateX}px)`;
      currentProjectSlide = index;

      
      dots2.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }


    dots2.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showProjectSlide(index);
      });
    });

    
    showProjectSlide(0);

    

    const landCards = document.querySelector('.slides2');
    const dots3 = document.querySelectorAll('.dot3');
    let currentLandSlide = 0;
    const landCardWidth = 460;
    const landCardsPerSlide = 3; 
    const totalLandCards = document.querySelectorAll('.land-card').length;
    const maxLandSlides = Math.ceil(totalLandCards / landCardsPerSlide);

    function showLandSlide(index) {
      if (index >= maxLandSlides) index = 0;
      if (index < 0) index = maxLandSlides - 1;
      const translateX = -index * (landCardWidth * landCardsPerSlide);
      landCards.style.transform = `translateX(${translateX}px)`;
      currentLandSlide = index;


      dots3.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }

    
    dots3.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showLandSlide(index);
      });
    });


const reviewSlides = document.querySelector('.reviews-slider-4 .slides');
const reviewDots = document.querySelectorAll('.dot4');

if (reviewSlides && reviewDots.length > 0) {
  const reviewSlideWidth = 470 + 50; 

  reviewDots.forEach(dot => {
    dot.addEventListener('click', function () {
      reviewDots.forEach(d => d.classList.remove('active'));
      this.classList.add('active');

      const index = parseInt(this.getAttribute('data-slide'), 10);
      reviewSlides.style.transform = `translateX(${-index * reviewSlideWidth}px)`;
    });
  });
}


const youtubeSlides = document.querySelector('.slides5');
const youtubeDots = document.querySelectorAll('.dot5');

if (youtubeSlides && youtubeDots.length > 0) {
  const youtubeCardWidth = 490 + 47; 

  youtubeDots.forEach(dot => {
    dot.addEventListener('click', function () {
      youtubeDots.forEach(d => d.classList.remove('active'));
      this.classList.add('active');

      const index = parseInt(this.getAttribute('data-slide'), 10);
      youtubeSlides.style.transform = `translateX(${-index * youtubeCardWidth}px)`;
    });
  });
}
// Управление топ-баром по клику на стрелку
const toggleBtn = document.getElementById('toggleTopBarBtn');
const topBar = document.querySelector('.footer-top-bar');

if (toggleBtn && topBar) {
  toggleBtn.addEventListener('click', function () {
    topBar.classList.toggle('hidden');
    const arrowImg = toggleBtn.querySelector('img');
    if (arrowImg) {
      arrowImg.classList.toggle('rotated');
    }
  });
}
  // Словари переводов
  const translations = {
    ru: {
      'hero-title': 'Земельные участки,<br><span>15 минут от центра Астаны</span>',
      'hero-subtitle': 'участки в городе Косшы<br>от 4,5 млн ₸ за 8 соток',
      'hero-desc': 'Земля – с давних времен является признаком богатства, достатка, стабильности.<br><br>В современном мире ценность собственных участков высока, как никогда. Земля в собственности – ваш гарант безопасности, спокойствия, стабильности, надежности, семейного благополучия',
      'nav-about':'О нас',
      'about-title': 'О компании',
      'about-desc1': 'У нас 10-летний опыт в продаже земель любого целевого назначения, приобретены в собственность десятки гектар и проданы более 1 000 участков<br>К каждому участку подведено электричество.',
      'about-desc2': 'LANDJER - единственная компания в Акмолинской области...',
      'about-desc3': 'Только наши земельные участки продаются с проведенными электросетями, кроме того, гарантируем полное юридическое сопровождение.',
      'conditions-title': 'Условия приобретения',
      'conditions-desc1': 'Это текст о компании. Он необходим для продвижения Вашего сайта...',
      'conditions-desc2': 'Мини-описание, для дальнейшего продвижения Вашего сайта...',
      'catalog-title': 'Каталог участков',
      'land-status': 'Свободно',
      'land-size': 'Размер',
      'land-comms': 'Коммуникации',
      'land-ready': 'готовые',
      'land-block': 'Блок',
      'trust-title': 'Нам доверяют',
      'trust-item1': 'Юридическая чистота',
      'trust-item2': 'Коммуникации',
      'trust-item3': 'Близость к городу',
      'trust-item4': 'Рассрочка',
      'reviews-title': 'Отзывы',
      'read-more': 'Читать в 2GIS',
      'faq-title': 'Частые вопросы',
      'watch-youtube': 'Посмотреть на YouTube'
    },
    kk: {
      'hero-title': 'Жер учаскелері,<br><span>Астана орталығынан 15 минут</span>',
      'hero-subtitle': 'Көші қаласындағы учаскелер<br>8 соткаға 4,5 млн ₸-ден',
      'hero-desc': 'Жер — ерте заманнан бері байлық, жеткіліктілік пен тұрақтылық белгісі болып келеді.<br><br>Қазіргі әлемде меншікті учаскелердің құны ешқашан болмағандай жоғары. Жердің өзіңізге тиесілі болуы — қауіпсіздік, тыныштық, тұрақтылық, сенімділік пен отбасылық қалыңдықтың кепілі.',
      'nav-about':'Біз туралы',
      'about-title': 'Компания туралы',
      'about-desc1': 'Бізде кез келген мақсатқа арналған жерлерді сату бойынша 10 жылдық тәжірибе бар, ондаған гектар жер меншікке алынды және 1000-нан астам учаскелер сатылды<br>Әрбір учаскеге электр желісі әкелінген.',
      'about-desc2': 'LANDJER — Ақмола облысындағы жалғыз компания...',
      'about-desc3': 'Тек біздің жер учаскелеріміз электр желілері тартылған күйінде сатылады, сонымен қатар толық заңдық қамтамасыз етуді кепілдікке аламыз.',
      'conditions-title': 'Сатып алу шарттары',
      'conditions-desc1': 'Бұл компания туралы мәтін. Сіздің веб-сайтыңыздың продвижение үшін қажет.',
      'conditions-desc2': 'Мини-сипаттама, веб-сайтыңызды одан әрі әрі қарай дамыту үшін.',
      'catalog-title': 'Учаскелер каталогы',
      'land-status': 'Бос',
      'land-size': 'Өлшемі',
      'land-comms': 'Коммуникациялар',
      'land-ready': 'дайын',
      'land-block': 'Блок',
      'trust-title': 'Бізге сенеді',
      'trust-item1': 'Заңдық тазалық',
      'trust-item2': 'Комуникациялар',
      'trust-item3': 'Қаладан жақындығы',
      'trust-item4': 'Төлем шарттары',
      'reviews-title': 'Пікірлер',
      'read-more': '2GIS-те оқыңыз',
      'faq-title': 'Жиі қойылатын сұрақтар',
      'watch-youtube': 'YouTube-та қараңыз'
    }
  };

  // Получить текущий язык из localStorage или браузера
  function getCurrentLang() {
    return localStorage.getItem('lang') || 'ru';
  }

  // Установить язык
  function setLang(lang) {
    localStorage.setItem('lang', lang);
    document.querySelector('.lang-selector').textContent = lang.toUpperCase() + ' ▾';
    applyTranslations(lang);
  }

  // Применить переводы
  function applyTranslations(lang) {
    const langData = translations[lang] || translations.ru;
    document.querySelectorAll('[data-lang]').forEach(el => {
      const key = el.getAttribute('data-lang');
      if (langData[key]) {
        el.innerHTML = langData[key];
      }
    });
  }
  

  // Переключение языка по клику
  document.querySelector('.lang-selector').addEventListener('click', () => {
    const current = getCurrentLang();
    const nextLang = current === 'ru' ? 'kk' : 'ru';
    setLang(nextLang);
  });

  // Инициализация при загрузке
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = getCurrentLang();
    setLang(savedLang);
  }
);
  

  });

  const toggleBtn = document.getElementById('toggleTopBarBtn');
const topBar = document.querySelector('.footer-top-bar');

if (toggleBtn && topBar) {
  toggleBtn.addEventListener('click', function () {
    topBar.classList.toggle('hidden');
    const arrowImg = toggleBtn.querySelector('img');
    if (arrowImg) {
      arrowImg.classList.toggle('rotated');
    }
  });
  const burger = document.querySelector('.burger-icon');
  const navMenu = document.querySelector('.nav-menu');

  if (burger && navMenu) {
    burger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Закрывать меню при клике на ссылку
    document.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Скрытие/показ верхней панели футера
  const toggleBtn = document.getElementById('toggleTopBarBtn');
  const topBar = document.querySelector('.footer-top-bar');
  if (toggleBtn && topBar) {
    toggleBtn.addEventListener('click', () => {
      topBar.classList.toggle('hidden');
      const img = toggleBtn.querySelector('img');
      if (img) img.classList.toggle('rotated');
    });} 
}


