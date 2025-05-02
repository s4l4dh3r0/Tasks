var swiper = Swiper;
var init = false;

function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
  let tabletDesktop = window.matchMedia('(min-width: 768px)');

  if(mobile.matches) {
    if (!init) {
        init = true;
        swiper = new Swiper('.swiper', {
          direction: 'horizontal',
          spaceBetween: -50,
              
          pagination: {
            el: '.swiper-pagination',
          },
            })
        };
    }
    else if(tabletDesktop.matches) {
        swiper.destroy();
        init = false;
    }
}

window.addEventListener('load', function() {
    swiperMode();
});

window.addEventListener('resize', function() {
    swiperMode();
}); 


let button = document.querySelector(".read-more");

let handleReadMore = function () {
  let buttonArrow = button.querySelector(".read-more__arrow");
  let buttonText = button.querySelector(".read-more__text");
  let swiperWrapper = document.querySelector(".swiper-wrapper");

  if (buttonArrow.classList.contains("read-more__arrow--active")) {
    buttonText.textContent = "Показать все";
    swiperWrapper.classList.add("swiper-wrapper--short");
    buttonArrow.classList.remove("read-more__arrow--active");
  } else {
    buttonText.textContent = "Скрыть";
    swiperWrapper.classList.remove("swiper-wrapper--short");
    buttonArrow.classList.add("read-more__arrow--active");
  }
};

button.addEventListener("click", function () {
  handleReadMore();
});