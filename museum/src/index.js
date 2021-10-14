import randomImg from "./galerry";
import $ from 'jquery';
import 'slick-carousel';
//-------Cross-check-------//
console.log('Привет,ксожалению пока не успела выполнить весь функционал,но надеюсь вы повремение с проверкой и дадите мне еще немножко времени до конца кросс-чека\n Частично выполненные пункты\n при перелистывании слайдов кликами или свайпами меняется номер активного слайда\nВыполненные пункты:\nесть возможность перелистывания слайдов влево и вправо кликами по стрелкам\nесть возможность перелистывания слайдов влево и вправо свайпами (движениями) мышки\n3) есть возможность перелистывания слайдов кликами по буллетам (квадратики внизу слайдера)\n4) слайды перелистываются плавно с анимацией смещения вправо или влево\n5) перелистывание слайдов бесконечное (зацикленное)\n6) при перелистывании слайдов буллет активного слайда подсвечивается (выделяется стилем)\n7) даже при частых кликах или свайпах нет ситуации, когда слайд после перелистывания находится не по центру, нет ситуации, когда видны одновременно два слайда\n8) ползунок можно перетягивать мышкой по горизонтали\n9) ползунок никогда не выходит за границы картины\n10) при перемещении ползунка справа налево плавно появляется нижняя картина\n11) при перемещении ползунка слева направо плавно появляется верхняя картина\n12) при обновлении страницы ползунок возвращается в исходное положение\n13) при прокрутке страницы вниз появление картин секции Galery сопровождается анимацией: изображения плавно поднимаются снизу вверх, увеличиваясь и создавая эффект выплывания. В качестве образца анимации используйте анимацию на сайте Лувра https://www.louvre.fr/\n14) если прокрутить страницу вверх и затем снова прокручивать вниз, анимация появления картин повторяется\n15) при обновлении страницы, если она к тому моменту была прокручена до секции Galery, анимация картин повторяется\n16) при изменении количества билетов Basic и Senior пересчитывается общая цена за них\n17) у каждого типа билетов своя цена (20 €, 25 €, 40 € для Basic и половина этой стоимости для Senior). При изменении типа билета пересчитывается общая цена за них\n18) при обновлении страницы сохраняется выбранное ранее количество билетов Basic и Senior, выбранный тип билета, общая цена за них16) в секции Contacts добавлена интерактивная карта\n17) на карте отображаются маркеры, расположение и внешний вид маркеров соответствует макету\n18) стиль карты соответствует макету\n19) Любой собственный дополнительный функционал, улучшающий качество проекта.Всплывающее окно с информацией про картины и их авторов, кнопка прокрутки страницы вверх\n Total points - 63')


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

//=====VideoSlider=======

$(document).ready(function () {
  $('.video-row').slick({
    arrows:true,
    dots:true,
    slidesToShow:3,
    slidesToScroll:1,
    speed:1000,
    infinite:true,
    easing:'ease',
  })
  
})

//========Buy Tickets=====

const ticketBuyOne = document.querySelector('.tickets-content');
const ticketsCounter = document.querySelectorAll('.tickets-count-btn-one');
const ticketBasis = ticketBuyOne.querySelector('.ticket-basic');
const ticketSenior = ticketBuyOne.querySelector('.ticket-senior');
const typeTicket = ticketBuyOne.querySelectorAll('.ticket-type-radio')
const totalCost = ticketBuyOne.querySelector('.totalcost');

if (localStorage.getItem('prevValues')) {
  let prevValues = JSON.parse(localStorage.getItem('prevValues'));
  typeTicket[prevValues.checkedBtn].checked = true;
  ticketBasis.value = prevValues.basic;
  ticketSenior.value = prevValues.senior;
  getCostTickets();
}

Array.from(typeTicket).forEach(elem => {
  elem.addEventListener('change', getCostTickets);
});
Array.from(ticketsCounter).forEach(elem => {
  elem.addEventListener('click', getCostTickets);
});

function getCostTickets() {
  let cost;
  let checkedBtn = Array.from(typeTicket).indexOf(Array.from(typeTicket).filter(item => item.checked)[0]);

  switch (checkedBtn) {
    case 0:
      cost = 20;
      break;
    case 1: 
      cost = 25;
      break;
    case 2:
      cost = 40;
      break;
  }
  cost *= parseInt(ticketBasis.value)  + parseInt(ticketSenior.value) / 2;

  totalCost.innerText = cost;

  localStorage.setItem('prevValues', JSON.stringify({
    checkedBtn: checkedBtn,
    basic: ticketBasis.value,
    senior: ticketSenior.value,
  }));
}

