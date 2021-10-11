import randomImg from "./galerry";
//-------Cross-check-------//
console.log('Привет,ксожалению пока не успела выполнить весь функционал,но надеюсь вы повремение с проверкой и дадите мне еще немножко времени до конца кросс-чека\n Video self-check\n   \n Total points - 63')


//-------Galerry-------//

randomImg()

//-------Video-------//
const progress = document.querySelectorAll(".progress");
progress.forEach((element) =>
  element.addEventListener("input", function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, 
      #710707 0%, 
      #710707 ${value}%, #fff ${value}%, white 100%)`;
  })
);

const poster = document.querySelector(".video-img-poster");
const videoPlayButton = document.querySelector(".video-img-svg");

videoPlayButton.addEventListener("click", () => {
  poster.style.display = "none";
});

//-------Welcome Slider-------//

new Swiper(".welcome-slider", {
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  loop: true,
});

const prev = document.getElementById("btn-prev");
const next = document.getElementById("btn-next");
const paginationSlides = document.querySelectorAll(".swiper-pagination span");
const sliderNumber = document.querySelector(".slider-current");
const slideImg = document.querySelectorAll(".image-slider__image img")
let currentSlider = 0;

const activeWelcomeSlide = (n) => {
  console.log(n);
  sliderNumber.innerHTML = `0${n + 1} | 05`;
};

const nextWelcomeSlide = (e) => {
  if (currentSlider == paginationSlides.length - 1) {
    currentSlider = 0;
    activeWelcomeSlide(currentSlider);
  } else {
    currentSlider++;
    activeWelcomeSlide(currentSlider);
  }
};

const prevWelcomeSlide = () => {
  if (currentSlider == 0) {
    currentSlider = paginationSlides.length - 1;
    activeWelcomeSlide(currentSlider);
  } else {
    currentSlider--;
    activeWelcomeSlide(currentSlider);
  }
};

next.addEventListener("click", nextWelcomeSlide);
prev.addEventListener("click", prevWelcomeSlide);
paginationSlides.forEach((element, i) => {
  element.addEventListener("click", function () {
    currentSlider = i;
    console.log(i)
    sliderNumber.innerHTML = `0${currentSlider + 1} | 05`;
  });
});
slideImg.forEach((element, i) => {
  element.addEventListener("touchstart", function () {
    currentSlider = i;
    if(i<= 4){
      sliderNumber.innerHTML = `0${currentSlider+1} | 05`;
    }else if(i> 4){
      currentSlider = 0
      sliderNumber.innerHTML = `0${currentSlider+1} | 05`;
    }
  });
});


//-------Explore Slider-------//

const exploreSlider = document.querySelector(".explore-slider");
const before = document.querySelector(".explore-before");
const after = document.querySelector(".explore-after");
const beforeImg = before.querySelector(".explore-img");
const exploreChange = document.querySelector(".explore-change");

let isActiveSlider = false;

document,
  addEventListener("DOMContentLoaded", () => {
    let width = exploreSlider.offsetWidth;
  });

const worksExploreSlider = (x) => {
  let shift = Math.max(0, Math.min(x, exploreSlider.offsetWidth));
  before.style.width = `${shift}px`;
  exploreChange.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};
document.body.addEventListener("mousedown", () => {
  isActiveSlider = true;
});
document.body.addEventListener("mouseup", () => {
  isActiveSlider = false;
});
document.body.addEventListener("mouseleave", () => {
  isActiveSlider = false;
});
document.body.addEventListener("mousemove", (e) => {
  if (!isActiveSlider) {
    return;
  }
  let x = e.pageX;
  console.log(x)
  x -= exploreSlider.getBoundingClientRect().left;
  worksExploreSlider(x);
  pauseEvents(e);
});
exploreSlider.addEventListener("touchstart", () => {
  isActiveSlider = true;
});
exploreSlider.addEventListener("touchend", () => {
  isActiveSlider = false;
});
exploreSlider.addEventListener("touchcancel", () => {
  isActiveSlider = false;
});
exploreSlider.addEventListener("touchmove", (e) => {
  if (!isActiveSlider) {
    return;
  }
  let x ;
  let i;
  for (i = 0; e < e.changedTouches.length; i++) {
    x  = e.changedTouches[i].pageX
    
  }
  
  x -= exploreSlider.getBoundingClientRect().left;
  worksExploreSlider(x);
  pauseEvents(e);
});


//============ Burger====================

const burger = document.querySelector(".icon-menu");
const header_menu = document.querySelector(".menu-body");
const body = document.querySelector("body");
const header__list = document.querySelector(".header-menu-item");

burger.onclick = function () {
  burger.classList.toggle("active");
  header_menu.classList.toggle("active");
  body.classList.toggle("lock");
};
const menu_links = document.querySelectorAll(".menu-link[data-goto]");
if (menu_links.length > 0) {
  menu_links.forEach((menu_links) => {
    menu_links.addEventListener("click", onMenuLinksClick);
  });
}
function onMenuLinksClick(e) {
  const menu_link = e.target;
  if (
    menu_link.dataset.goto &&
    document.querySelector(menu_link.dataset.goto)
  ) {
    const gotoBlock = document.querySelector(menu_link.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
    if (burger.classList.contains("active")) {
      burger.classList.remove("active");
      header_menu.classList.remove("active");
      body.classList.remove("lock");
    }
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth",
    });
    e.preventDefault();
  }
}


//=======Map=====

function initMapboxGLJS() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiYW5nZWxpa2FtaWt1bGljaCIsImEiOiJja3VuNHZkM3YxanR6MnBydnE1ZnFpM3Q5In0.Lccp5S28NmcGXLk5R7x-ew';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [2.3364, 48.86091],
    zoom: 15.78,
  });

  map.addControl(new mapboxgl.NavigationControl());
  const marker1 = new mapboxgl.Marker({
    color: "#000000",
  }).setLngLat([2.3364, 48.86091]).addTo(map);
  const marker2 = new mapboxgl.Marker({
    color: "#808080",
  }).setLngLat([2.3333, 48.8602]).addTo(map);
  const marker3 = new mapboxgl.Marker({
    color: "#808080",
  }).setLngLat([2.3397, 48.8607]).addTo(map);
  const marker4 = new mapboxgl.Marker({
    color: "#808080",
  }).setLngLat([2.3330, 48.8619]).addTo(map);
  const marker5 = new mapboxgl.Marker({
    color: "#808080",
  }).setLngLat([2.3365, 48.8625]).addTo(map);
}
initMapboxGLJS();
