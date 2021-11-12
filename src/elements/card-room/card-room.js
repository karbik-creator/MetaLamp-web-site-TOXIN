import "./card-room.scss";
import "./img/slider1.jpg";
import "./img/slider2.jpg";
import "./img/slider3.jpg";
import "../rateTrack/rateTrack";

const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider__item");
let isDown = false;
let startX;
let scrollLeft;
let walk;

slider.addEventListener("mousedown", (e) => {
isDown = true;
startX = e.pageX - slider.offsetLeft;
scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
isDown = false;
});

slider.addEventListener("mouseup", (e) => {
isDown = false;
if (walk < 0) {
slider.scrollLeft = (parseInt(e.target.dataset.item) - 1) * 270;
} else {
slider.scrollLeft = (parseInt(e.target.dataset.item) - 1) * 270;
}
});
slider.addEventListener("mousemove", (e) => {
if (!isDown) return;
e.preventDefault();
const x = e.pageX - slider.offsetLeft;
walk = (x - startX) * 3;
slider.scrollLeft = scrollLeft - walk;
});