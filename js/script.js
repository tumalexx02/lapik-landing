const header = document.querySelector('.lapik-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('lapik-header__painted');
  } else {
    header.classList.remove('lapik-header__painted');
  }
});



const aboutSections = document.querySelector('.lapik-about')
const aboutButtons = document.querySelectorAll('.lapik-about__button');

aboutButtons.forEach((btn, _, btns) => btn.addEventListener('click', (e) => {
  if (e.target.classList.contains('lapik-about__button_active')) {
    e.target.classList.remove('lapik-about__button_active');
    aboutSections.classList.remove('lapik-about_active')
    return;
  };

  btns.forEach(button => button.classList.remove('lapik-about__button_active'))
  e.target.classList.add('lapik-about__button_active');
  aboutSections.classList.add('lapik-about_active');
}));