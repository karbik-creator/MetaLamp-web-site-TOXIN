import "./radio_btn.scss";

class RadioBtn {
  constructor(selector) {
    this.elements = document.querySelectorAll(selector);
    this.setup();
  }
  setup() {
    this.toggle = this.toggle.bind(this);
    this.elements.forEach(element => {
      element.addEventListener("click", this.toggle,true);
    })

  }

  toggle(event) {
    if (event.target.dataset.type === 'input') {
      let container = event.target.offsetParent.parentElement;
      let allInputs = container.querySelectorAll('input');
      allInputs.forEach(item=>{
        item.checked=false;
      })
      let input = event.target;
      input.checked = true;
    }
  }
}

new RadioBtn('.radio-btn__list')

