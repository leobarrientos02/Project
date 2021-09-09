let controller;
let slideScene;

function animation() {
  // Init controller
  controller = new ScrollMagic.Controller();
  //Select some things
  const sliders = document.querySelectorAll(".slide");
  //Timeline to chain togather multiple animation
  const slideT1 = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power2.inOut",
    },
  });
  slideT1.fromTo(sliders, 1.5, { x: "0%" }, { x: "100%" });
  //Create scene
  slideSCene = new ScrollMagic.Scence({
    triggerElement,
  });
}
animation();
