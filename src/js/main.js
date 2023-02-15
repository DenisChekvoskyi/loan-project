import Slider from "./modules/slider";
import VideoPlayer from "./modules/videoPlayer";

window.addEventListener("DOMContentLoaded", () => {
  const slider = new Slider(".page", ".next");
  slider.render();

  const player = new VideoPlayer(".showup__video .play", ".overlay");
  player.init();
});
