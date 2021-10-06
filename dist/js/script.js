const getTemplate = (data = [], placeholder) => {
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
      getTemplate(data, placeholder)
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
