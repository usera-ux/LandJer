document.addEventListener('DOMContentLoaded', function () {

  const slider1 = document.querySelector('.why-kosshy .slider-container');
  if (slider1) {
    const slides = slider1.querySelectorAll('.slide');
    const dots = slider1.querySelectorAll('.dot');

    function showSlide1(index) {
      if (index < 0 || index >= slides.length) return;
      
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      
      slides[index].classList.add('active');
      dots[index].classList.add('active');
      
      slider1.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-slide'), 10);
        if (!isNaN(index)) showSlide1(index);
      });
    });

    showSlide1(0);
  }
//   slider2
  const track = document.querySelector('.project-cards');
  const cards = document.querySelectorAll('.project-card');
  const dots2 = document.querySelectorAll('.dot2');

  if (track && cards.length > 0 && dots2.length > 0) {
    const cardWidth = cards[0].offsetWidth + 25; 
    let currentIndex = 0;

    function showSlide2(index) {
      dots2.forEach(d => d.classList.remove('active'));
      dots2[index].classList.add('active');

      const realIndex = index % cards.length;
      const offset = -realIndex * cardWidth;
      track.style.transform = `translateX(${offset}px)`;
    }

    dots2.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide2(currentIndex);
      });
    });

    showSlide2(0);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const slider2 = document.querySelector('.land-slides .slider-container2');
  if (!slider2) return;

  const slides = slider2.querySelectorAll('.land-card');
  const dots3 = slider2.querySelectorAll('.dot3');

  const cardWidth = 300 + 20; // width + gap
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0 || index >= slides.length) return;

    // Remove active class from all dots
    dots3.forEach(dot => dot.classList.remove('active'));

    // Add active class to current dot
    dots3[index].classList.add('active');

    // Scroll to the slide
    const offset = -index * cardWidth;
    slider2.querySelector('.slides2').style.transform = `translateX(${offset}px)`;
  }

  // Click handlers
  dots3.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  // Initialize
  showSlide(0);
});

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.reviews-slider-4 .slider-container4');
  if (!slider) return;

  const slides = slider.querySelectorAll('.review-card, .video-card');
  const dots4 = slider.querySelectorAll('.dot4'); // ← именно dot4

  const cardWidth = 300 + 30; // ширина + gap
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0 || index >= slides.length) return;

    // Убираем активный класс
    dots4.forEach(dot => dot.classList.remove('active'));

    // Добавляем активный
    dots4[index].classList.add('active');

    // Прокручиваем
    const offset = -index * cardWidth;
    slider.querySelector('.slides').style.transform = `translateX(${offset}px)`;
  }

  // Обработчики кликов
  dots4.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  // Инициализация
  showSlide(0);
});




document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.youtube-videos .slider-container5');
  if (!slider) return;

  const slides = slider.querySelectorAll('.video-card');
  const dots5 = slider.querySelectorAll('.dot5');

  const cardWidth = 300 + 30; 
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0 || index >= slides.length) return;

    dots5.forEach(dot => dot.classList.remove('active'));
    dots5[index].classList.add('active');

    const offset = -index * cardWidth;
    slider.querySelector('.slides5').style.transform = `translateX(${offset}px)`;
  }

  dots5.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  showSlide(0);
});


  document.querySelectorAll('.thumbnail').forEach(thumb => {
      thumb.addEventListener('click', () => {
        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');

        if (thumb.classList.contains('thumbnail-360')) {
         
          document.querySelector('.main-image').src = "../images/land.png";
        } else {
          const imgSrc = thumb.querySelector('img')?.src || "../images/land.png";
          document.querySelector('.main-image').src = imgSrc;
        }
      });
    });