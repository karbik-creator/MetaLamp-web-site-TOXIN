import "./slider.scss";
import "./img/slider1.jpg";
import "./img/slider2.jpg";
import "./img/slider3.jpg";
import "./img/slider4.jpg";
import "./img/slider5.jpg";
import "./img/slider6.jpg";
import "./img/slider7.jpg";
import "./img/slider8.jpg";
import "./img/slider9.jpg";
import "./img/slider10.jpg";
import "./img/slider11.jpg";
import "./img/slider12.jpg";
import "../rateTrack/rateTrack";

export class Slider {
  constructor(selector = '.slider') {
    this.elements = document.querySelectorAll(selector);
    this.renderDots();
    this.elements.forEach(item => {
      this.setup(item);
    })
  }
  setup(element) {
    this.isDown;
    this.walk;
    this.startX;
    this.scrollLeft;
    this.indexActiveSlider = 0;
    this.clickArrow = this.clickArrow.bind(this);
    this.mousedown = this.mousedown.bind(this);
    this.mouseup = this.mouseup.bind(this);
    this.mousemove = this.mousemove.bind(this);
    this.mouseleave = this.mouseleave.bind(this);
    this.sliderWrapper = element.querySelector(".slider__wrapper");
    element.addEventListener('click', this.clickArrow);
    this.sliderWrapper.addEventListener("mousedown", this.mousedown);
    this.sliderWrapper.addEventListener("mouseup", this.mouseup);
    this.sliderWrapper.addEventListener("mousemove", this.mousemove);
    this.sliderWrapper.addEventListener("mouseleave", this.mouseleave);
  }

  renderDots() {
    this.elements.forEach(item => {
      let dotContainer = item.querySelector(".dots");
      let countSliders = item.querySelectorAll(".slider__item");
      dotContainer.innerHTML = "";
      countSliders.forEach((item, index) => {
        let dot = document.createElement("div");
        index === 0 ? dot.classList.add("dot", "active") : dot.classList.add("dot");
        dotContainer.append(dot);
      });
    })
  }
  clickArrow(event) {
    const { type } = event.target.dataset;
    if (type === 'prev') {
      this.clickPrev(event.currentTarget)
    }
    if (type === 'next') {
      this.clickNext(event.currentTarget)
    }
  }

  clickPrev(slider) {
    let sliderWrapper = slider.querySelector(".slider__wrapper");
    this.indexActiveSlider = this.indexActiveSlider <= 0 ? this.indexActiveSlider = 0 : this.indexActiveSlider - 1;
    let widthSlider = parseInt(slider.style.width);
    sliderWrapper.scrollLeft = this.indexActiveSlider * widthSlider;
    this.activeDot(sliderWrapper,this.indexActiveSlider)
  }
  clickNext(slider) {
    let sliderWrapper = slider.querySelector(".slider__wrapper");
    let maxIndexSlider = sliderWrapper.childNodes.length - 1;
    this.indexActiveSlider = this.indexActiveSlider >= maxIndexSlider ? this.indexActiveSlider = maxIndexSlider : this.indexActiveSlider + 1;
    let widthSlider = parseInt(slider.style.width);
    sliderWrapper.scrollLeft = this.indexActiveSlider * widthSlider;
    this.activeDot(sliderWrapper,this.indexActiveSlider)
  }
  mousedown(event) {
    let sliderWrapper = event.currentTarget;
    this.isDown = true;
    this.startX = event.pageX - sliderWrapper.offsetLeft;
    this.scrollLeft = sliderWrapper.scrollLeft;

  }
  mouseup(event) {
    let sliderWrapper = event.currentTarget;
    this.isDown = false;
    this.indexActiveSlider = parseInt(event.target.dataset.item);
    this.indexActiveSlider = this.walk < 0 ? this.indexActiveSlider : this.indexActiveSlider - 2;
    let widthSlider = parseInt(sliderWrapper.parentNode.style.width);
    sliderWrapper.scrollLeft = this.indexActiveSlider * widthSlider;
    this.activeDot(sliderWrapper,this.indexActiveSlider)
  }
  activeDot(sliderWrapper,index) {
    let dots = sliderWrapper.parentNode.querySelectorAll(".dot"); if (dots[index] !== undefined) {
      dots.forEach((item) => { item.classList.remove("active"); });
      dots[index].classList.add("active");
    }
  }
  mousemove(event) {
    let sliderWrapper = event.currentTarget;
    if (!this.isDown) return;
    event.preventDefault();
    const x = event.pageX - sliderWrapper.offsetLeft;
    this.walk = x - this.startX;
    sliderWrapper.scrollLeft = this.scrollLeft - this.walk;
  }
  mouseleave() {
    this.isDown = false;
  }
}
