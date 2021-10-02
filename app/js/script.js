const getTemplate = () => {
  return `
    <div class="select__input" data-type="input">Сколько гостей</div>
    <div class="select__drop__down">
      <div class="select__drop__down__item">
        <div class="select__item__text">Взрослые</div>
        <div class="select__item__content__right">
          <button class="select__item__btn minus">-</button>
        <div class="select__item__number">0</div>
        <button class="select__item__btn plus active">+</button>
        </div>
      </div>
      <div class="select__drop__down__item">
        <div class="select__item__text">Дети</div>
        <div class="select__item__content__right">
          <button class="select__item__btn minus">-</button>
        <div class="select__item__number">0</div>
        <button class="select__item__btn plus">+</button>
        </div>
      </div>
      <div class="select__drop__down__item">
        <div class="select__item__text">Младенцы</div>
        <div class="select__item__content__right">
          <button class="select__item__btn minus">-</button>
        <div class="select__item__number">0</div>
        <button class="select__item__btn plus">+</button>
        </div>
      </div>
      <div class="select__drop__down__btn">
        <button>очистить</button>
        <button class="active">применить</button>
      </div>
    </div>
    `;
};

class Select {
  constructor(selector, options) {
    this.element = document.querySelector(selector);
    this.element.classList.add("select__wrapper");
    
    this.render();
    this.setup();
  }

  render() {
    this.clickHandler = this.clickHandler.bind(this);
    this.element.insertAdjacentHTML("afterbegin", getTemplate());
  }

  setup() {
    this.element.addEventListener("click", this.clickHandler);
  }

  clickHandler(event) {
    const { type } = event.target.dataset;
    if (type === 'input'){
        this.toogle();
    }
  }

  toogle() {
    this.element.classList.toggle("open");
  }

  destroy() {
    this.element.removeEventListener("click", this.clickHandler);
  }
}

const select = new Select("#select-in-form");
