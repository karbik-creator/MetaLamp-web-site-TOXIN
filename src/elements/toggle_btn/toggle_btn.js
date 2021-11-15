import "./toggle_btn.scss";

class ToggleBtn {
  constructor(...selector) {
    this.elements = document.querySelectorAll(selector);

    this.setup();
  }

  setup() {
    this.elements.forEach((item) => {
      item.addEventListener("click", this.toggle);
    });
  }

  toggle(event) {
    let eventPath = event.path || (event.composedPath && event.composedPath());
    eventPath.forEach((item) => {
      if (item.tagName === "DIV") {
        if (item.dataset.type === "checkbox") {
            item.classList.toggle('active');
            let input = item.querySelector('input');
            input.checked = input.checked === true ? false:true;
        }
      }
    });
  }
}
new ToggleBtn(".checkbox");
