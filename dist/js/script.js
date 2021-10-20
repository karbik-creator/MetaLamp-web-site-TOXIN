const getTemplateSelect = (data = [], placeholder) => {
  const text = placeholder ?? "Выберите значение";
  const items = data.map((item) => {
    return `
    <div class="select__drop__down__item" data-id = ${item.id}>
    <div class="select__item__text">${item.value}</div>
    <div class="select__item__content__right">
      <button class="select__item__btn" type="button" data-type='btnMinus'>-</button>
      <div class="select__item__number" data-type='count'>${item.count}</div>
      <button class="select__item__btn active" type="button" data-type='btnPlus'>+</button>
    </div>
    </div>
    `;
  });

  return `<div class="select__backdrop" data-type="backdrop"></div>
            <div class="select__input" data-type="input">${text}</div>
            <div class="select__drop__down">
              ${items[0]}
              ${items[1]}
              ${items[2]}
              <div class="select__drop__down__btn">
                <button type="button" data-type="cleandrop">очистить</button>
                <button class="active" type="button" data-type="backdrop">применить</button>
              </div>
            </div>`;
};

class Select {
  constructor(selector, options) {
    this.element = document.querySelector(selector);
    this.options = options;
    this.selectId = null;

    this.render();
    this.setup();
  }

  render() {
    const { data, placeholder } = this.options;
    this.element.classList.add("select__wrapper");
    this.element.insertAdjacentHTML(
      "afterbegin",
      getTemplateSelect(data, placeholder)
    );
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.element.addEventListener("click", this.clickHandler);
    this.value = this.element.querySelector('[data-type="input"]');
    this.count = this.element.querySelectorAll('[data-type="count"]');
    this.btnClean = this.element.querySelector('[data-type="cleandrop"]');
  }

  clickHandler(event) {
    const { type } = event.target.dataset;

    if (type === "input") {
      this.toogle();
    }
    if (type === "btnPlus" || type === "btnMinus") {
      const id = event.target.parentElement.parentElement.dataset.id;
      this.select(id, type);
    }
    if (type === "backdrop") {
      this.toogle();
    }
    if (type === "cleandrop") {
      this.cleanCount();
    }
  }

  toogle() {
    this.element.classList.toggle("open");
  }

  destroy() {
    this.element.removeEventListener("click", this.clickHandler);
  }

  select(id, type) {
    this.selectId = id;
    this.count[this.selectId - 1].textContent =
      type === "btnPlus" ? this.plus() : this.minus();
    this.currentStyleBtn(id);
    this.currentInput();
  }

  plus() {
    return ++this.current().count;
  }

  minus() {
    return this.current().count <= 0 ? 0 : --this.current().count;
  }

  current() {
    return this.options.data.find((item) => item.id == this.selectId);
  }

  currentInput() {
    let countPeople = 0;
    let countChildren = 0;
    let textForCountPeople = "";
    let textForCountChildren = "";

    this.options.data.map((item) => {
      item.value === "Младенцы"
        ? (countChildren += item.count)
        : (countPeople += item.count);
    });

    textForCountPeople = this.declOfNum(countPeople, [
      "гость",
      "гостя",
      "гостей",
    ]);
    textForCountChildren = this.declOfNum(countChildren, [
      "младенец",
      "младенца",
      "младенцев",
    ]);

    if (countPeople === 0 && countChildren === 0) {
      textForCountPeople = this.options.placeholder ?? "Выберите значение";
    }
    if (countPeople !== 0 && countChildren !== 0) {
      this.value.textContent = textForCountPeople + ", " + textForCountChildren;
    } else {
      this.value.textContent = textForCountPeople + textForCountChildren;
    }
    if (countChildren + countPeople > 0) {
      if (!this.isActiveBtnClean()) {
        this.btnClean.classList.add("active");
      }
    } else {
      if (this.isActiveBtnClean()) {
        this.btnClean.classList.remove("active");
      }
    }
  }

  declOfNum(n, text_forms) {
    if (n == 0) {
      return "";
    }
    n = Math.abs(n) % 1000;
    let n1 = n % 10;
    if (n > 10 && n < 20) {
      return n + " " + text_forms[2];
    }
    if (n1 > 1 && n1 < 5) {
      return n + " " + text_forms[1];
    }
    if (n1 == 1) {
      return n + " " + text_forms[0];
    }
    return n + " " + text_forms[2];
  }

  currentStyleBtn(id, arrayId = this.options.data) {
    if (typeof id === "undefined") {
      arrayId.map((item) => {
        let btnMinus = this.element.querySelector(
          `[data-id="${item.id}"] > div > button[data-type="btnMinus"]`
        );
        let btnPlus = this.element.querySelector(
          `[data-id="${item.id}"] > div > button[data-type="btnPlus"]`
        );
        this.current().count > 0
          ? btnMinus.classList.add("active")
          : btnMinus.classList.remove("active");

        this.current().count === 100
          ? btnPlus.classList.remove("active")
          : btnPlus.classList.add("active");
      });
    } else {
      let btnMinus = this.element.querySelector(
        `[data-id="${id}"] > div > button[data-type="btnMinus"]`
      );
      let btnPlus = this.element.querySelector(
        `[data-id="${id}"] > div > button[data-type="btnPlus"]`
      );
      this.current().count > 0
        ? btnMinus.classList.add("active")
        : btnMinus.classList.remove("active");

      /* if (this.current().count === 10) {
        btnPlus.classList.remove("active");
      } else {
        btnPlus.classList.add("active");
      }*/
    }
  }

