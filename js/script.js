const header = document.querySelector('.lapik-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('lapik-header__painted');
  } else {
    header.classList.remove('lapik-header__painted');
  }
});



const aboutSections = document.querySelector('.lapik-about')
const aboutButtons = document.querySelectorAll('.lapik-about__button');
const historySection = document.querySelector('.lapik-history');
const jobsSection = document.querySelector('.lapik-jobs');

aboutButtons.forEach((btn, _, btns) => btn.addEventListener('click', (e) => {
  if (e.target.classList.contains('lapik-about__button_active')) {
    e.target.classList.remove('lapik-about__button_active');
    aboutSections.classList.remove('lapik-about_active');
    historySection.classList.add('lapik-history_hidden');
    jobsSection.classList.add('lapik-jobs_hidden');
    return;
  };

  btns.forEach(button => button.classList.remove('lapik-about__button_active'))
  e.target.classList.add('lapik-about__button_active');
  aboutSections.classList.add('lapik-about_active');

  const typeOfInfo = e.target.getAttribute('data-about-type');

  if (typeOfInfo === 'history') {
    historySection.classList.remove('lapik-history_hidden');
    jobsSection.classList.add('lapik-jobs_hidden');
  } else if (typeOfInfo === 'jobs') {
    jobsSection.classList.remove('lapik-jobs_hidden');
    historySection.classList.add('lapik-history_hidden');
  }
}));



const hamburgerBtn = document.querySelector('.lapik-header__hamburger-btn');
const hamburgerIcon = document.querySelector('.lapik-header__hamburger-icn');
const closeHamburger = document.querySelector('.lapik-hamburger__close-btn');
const hamburger = document.querySelector('.lapik-hamburger');

closeHamburger.addEventListener('click', () => {
  hamburger.classList.toggle('lapik-hamburger_active');
  hamburgerBtn.classList.toggle('lapik-header__hamburger-btn_active');
})

hamburgerIcon.addEventListener('click', () => {
  hamburger.classList.toggle('lapik-hamburger_active');
  hamburgerBtn.classList.toggle('lapik-header__hamburger-btn_active');
})



const modalWindow = document.querySelector('.lapik-modal-window');
const closeModalBtn = document.querySelector('.lapik-modal-window__close-btn');
const testModal = document.querySelector('.lapil-modal-test')

closeModalBtn.addEventListener('click', () => {
  modalWindow.classList.add('lapik-modal-window_hidden');
})

testModal.addEventListener('click', () => {
  modalWindow.classList.remove('lapik-modal-window_hidden');
})


new SlimSelect({
  select: '#selectDetail'
})
new SlimSelect({
  select: '#selectParty'
})
new SlimSelect({
  select: '#selectDimensions'
})
new SlimSelect({
  select: '#selectAccuracy'
})



const grids = document.querySelectorAll('.lapik-grid-section__grid');

grids.forEach(grid => {
  grid.addEventListener('mouseover', (e) => {

    let element;

    if (e.target.classList.contains('lapik-grid-section__grid-card')) {
      element = e.target.querySelector('.lapik-grid-section__grid-card-img');
    } else {
      element = e.target.parentNode.querySelector('.lapik-grid-section__grid-card-img');
    }

    grid.style.background = element.style.background;
    grid.classList.add('lapik-grid-section__grid_hovered');
  })

  grid.addEventListener('mouseout', () => {
    grid.style.background = '#1B3387';
    grid.classList.remove('lapik-grid-section__grid_hovered');
  })
})