import "./img/slider1.jpg";
import "./img/slider2.jpg";
import "./img/slider3.jpg";
import "../rateTrack/rateTrack";
const slider = document.querySelector(".slider");
const sliderWrapper = document.querySelector(".slider__wrapper");
const sliderItems = slider.querySelectorAll(".slider__item");
const dotContainer = document.querySelector(".dots");
let isDown = false;
let startX;
let scrollLeft;
let walk;
let dots;
let widthSlider = parseInt(slider.style.width);
let maxScrollLeft = widthSlider * (sliderItems.length - 1);
let indexActiveSlider;

function renderDots() {
  dotContainer.innerHTML = "";
  sliderItems.forEach((item, index) => {
    let dot = document.createElement("div");
    index === 0 ? dot.classList.add("dot", "active") : dot.classList.add("dot");
    dotContainer.append(dot);
  });
  dots = dotContainer.querySelectorAll(".dot");
}
renderDots();

sliderWrapper.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - sliderWrapper.offsetLeft;
  scrollLeft = sliderWrapper.scrollLeft;
});

sliderWrapper.addEventListener("mouseup", (e) => {
  isDown = false;
  indexActiveSlider = parseInt(e.target.dataset.item);
  if (
    !(
      sliderWrapper.scrollLeft === 0 ||
      sliderWrapper.scrollLeft >= maxScrollLeft
    )
  ) {
    dots.forEach((item) => {
      item.classList.remove("active");
    });
    walk < 0
      ? dots[indexActiveSlider].classList.add("active")
      : dots[indexActiveSlider - 2].classList.add("active");
  }

  sliderWrapper.scrollLeft =
    walk < 0
      ? indexActiveSlider * widthSlider
      : (indexActiveSlider - 2) * widthSlider;
});

sliderWrapper.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderWrapper.offsetLeft;
  walk = x - startX;
  sliderWrapper.scrollLeft = scrollLeft - walk;
});

sliderWrapper.addEventListener("mouseleave", (e) => {
  isDown = false;
});