  isActiveBtnClean() {
    return this.btnClean.classList.contains("active");
  }

  cleanCount() {
    this.options.data.map((item) => (item.count = 0));
    for (let number of this.count) {
      number.textContent = 0;
    }
    this.currentStyleBtn();
    this.currentInput();
  }
}

const select = new Select("#select-in-form", {
  placeholder: "Сколько гостей",
  data: [
    { id: 1, value: "Взрослые", count: 0 },
    { id: 2, value: "Дети", count: 0 },
    { id: 3, value: "Младенцы", count: 0 },
  ],
});

const getTemplateDatepicker = (placeholder, month, year, daysOfWeek) => {
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

class Datepicker {
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
    let days = document.createElement('div');
    days.classList.add('days__list');
    days.style
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
            `<div class="day prev-next-day" data-type="day" data-value='${new Date(this.year, this.month-1, j, 0, 0, 0, 0).getTime()}'>${j}</div>`
          );
          i++;
        }
      }
      if (i <= countDaysInMonth + paddingDays && i > paddingDays) {
        days.insertAdjacentHTML(
          "beforeend",
          `<div class="day" data-type="day" data-value='${new Date(this.year, this.month, i-paddingDays, 0, 0, 0, 0).getTime()}'>${i - paddingDays}</div>`
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
            `<div class="day prev-next-day" data-type="day" data-value='${new Date(this.year, this.month+1, k, 0, 0, 0, 0).getTime()}'>${k}</div>`
          );
          i++;
        }
      }
    }
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.element.addEventListener("click", this.clickHandler);
    this.daysContainer = this.element.querySelector(".days__list");
    this.btnClean = this.element.querySelector('[data-type="cleandrop"]');
    this.inputStartDate = this.element.querySelector(
      '[data-type="input-start-date"]'
    );
    this.inputEndDate = this.element.querySelector(
      '[data-type="input-end-date"]'
    );
    this.startPeriod, this.endPeriod;
  }

  clickHandler(event) {
    const { type } = event.target.dataset;
    if (type === "input-start-date" || type === "input-end-date") {
      this.toggleDropdown();
    }
    if (type === "btn-next-month") {
      this.nextMonth();
    }
    if (type === "btn-prev-month") {
      this.prevMonth();
    }
    if (type === "day") {
      this.activeDay(event);
    }
    if (type === "backdrop") {
      this.toggleDropdown();
      this.fillInput();
      console,log(this.startPeriod)
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
    this.element.querySelector(".month-and-year").textContent =
      this.months[this.month] + " " + this.year;
      console.log(this.daysContainer.style)
      
    this.renderDays();
  }

  prevMonth() {
    this.month > 0 ? this.month-- : ((this.month = 11), this.year--);
    this.element.querySelector(".month-and-year").textContent =
      this.months[this.month] + " " + this.year;
    this.renderDays();
  }

  activeDay(event) {
    this.reviewCountActiveDays();
    event.target.classList.add("active");
    this.btnClean.classList.add("active");
    this.colorPeriod();
  }

  reviewCountActiveDays() {
    let ActiveDays = this.element.querySelectorAll(".day.active");
    if (ActiveDays.length > 1) {
      for (let day of ActiveDays) {
        day.classList.remove("active", "start", "end");
      }
      for (let i = this.startPeriod; i < this.endPeriod ; i+=86400000) {
        this.element.querySelector(`[data-value="${i}"]`).classList.remove('streak');
      }
    }
  }

  colorPeriod() {
    let activeDays = this.element.querySelectorAll(".day.active");
    this.startPeriod = new Date(parseInt(activeDays[0].dataset.value)).getTime();
    if (activeDays.length == 2) {
      this.endPeriod = new Date(parseInt(activeDays[1].dataset.value)).getTime();
      activeDays[0].classList.add("start");
      activeDays[1].classList.add("end");
      for (let i = this.startPeriod + 86400000; i < this.endPeriod; i+=86400000) {
        this.element.querySelector(`[data-value="${i}"]`).classList.add('streak');
      }
    }
  }

  fillInput() {
      this.inputStartDate.textContent = new Date(this.startPeriod+86400000).toISOString().replace(/^([^T]+)T(.+)$/,'$1').replace(/^(\d+)-(\d+)-(\d+)$/,'$3.$2.$1');
      this.inputEndDate.textContent = new Date(this.endPeriod+86400000).toISOString().replace(/^([^T]+)T(.+)$/,'$1').replace(/^(\d+)-(\d+)-(\d+)$/,'$3.$2.$1');
  }
  isActiveDay() {
    return this.element.querySelectorAll(".day.active").length;
  }
  cleanDrop() {
    for (let day of this.element.querySelectorAll(".day")) {
      day.classList.remove("active", "start", "end", "streak");
    }
    this.btnClean.classList.remove("active");
    this.inputStartDate.textContent = this.options;
    this.inputEndDate.textContent = this.options;
  }
}

const datePicker = new Datepicker(".datepicker", "ДД.ММ.ГГГГ");
