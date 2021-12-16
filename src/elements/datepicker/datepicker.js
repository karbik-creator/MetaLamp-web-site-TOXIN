import "./datepicker.scss";
export const getTemplateDatepicker = (
  placeholder,
  countInput,
  name,
  month,
  year,
  daysOfWeek
) => {

  const days = daysOfWeek.map((item) => {
    return `<div class="day-of-week">${item}</div>`;
  });
  const inputs = (countInput) => {
    return countInput === 1
      ? `
  <div class="datepicker__item">
  <h3>${name[0]}</h3>
  <div class="datepicker__item__wrapper" tabindex='0'>
    <div class="datepicker__item__input" data-type="input-start-date">
    <div class="datepicker__item__placeholder">${typeof placeholder === 'object' ? placeholder[0] + '-' + placeholder[1] : placeholder}</div>
    <span class="material-icons">expand_more</span>
    </div>
  </div>
</div>`
      : `<div class="datepicker__item">
      <h3>${name[0]}</h3>
<div class="datepicker__item__wrapper" tabindex='0'>
  <div class="datepicker__item__input" data-type="input-start-date">
  <div class="datepicker__item__placeholder">${typeof placeholder === 'object' ? placeholder[0] : placeholder}</div>
  <span class="material-icons">expand_more</span>
  </div>
</div>
</div>
<div class="datepicker__item">
<h3>${name[1]}</h3>
<div class="datepicker__item__wrapper" tabindex='0' data-type='input'>
  <div class="datepicker__item__input" data-type="input-end-date">
  <div class="datepicker__item__placeholder">${typeof placeholder === 'object' ? placeholder[1] : placeholder}</div>
  <span class="material-icons">expand_more</span>
  </div>
</div>
</div>`;
  };
  return `<div class="datepicker__backdrop" data-type="backdrop"></div>
    ${inputs(countInput)}
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
        <div class="days__wrapper">
        </div>
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
  constructor(selector = '.datepicker', options = {
    format: 'ДД.МММ',
    placeholder: "ДД.МММ - ДД.МММ",
    countInput: 1,
    name: ['Дата']
  }) {
    this.element = document.querySelector(selector);
    this.options = options;
    this.placeholder = this.options.placeholder
    this.format = options.format;
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
    this.number = 0;
    this.renderFormatter();
    this.render();
    this.setup();
  }

  localStorageDate() {
    let datePeriod = localStorage.getItem('date');
    if (datePeriod !== null) {
      let newArrayFormatDatePeriod = JSON.parse(datePeriod).map(item => {
        return this.formatter.format(new Date(item))
      });
      return newArrayFormatDatePeriod
    }
    return this.placeholder
  }

  render() {
    const { countInput, name } = this.options;
    this.element.innerHTML = "";
    this.element.insertAdjacentHTML(
      "afterbegin",
      getTemplateDatepicker(
        this.localStorageDate(),
        countInput,
        name,
        this.months[this.month],
        this.year,
        this.daysOfWeek
      )
    );
    this.renderDays();
  }

  renderDays(flag = "next") {
    const dateString = new Date(this.year, this.month).toLocaleDateString(
      "ru",
      {
        weekday: "short",
      }
    );
    const paddingDays = this.daysOfWeek.indexOf(dateString.split(", ")[0]);
    let daysContainer = this.element.querySelector(".days__wrapper");
    let days = document.createElement("div");
    days.classList.add("days__list");
    days.setAttribute("data-index", this.number);

    flag === "next" ? daysContainer.append(days) : daysContainer.prepend(days);

    let countDaysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    let countDaysOfLastMonth = new Date(this.year, this.month, 0).getDate();
    let countDaysInDatepicker = 35;
    for (let i = 1; i <= countDaysInDatepicker; i++) {
      if (i <= paddingDays) {
        for (let j = countDaysOfLastMonth; j > countDaysOfLastMonth - paddingDays; j--) {
          days.insertAdjacentHTML(
            "afterbegin",
            `<div class="day prev-next-day" data-type="day" data-value="${new Date(this.year, this.month - 1, j).getTime()}">
            ${j}
            <span></span></div>`
          );
          i++;
        }
      }
      if (i <= countDaysInMonth + paddingDays && i > paddingDays) {
        days.insertAdjacentHTML(
          "beforeend",
          `<div class="day" data-type="day" data-value="${new Date(this.year, this.month, i - paddingDays).getTime()}">
          ${i - paddingDays}
          <span></span></div>`
        );
      }
      if (i >= countDaysInMonth + paddingDays) {
        for (let k = 1; k <= countDaysInDatepicker - countDaysInMonth - paddingDays; k++) {
          days.insertAdjacentHTML(
            "beforeend",
            `<div class="day prev-next-day" data-type="day" data-value="${new Date(this.year, this.month + 1, k).getTime()}">
            ${k}
            <span></span></div>`
          );
          i++;
        }
      }
    }
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.element.addEventListener("click", this.clickHandler);
    this.element.addEventListener("keyup", this.clickHandler);
    this.monthAndYear = this.element.querySelector(".month-and-year");
    this.daysContainer = this.element.querySelector(".days>.days__wrapper");
    this.btnClean = this.element.querySelector('[data-type="cleandrop"]');
    this.inputStartDate = this.element.querySelector(
      '[data-type="input-start-date"]>.datepicker__item__placeholder'
    );
    this.inputEndDate = this.element.querySelector(
      '[data-type="input-end-date"]>.datepicker__item__placeholder'
    );
    this.startPeriodTimeStamp, this.endPeriodTimeStamp;
    this.translateX = 0;
  }

  renderFormatter() {
    if (this.format === 'ДД.МММ') {
      this.formatter = new Intl.DateTimeFormat("ru", { day: '2-digit', month: 'short' });
    }
    if (this.format === 'ДД.ММ.ГГГГ') {
      this.formatter = new Intl.DateTimeFormat("ru", { day: '2-digit', month: '2-digit', year: 'numeric' });
    }
  }

  clickHandler(event) {
    const { type } = event.target.dataset;
    let path = event.path || (event.composedPath && event.composedPath());
    let typeParent = path[1].dataset.type;
    if (
      event.code === 'Tab' || event.type === 'click' &&
      typeParent === "input-start-date" ||
      typeParent === "input-end-date" ||
      type === "input-start-date" ||
      type === "input-end-date" ||
      type === "input"
    ) {
      this.toggleDropdown();
    }
    if (type === "btn-next-month") {
      this.number++;
      this.nextMonth();
    }
    if (type === "btn-prev-month") {
      this.number--;
      this.prevMonth();
    }
    if (type === "day") {
      this.activeDay(event.target);
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

    let listMonth = this.element.querySelector(`[data-index="${this.number}"]`);

    if (listMonth === null) {
      this.renderDays("next");
      this.colorPeriod();
    }
    this.translateX = this.translateX - 280;
    this.daysContainer.style.transform = `translateX(${this.translateX + "px"
      })`;
  }

  prevMonth() {
    this.month > 0 ? this.month-- : ((this.month = 11), this.year--);
    this.monthAndYear.textContent = this.months[this.month] + " " + this.year;

    let listMonth = this.daysContainer.querySelector(
      `[data-index="${this.number}"]`
    );

    if (listMonth === null) {
      this.renderDays("prev");
      this.colorPeriod();
    } else {
      this.translateX = this.translateX + 280;
      this.daysContainer.style.transform = `translateX(${this.translateX + "px"
        })`;
    }
  }

  activeDay(day) {
    this.reviewCountActiveDays();
    day.classList.add("active");
    this.btnClean.classList.add("active");
    this.colorPeriod();
  }

  reviewCountActiveDays() {
    let activeDays = this.arrayActiveDays();
    if (activeDays.length > 1) {
      activeDays.forEach(item => item.classList.remove("active", "start", "end"));
      this.element.querySelectorAll(".streak").forEach(item => item.classList.remove("streak"));
    }
  }

  colorPeriod() {
    let activeDays = this.arrayActiveDays();
    if (activeDays.length == 2) {
      this.startPeriodTimeStamp = parseInt(activeDays[0].dataset.value);
      this.endPeriodTimeStamp = parseInt(activeDays[1].dataset.value);
      this.element
        .querySelectorAll(`[data-value="${this.startPeriodTimeStamp}"]`)
        .forEach((element) => {
          element.classList.add("start", "active");
        });
      this.element
        .querySelectorAll(`[data-value="${this.endPeriodTimeStamp}"]`)
        .forEach((element) => {
          element.classList.add("end", "active");
        });
      for (
        let i = this.startPeriodTimeStamp + this.timeStampDay;
        i < this.endPeriodTimeStamp;
        i += this.timeStampDay
      ) {
        this.element
          .querySelectorAll(`[data-value="${i}"]`)
          .forEach((element) => {
            element.classList.add("streak");
          });
      }
    }
    if (activeDays.length == 1) {
      this.startPeriodTimeStamp = parseInt(activeDays[0].dataset.value);
      this.endPeriodTimeStamp = this.startPeriodTimeStamp;
    }
  }

  fillInput(arrayActiveDays) {
    if (arrayActiveDays.length === 0) {
      if (this.options.countInput === 1) {
        this.inputStartDate.textContent = this.options.placeholder;
      } else {
        this.inputStartDate.textContent = this.options.placeholder;
        this.inputEndDate.textContent = this.options.placeholder;

      }
      return
    }
    localStorage.setItem('date', JSON.stringify([this.startPeriodTimeStamp, this.endPeriodTimeStamp]));
    let startDate = this.formatter.format(this.startPeriodTimeStamp);
    let endDate = this.formatter.format(this.endPeriodTimeStamp);

    if (arrayActiveDays.length >= 1) {
      if (this.options.countInput === 1) {
        this.inputStartDate.textContent = `${startDate} - ${endDate}`
      } else {
        this.inputStartDate.textContent = startDate;
        this.inputEndDate.textContent = endDate;

      }
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
  }
}

