document.getElementById("red-button").addEventListener("click", () => {
  resetAnimations();
  document.querySelector(".rainbow-color-1").style.animationPlayState =
    "running";
});

document.getElementById("orange-button").addEventListener("click", () => {
  resetAnimations();
  document.querySelector(".rainbow-color-2").style.animationPlayState =
    "running";
});

document.getElementById("yellow-button").addEventListener("click", () => {
  resetAnimations();
  document.querySelector(".rainbow-color-3").style.animationPlayState =
    "running";
});

document.getElementById("green-button").addEventListener("click", () => {
  resetAnimations();
  document.querySelector(".rainbow-color-4").style.animationPlayState =
    "running";
});

document.getElementById("blue-button").addEventListener("click", () => {
  resetAnimations();
  document.querySelector(".rainbow-color-5").style.animationPlayState =
    "running";
});
document.getElementById("restart").addEventListener("click", () => {
  document.querySelectorAll(".rainbow-color").forEach((element) => {
    element.style.animation = "none"; //reset the animations
    void element.offsetWidth; //trigger reflow
    element.style.animation = ""; //reapply the animation
  });
});

function resetAnimations() {
  document.querySelectorAll(".rainbow-color").forEach((element) => {
    element.style.animationPlayState = "paused";
  });
}
