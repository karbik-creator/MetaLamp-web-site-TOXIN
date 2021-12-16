import './rangeSlider.scss'
export const getTemplateDatepicker = (
    name,
    el,
    width,
    min,
    max,
    step,
    valueSecond,
    valueOne,
    formatterValueSecond,
    formatterValueOne
) => {
    return `<div class="range-slider__wrapper" style="width:${width + "px"}">
      <div class="values">
      <div class="values__name">
      ${name}
      </div>
      <div class="values__count">
  <span data-type="range1">${formatterValueOne + el}</span>
      <span> &dash; </span>
      <span data-type="range2">${formatterValueSecond + el}</span>
      </div>
      
    </div>
    <div class="slider__container">
      <div class="slider-track" style="width:${width - 2 + "px"}">
          <div class="slider-track__item" ></div>
      </div>
      <input type="range" style="width:${width + "px"
        }" min="${min}" max="${max}" value="${valueOne}" step="${step}" data-type="slider-1" />
      <input type="range" style="width:${width + "px"
        }" min="${min}" max="${max}" value="${valueSecond}" step="${step}" data-type="slider-2" />
    </div>
    </div>`;
};
export class RangeSlider {
    constructor(options) {
        this.element = document.querySelector(".range-slider");
        this.options = options;
        this.name = options.name;
        this.el = options.el;
        this.width = options.width;
        this.step = options.step;
        this.min = options.min;
        this.max = options.max;
        this.valueOne = options.valueOne;
        this.valueSecond = options.valueSecond;
        this.formatter = new Intl.NumberFormat({maximumSignificantDigits:3});

        this.render();
        this.setup();
        this.fillColor();
    }

    render() {
        this.element.insertAdjacentHTML(
            "afterbegin",
            getTemplateDatepicker(
                this.name,
                this.el,
                this.width,
                this.min,
                this.max,
                this.step,
                this.valueSecond,
                this.valueOne,
                this.formatter.format(this.valueSecond),
                this.formatter.format(this.valueOne),
            )
        );
    }

    setup() {
        this.sliderOne = this.element.querySelector("[data-type='slider-1']");
        this.sliderTwo = this.element.querySelector("[data-type='slider-2']");
        this.displayValOne = this.element.querySelector('[data-type="range1"]');
        this.displayValTwo = this.element.querySelector("[data-type='range2']");
        this.sliderTrack = this.element.querySelector(".slider-track__item");
        this.clickSliderOne = this.clickSliderOne.bind(this);
        this.clickSliderTwo = this.clickSliderTwo.bind(this);
        this.sliderOne.addEventListener("mousemove", this.clickSliderOne);
        this.sliderTwo.addEventListener("mousemove", this.clickSliderTwo);
    }

    clickSliderOne() {
        if (
            parseInt(this.sliderTwo.value) - parseInt(this.sliderOne.value) <=
            this.min
        ) {
            this.sliderOne.value = parseInt(this.sliderTwo.value) - this.min;
        }
        this.displayValOne.innerHTML = this.formatter.format(this.sliderOne.value) + this.el;
        this.fillColor();
    }
    clickSliderTwo() {
        if (
            parseInt(this.sliderTwo.value) - parseInt(this.sliderOne.value) <=
            this.min
        ) {
            this.sliderTwo.value = parseInt(this.sliderOne.value) + this.min;
        }
        this.displayValTwo.innerHTML = this.formatter.format(this.sliderTwo.value) + this.el;
        this.fillColor();
    }
    fillColor() {
        let percent1 =
            Math.floor((this.sliderOne.value / this.max) * this.width);
        let percent2 =
            Math.floor((this.sliderTwo.value / this.max) * this.width) - 5;
        this.sliderTrack.style.left = percent1 + "px";
        this.sliderTrack.style.width = percent2 - percent1 + "px";
    }
}
