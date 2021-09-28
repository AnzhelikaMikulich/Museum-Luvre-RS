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

document.addEventListener("click", () => {
  poster.style.display = "none";
});

//-------Welcome Slider-------//

const prev = document.getElementById("btn-prev");
const next = document.getElementById("btn-next");
const welcomeSlides = document.querySelectorAll(".slide-img");
const welcomeDots = document.querySelectorAll(".dots");
const sliderNumber = document.querySelector(".slider-current");
let currentSlider = 0;

const activeWelcomeSlide = (n) => {
  console.log(n);
  welcomeSlides.forEach((slide) => slide.classList.remove("active"));
  welcomeSlides[n].classList.add("active");
  sliderNumber.innerHTML = `0${n + 1} | 05`;
};
const activeWelcomeDots = (n) => {
  console.log(n);
  welcomeDots.forEach((dot) => dot.classList.remove("active-dot"));
  welcomeDots[n].classList.add("active-dot");
};

const chenchActivSlide = (i) => {
  activeWelcomeSlide(i);
  activeWelcomeDots(i);
};

const nextWelcomeSlide = () => {
  if (currentSlider == welcomeSlides.length - 1) {
    currentSlider = 0;
    chenchActivSlide(currentSlider);
  } else {
    currentSlider++;
    chenchActivSlide(currentSlider);
  }
};

const prevWelcomeSlide = () => {
  if (currentSlider == 0) {
    currentSlider = welcomeSlides.length - 1;
    chenchActivSlide(currentSlider);
  } else {
    currentSlider--;
    chenchActivSlide(currentSlider);
  }
};

next.addEventListener("click", nextWelcomeSlide);
prev.addEventListener("click", prevWelcomeSlide);

//-------Explore Slider-------//

const exploreSlider = document.querySelector(".explore-slider");
const before = document.querySelector(".explore-before");
const after = document.querySelector(".explore-after");
const beforeImg = before.querySelector(".explore-img");
const exploreChange = document.querySelector(".explore-change");

let isActiveSlider = false;

document,
  addEventListener("DOMContentLoaded", () => {
    // let width = exploreSlider.offsetWidth;
    beforeImg.style.width = `720px`;
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

// ========Ripple=========

const rippleButton = document.querySelector('.ripple')


rippleButton.addEventListener('click', function (e) {
  console.log('ripple')
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)
    })

