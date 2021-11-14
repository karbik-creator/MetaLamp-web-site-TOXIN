import "./expandable-checkbox-list.scss";
import "../checkboxList/checkboxList";

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
  }

  toggle() {
    this.element.classList.toggle("open");
  }
}

