import "./card-room.scss";
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

function renderDots() {
    dotContainer.innerHTML = '';
    sliderItems.forEach((item, index) => {
        let dot = document.createElement("div");
        index === 0 ? dot.classList.add('dot', 'active') : dot.classList.add('dot');
        dotContainer.append(dot);
    });
    dots = dotContainer.querySelectorAll('.dot');
};
renderDots();


sliderWrapper.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - sliderWrapper.offsetLeft;
    scrollLeft = sliderWrapper.scrollLeft;
});

sliderWrapper.addEventListener("mouseup", (e) => {
    isDown = false;
    let numberSlider = parseInt(e.target.dataset.item) - 1;
    /*dots.forEach((item, index) => {
        index === numberSlider ?
            item.classList.add('active') : item.classList.remove('active')
    });*/
    sliderWrapper.scrollLeft = (parseInt(e.target.dataset.item) - 1) * 270;
});

sliderWrapper.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    walk = (x - startX);
    console.log(x - startX);
    sliderWrapper.scrollLeft = scrollLeft - walk;
});

sliderWrapper.addEventListener("mouseleave", (e) => {
    isDown = false;
});