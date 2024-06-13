const header = document.querySelector('.lapik-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('lapik-header__painted');
  } else {
    header.classList.remove('lapik-header__painted');
  }
});