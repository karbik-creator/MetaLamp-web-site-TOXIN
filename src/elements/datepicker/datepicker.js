import './datepicker.scss'
export const getTemplateDatepicker = (placeholder, month, year, daysOfWeek) => {
    const days = daysOfWeek.map((item) => {
      return `<div class="day-of-week">${item}</div>`;
    });
    return `<div class="datepicker__backdrop" data-type="backdrop"></div>
    <div class="datepicker__item">
    <h3>прибытие</h3>
    <div class="datepicker__item__wrapper">
      <div class="datepicker__item__input" data-type="input-start-date">${placeholder}</div>
    </div>
  </div>
  <div class="datepicker__item">
    <h3>выезд</h3>
    <div class="datepicker__item__wrapper">
      <div class="datepicker__item__input" data-type="input-end-date">${placeholder}</div>
    </div>
  </div>
  <div class="datepicker__item__dropdown">
    <div class="datepicker__item__dropdown__inner">
      <div class="content__top">
        <button class="arrow prev-month"  type="button">
          <span class="material-icons" id="arrow-prev-month" data-type="btn-prev-month"> arrow_forward </span>
        </button>
        <div class="month-and-year">${month + " " + year}</div>
        <button class="arrow next-month"  type="button">
        <span class="material-icons" id="arrow-next-month" data-type="btn-next-month"> arrow_forward </span>
        </button>
      </div>
      <div class="content__center">
        <div class="days-of-week">
          ${days.join("")}
        </div>
        <div class="days">
        </div>
      </div>
      <div class="content__footer">
        <div class="drop__down__btn">
          <button type="button" data-type="cleandrop">очистить</button>
          <button class="active" type="button" data-type="backdrop">
            применить
          </button>
        </div>
      </div>
    </div>
  </div>`;
  };
  
  export class Datepicker {
    constructor(selector, options) {
      this.element = document.querySelector(selector);
      this.options = options;
      this.date = new Date();
      this.month = this.date.getMonth();
      this.year = this.date.getFullYear();
      this.dayOfWeek = this.date.getDay();
      this.months = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ];
      this.daysOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
      this.timeStampDay = 86400000;
  
      this.render();
      this.setup();
    }
  
    render() {
      const placeholder = this.options;
      this.element.insertAdjacentHTML(
        "afterbegin",
        getTemplateDatepicker(
          placeholder,
          this.months[this.month],
          this.year,
          this.daysOfWeek
        )
      );
      this.renderDays();
    }
  
    renderDays() {
      const dateString = new Date(this.year, this.month).toLocaleDateString(
        "ru",
        {
          weekday: "short",
        }
      );
      const paddingDays = this.daysOfWeek.indexOf(dateString.split(", ")[0]);
      let daysContainer = this.element.querySelector(".days");
      let days = document.createElement("div");
      days.classList.add("days__list");
      daysContainer.append(days);
      let countDaysInMonth = new Date(this.year, this.month + 1, 0).getDate();
      let countDaysOfLastMonth = new Date(this.year, this.month, 0).getDate();
      let countDaysInDatepicker = 35;
      //daysList.innerHTML = "";
      for (let i = 1; i <= countDaysInDatepicker; i++) {
        if (i <= paddingDays) {
          for (
            let j = countDaysOfLastMonth;
            j > countDaysOfLastMonth - paddingDays;
            j--
          ) {
            days.insertAdjacentHTML(
              "afterbegin",
              `<div class="day prev-next-day" data-type="day" data-value="${new Date(
                this.year,
                this.month - 1,
                j,
                0,
                0,
                0,
                0
              ).getTime()}">${j}</div>`
            );
            i++;
          }
        }
        if (i <= countDaysInMonth + paddingDays && i > paddingDays) {
          days.insertAdjacentHTML(
            "beforeend",
            `<div class="day" data-type="day" data-value="${new Date(
              this.year,
              this.month,
              i - paddingDays,
              0,
              0,
              0,
              0
            ).getTime()}">${i - paddingDays}</div>`
          );
        }
        if (i >= countDaysInMonth + paddingDays) {
          for (
            let k = 1;
            k <= countDaysInDatepicker - countDaysInMonth - paddingDays;
            k++
          ) {
            days.insertAdjacentHTML(
              "beforeend",
              `<div class="day prev-next-day" data-type="day" data-value="${new Date(
                this.year,
                this.month + 1,
                k,
                0,
                0,
                0,
                0
              ).getTime()}">${k}</div>`
            );
            i++;
          }
        }
      }
    }
  
    setup() {
      this.clickHandler = this.clickHandler.bind(this);
      this.element.addEventListener("click", this.clickHandler);
      this.monthAndYear = this.element.querySelector(".month-and-year");
      this.daysContainer = this.element.querySelector(".days");
      this.btnClean = this.element.querySelector('[data-type="cleandrop"]');
      this.inputStartDate = this.element.querySelector(
        '[data-type="input-start-date"]'
      );
      this.inputEndDate = this.element.querySelector(
        '[data-type="input-end-date"]'
      );
      this.startPeriodTimeStamp, this.endPeriodTimeStamp;
      this.number = null;
    }
  
    clickHandler(event) {
      const { type } = event.target.dataset;
      if (type === "input-start-date" || type === "input-end-date") {
        this.toggleDropdown();
      }
      if (type === "btn-next-month") {
        this.number--;
        this.nextMonth();
      }
      if (type === "btn-prev-month") {
        this.number++;
        this.prevMonth();
      }
      if (type === "day") {
        this.activeDay(event);
      }
      if (type === "backdrop") {
        this.toggleDropdown();
        this.fillInput(this.arrayActiveDays());
      }
      if (type === "cleandrop") {
        this.cleanDrop();
      }
    }
  
    toggleDropdown() {
      this.element.classList.toggle("open");
    }
  
    nextMonth() {
      this.month < 11 ? this.month++ : ((this.month = 0), this.year++);
      this.monthAndYear.textContent = this.months[this.month] + " " + this.year;
      this.daysContainer.style.transform = `translateX(${this.number * 280 + 'px'})`;
  
      this.renderDays();
    }
  
    prevMonth() {
      this.month > 0 ? this.month-- : ((this.month = 11), this.year--);
      this.monthAndYear.textContent = this.months[this.month] + " " + this.year;
      this.renderDays();
    }
  
    activeDay(event) {
      this.reviewCountActiveDays();
      event.target.classList.add("active");
      this.btnClean.classList.add("active");
      this.colorPeriod();
    }
  
    reviewCountActiveDays() {
      let activeDays = this.arrayActiveDays();
      if (activeDays.length > 1) {
        for (let day of activeDays) {
          day.classList.remove("active", "start", "end");
        }
        for (let item of this.element.querySelectorAll(".streak")) {
          item.classList.remove("streak");
        }
      }
    }
  
    colorPeriod() {
      let activeDays = this.arrayActiveDays();
      if (activeDays.length == 2) {
        this.startPeriodTimeStamp = parseInt(activeDays[0].dataset.value);
        this.endPeriodTimeStamp = parseInt(activeDays[1].dataset.value);
        activeDays[0].classList.add("start");
        activeDays[1].classList.add("end");
        for (
          let i = this.startPeriodTimeStamp + this.timeStampDay;
          i < this.endPeriodTimeStamp;
          i += this.timeStampDay
        ) {
          this.element
            .querySelector(`[data-value="${i}"]`)
            .classList.add("streak");
        }
      }
      if (activeDays.length == 1) {
        this.startPeriodTimeStamp = parseInt(activeDays[0].dataset.value);
        this.endPeriodTimeStamp = this.startPeriodTimeStamp;
      }
    }
  
    fillInput(arrayActiveDays) {
      if (arrayActiveDays.length === 0) {
        this.inputStartDate.textContent = this.options;
        this.inputEndDate.textContent = this.options;
      }
      //сократить
      if (arrayActiveDays.length === 1) {
        this.inputStartDate.textContent = new Date(
          this.startPeriodTimeStamp + this.timeStampDay
        )
          .toISOString()
          .replace(/^([^T]+)T(.+)$/, "$1")
          .replace(/^(\d+)-(\d+)-(\d+)$/, "$3.$2.$1");
        this.inputEndDate.textContent = this.inputStartDate.textContent;
      }
      //сократить
      if (arrayActiveDays.length === 2) {
        this.inputStartDate.textContent = new Date(
          this.startPeriodTimeStamp + this.timeStampDay
        )
          .toISOString()
          .replace(/^([^T]+)T(.+)$/, "$1")
          .replace(/^(\d+)-(\d+)-(\d+)$/, "$3.$2.$1");
        this.inputEndDate.textContent = new Date(
          this.endPeriodTimeStamp + this.timeStampDay
        )
          .toISOString()
          .replace(/^([^T]+)T(.+)$/, "$1")
          .replace(/^(\d+)-(\d+)-(\d+)$/, "$3.$2.$1");
      }
    }
    arrayActiveDays() {
      return Array.from(this.element.querySelectorAll(".day.active"));
    }
    cleanDrop() {
      for (let day of this.element.querySelectorAll(".day")) {
        day.classList.remove("active", "start", "end", "streak");
      }
      this.btnClean.classList.remove("active");
      this.fillInput(this.countActiveDay());
    }
  }