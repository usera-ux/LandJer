 const viewButtons = document.querySelectorAll('.view-btn');
    const mapView = document.getElementById('map-view');
    const listView = document.getElementById('list-view');

    if (viewButtons.length > 0) {
      viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          viewButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const view = btn.getAttribute('data-view');
          if (view === 'map') {
            if (mapView) mapView.style.display = 'block';
            if (listView) listView.style.display = 'none';
          } else if (view === 'list') {
            if (mapView) mapView.style.display = 'none';
            if (listView) listView.style.display = 'block';
          }
        });
      });
    }
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

