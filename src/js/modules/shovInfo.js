export default class ShovInfo {
  constructor(triggers) {
    this.triggers = document.querySelectorAll(triggers);
  }

  init() {
    this.triggers.forEach((item) => {
      item.addEventListener("click", () => {
        const msg = item.nextElementSibling;
        msg.classList.toggle("msg");
        msg.classList.add("animated", "fadeInUp");
        msg.style.marginTop = "20px";
      });
    });
  }
}
