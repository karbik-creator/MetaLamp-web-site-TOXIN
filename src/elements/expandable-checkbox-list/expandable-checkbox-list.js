import "./expandable-checkbox-list.scss";
import "../checkboxlist/checkbox__list";

class Checkbox {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.setup();
  }

  setup() {
    this.toggle = this.toggle.bind(this);
    this.expandableCheckbox = this.element.querySelectorAll(
      "[data-type='checkbox']"
    );
    this.expandableCheckbox.forEach((element) => {
      element.addEventListener("click", this.toggle);
    });
    this.expandableCheckbox.forEach((element) => {
      element.addEventListener("keyup", this.toggle);
    });
  }

  toggle(event) {
    if (event.code === 'Space' || event.type === 'click') {
      this.element.classList.toggle("open");
    }
  }
}

new Checkbox('.expandable-checkbox-list')

