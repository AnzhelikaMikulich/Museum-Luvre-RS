const progress = document.querySelectorAll('.progress');
progress.forEach(element => element.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
}))

//-------Welcome Slider-------//

const prev = document.getElementById('btn-prev');
const next= document.getElementById('btn-next');
const welcomeSlides = document.querySelectorAll('.slide-img');
const welcomeDots = document.querySelectorAll('.dots');
const sliderNumber = document.querySelector('.slider-current')
let currentSlider = 0;


const activeWelcomeSlide = n => {
  console.log(n)
  welcomeSlides.forEach(slide=>slide.classList.remove('active'))
  welcomeSlides[n].classList.add('active')
  sliderNumber.innerHTML = `0${n+1} | 05`
}
const activeWelcomeDots = n => {
  console.log(n)
  welcomeDots.forEach(dot=>dot.classList.remove('active-dot'))
  welcomeDots[n].classList.add('active-dot')
 
}

const chenchActivSlide = i =>{
  activeWelcomeSlide(i)
  activeWelcomeDots(i)

}

const nextWelcomeSlide = ()=>{
  if(currentSlider == welcomeSlides.length-1){
    currentSlider = 0;
    chenchActivSlide(currentSlider)
  }else{
    currentSlider++;
    chenchActivSlide(currentSlider)
  }
}

const prevWelcomeSlide = ()=>{
  if(currentSlider == 0){
    currentSlider = welcomeSlides.length - 1;
    chenchActivSlide(currentSlider)
  }else{
    currentSlider--;
    chenchActivSlide(currentSlider)
  }
}

next.addEventListener('click', nextWelcomeSlide);
prev.addEventListener('click', prevWelcomeSlide)
