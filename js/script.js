function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

function blockBackgroundScroll() {
  document.querySelector('body').style.overflow = 'hidden';
}

function freeBackgroundScroll() {
  document.querySelector('body').style.overflow = 'auto';
}

const header = document.querySelector('.lapik-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.classList.add('lapik-header__painted');
  } else {
    header.classList.remove('lapik-header__painted');
  }
});

window.addEventListener('load', () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > 40) {
    header.classList.add('lapik-header__painted');
  } else {
    header.classList.remove('lapik-header__painted');
  }
});



const aboutSections = document.querySelector('.lapik-about')
const aboutButtons = document.querySelectorAll('.lapik-about__button');
const historySection = document.querySelector('.lapik-history');
const newsSection = document.querySelector('.news');

aboutButtons.forEach((btn, _, btns) => btn.addEventListener('click', (e) => {
  if (e.target.classList.contains('lapik-about__button_active')) {
    e.target.classList.remove('lapik-about__button_active');
    aboutSections.classList.remove('lapik-about_active');
    historySection.classList.add('lapik-history_hidden');
    newsSection.classList.add('news_hidden');
    return;
  };

  btns.forEach(button => button.classList.remove('lapik-about__button_active'))
  e.target.classList.add('lapik-about__button_active');
  aboutSections.classList.add('lapik-about_active');

  const typeOfInfo = e.target.getAttribute('data-about-type');

  if (typeOfInfo === 'history') {
    historySection.classList.remove('lapik-history_hidden');
    newsSection.classList.add('news_hidden');
  } else if (typeOfInfo === 'news') {
    newsSection.classList.remove('news_hidden');
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



// const modalWindow = document.querySelector('.lapik-modal-window');
// const closeModalBtn = document.querySelector('.lapik-modal-window__close-btn');

// closeModalBtn.addEventListener('click', () => {
//   modalWindow.classList.add('lapik-modal-window_hidden');
// })


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
    if (!isTouchDevice()) {
      let element;

      if (e.target.classList.contains('lapik-grid-section__grid-card')) {
        element = e.target.querySelector('.lapik-grid-section__grid-card-img');
      } else {
        element = e.target.parentNode.querySelector('.lapik-grid-section__grid-card-img');
      }

      if (element) {
        grid.style.background = element.style.background;
        grid.classList.add('lapik-grid-section__grid_hovered');
      }
    }
  })

  grid.addEventListener('mouseout', () => {
    if (!isTouchDevice()) {
      grid.style.background = 'var(--accent-color)';
      grid.classList.remove('lapik-grid-section__grid_hovered');
    }
  })
})

const phoneInput = document.getElementById('modal-phone');
Inputmask("+7 (999) 999-99-99").mask(phoneInput);

const emailInput = document.getElementById('modal-email');
Inputmask({
  mask: "*{1,}@*{1,}.*{2,}",
  greedy: false,
  definitions: {
    '*': {
      validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
      cardinality: 1,
      casing: "lower"
    }
  }
}).mask(emailInput);



const orderButtons = document.querySelectorAll('.lapik-grid-section__card-button');
const detailsButtons = document.querySelectorAll('.triple-grid-section__card-button');
const closeModalFormBtn = document.querySelector('.lapik-modal-form__close-btn');
const modalForm = document.querySelector('.lapik-modal-form');

[...orderButtons, ...detailsButtons].forEach(btn => btn.addEventListener('click', () => {
  modalForm.classList.remove('lapik-modal-form_hidden');
  blockBackgroundScroll();
}))

closeModalFormBtn.addEventListener('click', () => {
  modalForm.classList.add('lapik-modal-form_hidden');
  freeBackgroundScroll();
})



const newsCards = document.querySelectorAll('.news__news-card');
const closeNewsModalBtn = document.querySelector('.news-modal-window__close-btn');
const newsModal = document.querySelector('.news-modal-window');

newsCards.forEach(card => card.addEventListener('click', () => {
  newsModal.classList.remove('news-modal-window_hidden');
  blockBackgroundScroll();
}));

closeNewsModalBtn.addEventListener('click', () => {
  newsModal.classList.add('news-modal-window_hidden');
  freeBackgroundScroll();
})

var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});



const newsAnchorLinks = document.querySelectorAll('[href="#news"]');
const newsAboutButton = document.querySelector('lapik-about__button')

newsAnchorLinks.forEach(link => link.addEventListener('click', () => {
  newsSection.classList.remove('news_hidden');
  historySection.classList.add('lapik-history_hidden');
  newsAboutButton.classList.add('lapik-about__button_active')
}));



const mapMarks = document.querySelectorAll('.map-city-mark');
const mainMapMark = document.querySelector('.map-city-mark_main');
const mapLabel = document.querySelector('.lapik-geography__map-label');

if (window.innerWidth <= 991) {
  const mainMapMarkRect = mainMapMark.getClientRects()[0];
  const geographyContainerRect = document.querySelector('.lapik-geography .container').getClientRects()[0];
  const mapLaberRect = mapLabel.getClientRects()[0];
  mapLabel.innerHTML = mainMapMark.getAttribute('data-city-name');
  mapLabel.style.opacity = 1;
  mapLabel.style.left = `${mainMapMarkRect.left - geographyContainerRect.left - mapLaberRect.width*1.56}px`;
  mapLabel.style.top = `${mainMapMarkRect.top - geographyContainerRect.top - mapLaberRect.height - 16}px`;
}

mapMarks.forEach(mark => {
  mark.addEventListener('mouseover', (e) => {
    if (window.innerWidth <= 991) {
      return;
    }
    const cityName = mark.getAttribute('data-city-name')
    mapLabel.innerHTML = cityName
    mapLabel.style.opacity = 1;
    const geographyContainerRect = document.querySelector('.lapik-geography .container').getClientRects()[0];
    const mapLaberRect = mapLabel.getClientRects()[0];
    const rect = e.target.getClientRects()[0];
    mapLabel.style.left = `${rect.left - geographyContainerRect.left - mapLaberRect.width/2.5}px`;
    mapLabel.style.top = `${rect.top - geographyContainerRect.top - mapLaberRect.height - 4}px`;
    console.log()
  })

  mark.addEventListener('mouseout', () => {
    if (window.innerWidth <= 991) {
      return;
    }
    mapLabel.style.opacity = 0;
  })
})

window.addEventListener('resize', () => {
  const mainMapMark = document.querySelector('.map-city-mark_main');
  const mapLabel = document.querySelector('.lapik-geography__map-label');

  if (window.innerWidth > 991) {
    mapLabel.style.opacity = 0;
  } else {
    const mainMapMarkRect = mainMapMark.getClientRects()[0];
    const geographyContainerRect = document.querySelector('.lapik-geography .container').getClientRects()[0];
    const mapLaberRect = mapLabel.getClientRects()[0];
    mapLabel.innerHTML = mainMapMark.getAttribute('data-city-name');
    mapLabel.style.opacity = 1;
    mapLabel.style.left = `${mainMapMarkRect.left - geographyContainerRect.left - mapLaberRect.width/2.5}px`;
    mapLabel.style.top = `${mainMapMarkRect.top - geographyContainerRect.top - mapLaberRect.height - 4}px`;
  }
})