//const getTemplate = () => {
//};

class Select {
  constructor(selector, options) {
    this.element = document.querySelector(selector);
    this.element.classList.add("select__wrapper");
    this.btn = document.querySelectorAll('.select__item__btn');
    this.numberOfPeople = [{people:12, number:12}, ]
    this.setup();
  }

  setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.element.addEventListener("click", this.clickHandler);
    for (let item of this.btn){
      item.addEventListener("click", this.clickHandler);
    }
  }

  clickHandler(event) {
    const { type } = event.target.dataset;
    if (type === 'input'){
        this.toogle();
    }
    if (type === 'minus'){
      
  }
  }

  minus(){

  }

  toogle() {
    this.element.classList.toggle("open");
  }

  destroy() {
    this.element.removeEventListener("click", this.clickHandler);
  }
}

const select = new Select("#select-in-form");
