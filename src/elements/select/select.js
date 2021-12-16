import './select.scss'
import '../../img/expand_more.svg'
export const getTemplateSelect = (data = [], placeholder, header) => {
  const text = placeholder ?? "Выберите значение";
  const items = data.map((item, index) => {
    return `
      <div class="select__drop__down__item" data-index = ${index}>
      <div class="select__item__text">${item.nameConter}</div>
      <div class="select__item__content__right">
        <button class="select__item__btn ${item.count > 0 ? 'active' : ''}" type="button" data-type="btnMinus">-</button>
        <div class="select__item__number" data-type="count">${item.count}</div>
        <button class="select__item__btn active" type="button" data-type="btnPlus">+</button>
      </div>
      </div>
      `;
  });

  return `<h3>${header}</h3>
              <div class="select__backdrop" data-type="backdrop"></div>
              <div class="select__input" data-type="input" tabindex='0'>
              <div class="select__input__placeholder" data-type="input">${text}</div>
              <span class="material-icons select__input__btn" data-type="input">expand_more</span>
              </div>
              <div class="select__drop__down">
                ${items.join('')}
                <div class="select__drop__down__btn">
                  <button ${data.map(item => { return item.count > 0 ? 'class="active"' : '' })} type="button" data-type="cleandrop">очистить</button>
                  <button class="active" type="button" data-type="backdrop">применить</button>
                </div>
              </div>`;
};

export class Select {
  constructor(selector, options) {
    this.element = document.querySelector(selector);
    this.options = options;
    this.selectId = null;

    this.render();
    this.setup();
  }
  
  render() {
    const { data, placeholder, header } = this.options;
    this.element.innerHTML = '';
    this.element.insertAdjacentHTML(
      "afterbegin",
      getTemplateSelect(data, placeholder, header)
    );
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.element.addEventListener("click", this.clickHandler);
    this.value = this.element.querySelector('.select__input__placeholder[data-type="input"]');
    this.count = this.element.querySelectorAll('[data-type="count"]');
    this.btnClean = this.element.querySelector('[data-type="cleandrop"]');
    this.currentInput();
  }

  clickHandler(event) {
    const { type } = event.target.dataset;

    if (type === "input") {
      this.toogle();
    }
    if (type === "btnPlus" || type === "btnMinus") {
      this.counter(event.target.parentElement, type);
      this.currentStyleBtn(event.target.parentElement);
      this.activeBtnClean();
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

  counter(container, type) {
    let countElement = container.querySelector('[data-type="count"]');
    let count = countElement.textContent;
    countElement.textContent = type === "btnPlus" ? this.plus(count) : this.minus(count);
    this.currentInput();
  }

  plus(count) {
    return ++count;
  }

  minus(count) {
    return count <= 0 ? 0 : --count;
  }

  currentInput() {
    let countList = this.element.querySelectorAll('[data-type="count"]');
    let arrayTextForInput = [];
    let sum = 0;
    let indexSelect;
    countList.forEach((item, index) => {
      if (parseInt(item.textContent) > 0) {
        if (this.options.data[index].select) {
          indexSelect = index;
          sum += parseInt(item.textContent);
        } else {
          let textForInput = this.declOfNum(item.textContent, this.options.data[index].value);
          arrayTextForInput.push(textForInput);
        }
      }
    });
    if (sum > 0) {
      let textForInput = this.declOfNum(sum, this.options.data[indexSelect].value);
      arrayTextForInput.unshift(textForInput)
    }
    this.value.textContent = arrayTextForInput.length === 0 ? this.options.placeholder : arrayTextForInput.join(', ');
  }

  declOfNum(n, text_forms) {
    if (n == 0) {
      return ''
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

  currentStyleBtn(container = this.element) {
    let btnMinus = container.querySelectorAll('[data-type="btnMinus"]');
    let count = container.querySelectorAll('[data-type="count"]');
    count.forEach((item, index) => {
      if (item.textContent > 0) {
        btnMinus[index].classList.add("active")

      } else {
        btnMinus[index].classList.remove("active");
      }
    })
  }


  activeBtnClean() {
    let countList = this.element.querySelectorAll('[data-type="count"]');
    let count = 0;
    countList.forEach(item => {
      item.textContent > 0 ? count++ : ''
    });
    count > 0 ? this.btnClean.classList.add("active") : this.btnClean.classList.remove("active")
  }

  cleanCount() {
    this.options.data.map((item) => (item.count = 0));
    for (let number of this.count) {
      number.textContent = 0;
    }
    this.currentStyleBtn();
    this.currentInput();
    this.btnClean.classList.remove("active");
  }
}