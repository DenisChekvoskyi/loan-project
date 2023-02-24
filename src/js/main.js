import MainSlider from "./modules/sliders/sliderMain";
import MiniSlider from "./modules/sliders/sliderMini";
import VideoPlayer from "./modules/videoPlayer";
import Difference from "./modules/difference";
import Form from "./modules/form";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({ btns: ".next", container: ".page" });
  slider.render();

  const sliderModulePage = new MainSlider({
    btns: ".next",
    container: ".moduleapp",
    next: ".nextmodule",
    prev: ".prev",
  });
  sliderModulePage.render();

  const showUpSlider = new MiniSlider({
    container: ".showup__content-slider",
    prev: ".showup__prev",
    next: ".showup__next",
    activeClass: "card-active",
    animate: true,
  });

  showUpSlider.init();

  const moduleSlider = new MiniSlider({
    container: ".modules__content-slider",
    prev: ".modules__info-btns .slick-prev",
    next: ".modules__info-btns .slick-next",
    activeClass: "card-active",
    animate: true,
    autoplay: true,
  });

  moduleSlider.init();

  const feedSlider = new MiniSlider({
    container: ".feed__slider",
    prev: ".feed__slider .slick-prev",
    next: ".feed__slider .slick-next",
    activeClass: "feed__item-active",
  });

  feedSlider.init();

  new VideoPlayer(".showup__video .play", ".overlay").init();
  new VideoPlayer(".module__video-item .play", ".overlay").init();

  new Difference(".officerold", ".officernew", ".officer__card-item").init();
  new Form(".form").init();
});
