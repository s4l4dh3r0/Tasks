import '../scss/style.scss'
console.log('Works!')
////////////////////////////////////////////////////////////////////////////////////
var swiper = Swiper
// var init = false

function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)')
  let tabletDesktop = window.matchMedia('(min-width: 768px)')

  if (mobile.matches) {
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      spaceBetween: -20,

      pagination: {
        el: '.swiper-pagination'
      }
    })
  } else if (tabletDesktop.matches) {
    swiper.destroy()
  }
}

window.addEventListener('load', function () {
  swiperMode()
})

let mainInfoBtn = document.querySelector('#read-more-btn')
let brandsBtn = document.querySelector('#show-more-btn-1')
let featuresBtn = document.querySelector('#show-more-btn-2')
let feedbackBtnS = document.querySelectorAll('#feedback-btn')
let callbackBtnS = document.querySelectorAll('#callback-btn')
let burger = document.querySelector('#burger-btn')
let brandsSection = document.querySelector('.brands-info')
let featuresSection = document.querySelector('.features-info')
let feedback = document.querySelector('.feedback')
let feedbackWrap = document.querySelector('.feedback__wrapper')
let form = feedback.querySelector('.form')
let sideMenu = document.querySelector('.side-menu')
let sideMenuWrap = document.querySelector('.side-menu__wrapper')

let handleShowMore = function (section) {
  let buttonText = section.querySelector('.show-more__text')
  let swiperWrapper = section.querySelector('.swiper-wrapper')
  let showMoreBtns = section.querySelector('.show-more')

  if (showMoreBtns.classList.contains('expand-button--opened')) {
    buttonText.textContent = 'Показать все'
    swiperWrapper.classList.add('swiper-wrapper--short')
    showMoreBtns.classList.remove('expand-button--opened')
  } else {
    buttonText.textContent = 'Скрыть'
    swiperWrapper.classList.remove('swiper-wrapper--short')
    showMoreBtns.classList.add('expand-button--opened')
  }
}

brandsBtn.addEventListener('click', function () {
  handleShowMore(brandsSection)
})

featuresBtn.addEventListener('click', function () {
  handleShowMore(featuresSection)
})

let handleReadMore = function () {
  let buttonText = mainInfoBtn.querySelector('.expand-button__text')
  let mainInfoText = document.querySelector('.main-info__text')

  if (mainInfoBtn.classList.contains('expand-button--opened')) {
    buttonText.textContent = 'Читать далее'
    mainInfoText.classList.add('text--short')
    mainInfoBtn.classList.remove('expand-button--opened')
  } else {
    buttonText.textContent = 'Скрыть'
    mainInfoText.classList.remove('text--short')
    mainInfoBtn.classList.add('expand-button--opened')
  }
}

mainInfoBtn.addEventListener('click', function () {
  handleReadMore()
})

// Вызов окна обратной связи
let handleFeedback = function () {
  let closeBtn = feedback.querySelector('#close-btn')
  let feedbackTitle = feedback.querySelector('.feedback__title--text')

  closeBtn.addEventListener('click', function () {
    feedback.classList.remove('feedback--opened')
  })

  if (!feedback.classList.contains('feedback--opened')) {
    feedback.classList.add('feedback--opened')
    feedbackTitle.textContent = 'Обратная связь'
  }
}

for (let i = 0; i < feedbackBtnS.length; i++) {
  feedbackBtnS[i].addEventListener('click', function () {
    handleFeedback()
  })
}

// Изменение окна обратной связи в зависимости от нажатой кнопки
let handleCallBack = function () {
  let closeBtn = feedback.querySelector('#close-btn')
  let form = feedback.querySelector('.form')
  let callbackTitle = feedback.querySelector('.feedback__title--text')

  closeBtn.addEventListener('click', function () {
    feedback.classList.remove('feedback--opened')
    form.classList.remove('callback__form')
  })

  if (!feedback.classList.contains('feedback--opened')) {
    feedback.classList.add('feedback--opened')
    form.classList.add('callback__form')
    callbackTitle.textContent = 'Заказать звонок'
  }
}

for (let i = 0; i < callbackBtnS.length; i++) {
  callbackBtnS[i].addEventListener('click', function () {
    handleCallBack()
  })
}

// Закрытие по нажатию на заблюренную область
sideMenu.onclick = function (w) {
  if (sideMenu.contains(w.target) && !sideMenuWrap.contains(w.target)) {
    sideMenu.classList.remove('side-menu--opened')
  }
}

feedback.onclick = function (e) {
  if (feedback.contains(e.target) && !feedbackWrap.contains(e.target)) {
    feedback.classList.remove('feedback--opened')
    form.classList.remove('callback__form')
  }
}

// Закрытие по нажатию на Esc
window.addEventListener('keydown', function (k) {
  if (k.keyCode === 27 && feedback.classList.contains('feedback--opened')) {
    feedback.classList.remove('feedback--opened')
    form.classList.remove('callback__form')
  } else if (
    k.keyCode === 27 &&
    sideMenu.classList.contains('side-menu--opened')
  ) {
    sideMenu.classList.remove('side-menu--opened')
  }
})

let handleSideMenu = function () {
  let sideMenu = document.querySelector('.side-menu')
  let closeBtn = sideMenu.querySelector('#close-btn')

  closeBtn.addEventListener('click', function () {
    sideMenu.classList.remove('side-menu--opened')
  })

  if (!sideMenu.classList.contains('side-menu--opened')) {
    sideMenu.classList.add('side-menu--opened')
  }
}

burger.addEventListener('click', function () {
  handleSideMenu()
})
