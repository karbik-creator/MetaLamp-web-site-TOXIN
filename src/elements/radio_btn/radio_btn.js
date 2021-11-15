import "./radio_btn.scss";

class RadioBtn {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.setup();
  }
  setup() {
    this.toggle = this.toggle.bind(this);
    this.btnRadio = this.element.querySelectorAll("[data-type='btn']");
    this.btnRadio.forEach((element) => {
      element.addEventListener("click", this.toggle);
    });
  }

  toggle(event) {
    this.btnRadio.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
    
    let eventPath = event.path || (event.composedPath && event.composedPath());
    eventPath.forEach((item) => {
      if (item.tagName === "LABEL") {
        item.classList.add("active");
      }
    });
  }
}

