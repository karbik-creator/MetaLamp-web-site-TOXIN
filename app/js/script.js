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

const getTemplateDatepicker = (placeholder, month, year) => {
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
      <div class="month-and-year">${month + ' ' + year}</div>
      <button class="arrow next-month"  type="button">
      <span class="material-icons" id="arrow-next-month" data-type="btn-next-month"> arrow_forward </span>
      </button>
    </div>
    <div class="content__center">
      <div class="days-of-week">
        <div class="day-of-week">ПН</div>
        <div class="day-of-week">ВТ</div>
        <div class="day-of-week">СР</div>
        <div class="day-of-week">ЧТ</div>
        <div class="day-of-week">ПТ</div>
        <div class="day-of-week">СБ</div>
        <div class="day-of-week">ВС</div>
      </div>
      <div class="days"></div>
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
    [this.month, this.year] = [this.date.getMonth(), this.date.getFullYear()];

    this.render();
    this.setup();
  }

  render() {
    const placeholder = this.options;
    this.element.insertAdjacentHTML(
      "afterbegin",
      getTemplateDatepicker(placeholder, this.renderMonth(), this.year)
    );
    this.renderDays();

  }

  renderMonth() {
    const months = ['Январь', 'Февраль', 'Март', "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return months[this.month]
  }

  renderDays() {
    let days = new Date(this.month, this.year, 0).getDate();
    let daysList = this.element.querySelector('.days')
    for (let i = 1; i <= days; i++) {
      daysList.insertAdjacentHTML(
        "beforeend",
        `<div class="day" data-type="day" data-value='${i}'>${i}</div>`
      );
    }
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.daysContainer = this.element.querySelector(".days");
    this.element.addEventListener("click", this.clickHandler);
    this.days = this.element.querySelectorAll(".day");
    this.btnClean = this.element.querySelector('[data-type="cleandrop"]');
    this.inputStartDate = this.element.querySelector('[data-type="input-start-date"]');
    this.inputEndDate = this.element.querySelector('[data-type="input-end-date"]');
    this.startPeriod, this.endPeriod;
  }

  clickHandler(event) {
    const { type } = event.target.dataset;
    if (type === "input-start-date" || type === "input-end-date") {
      this.toggleDropdown();
    }
    if (type === 'btn-next-month') {
      this.nextMonth()
    }
    if (type === 'btn-prev-month') {
      this.prevMonth()
    }
    if (type === 'day') {
      this.activeDay(event)
    }
    if (type === 'backdrop') {
      this.toggleDropdown();
      this.fillInput();
    }
    if (type === 'cleandrop') {
      this.cleanDrop();
    }
  }

  toggleDropdown() {
    this.element.classList.toggle("open");
  }

  nextMonth() {
    this.month < 11 ? this.month++ : (this.month = 0, this.year++)
    this.element.querySelector('.month-and-year').textContent = this.renderMonth() + ' ' + this.year;
    this.renderDays()
  }

  prevMonth() {
    this.month > 0 ? this.month-- : (this.month = 11, this.year--)
    this.element.querySelector('.month-and-year').textContent = this.renderMonth() + ' ' + this.year;
    this.renderDays()
  }

  activeDay(event) {
    this.reviewCountActiveDays();
    event.target.classList.add('active');
    this.btnClean.classList.add('active');
    this.colorPeriod();
  }

  reviewCountActiveDays() {
    let ActiveDays = this.element.querySelectorAll('.day.active');
    if (ActiveDays.length > 1) {
      for (let day of ActiveDays) {
        day.classList.remove('active', 'start', 'end')
      }
      for (let i = this.startPeriod; i < this.endPeriod - 1; i++) {
        this.days[i].classList.remove('streak');
      }
    }

  }

  colorPeriod() {
    let ActiveDays = this.element.querySelectorAll('.day.active');
    this.startPeriod = parseInt(ActiveDays[0].dataset.value);
    if (ActiveDays.length == 2) {
      this.endPeriod = parseInt(ActiveDays[1].dataset.value);
      ActiveDays[0].classList.add('start');
      ActiveDays[1].classList.add('end');
      for (let i = this.startPeriod; i < this.endPeriod - 1; i++) {
        this.days[i].classList.add('streak');
      }
    }

  }

  fillInput() {
    let month, startDay, endDay;
    this.month < 9 ? month = '0' + (this.month + 1) : month = this.month + 1;
    this.startPeriod < 10 ? startDay = '0' + this.startPeriod : startDay = this.startPeriod;
    this.endPeriod < 10 ? endDay = '0' + this.endPeriod : endDay = this.endPeriod;
    this.inputStartDate.textContent = startDay + '.' + month + '.' + this.year;
    this.inputEndDate.textContent = endDay + '.' + month + '.' + this.year;

  }

  cleanDrop() {
    for (let day of this.days) {
      day.classList.remove('active', 'start', 'end', 'streak');
    }

  }

}

//new Datepicker(контейнер для datepicker, "ДД.ММ.ГГГГ");
const datePicker = new Datepicker(".datepicker", "ДД.ММ.ГГГГ");
