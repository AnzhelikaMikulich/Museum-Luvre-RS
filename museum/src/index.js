import randomImg from "./galerry";

//-------Galerry-------//
randomImg();

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
    sliderNumber.innerHTML = `0${currentSlider + 1} | 05`;
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
    // beforeImg.style.width = `720px`;
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
  x -= exploreSlider.getBoundingClientRect().left;
  worksExploreSlider(x);
  pauseEvents(e);
});
document.body.addEventListener("touchstart", () => {
  isActiveSlider = true;
});
document.body.addEventListener("touchend", () => {
  isActiveSlider = false;
});
document.body.addEventListener("touchcancel", () => {
  isActiveSlider = false;
});
document.body.addEventListener("touchmove", (e) => {
  if (!isActiveSlider) {
    return;
  }
  let x;
  let i;
  for (i = 0; e < e.changedTouches.length; i++) {
    x - e.changedTouches[i].pageX;
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
