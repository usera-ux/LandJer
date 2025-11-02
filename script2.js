
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
  });

