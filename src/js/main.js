import MainSlider from "./modules/sliders/sliderMain";
import VideoPlayer from "./modules/videoPlayer";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new MainSlider({ btns: ".next", page: ".page" });
  slider.render();

  const player = new VideoPlayer(".showup__video .play", ".overlay");
  player.init();
});
