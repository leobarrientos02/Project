let controller;
let slideScene;

function animation() {
  // Init controller
  controller = new ScrollMagic.Controller();
  //Select some things
  const userTitle = document.querySelector(".user-intro-title");
  const description = document.querySelectorAll(".description");
  //Timeline to chain togather multiple animation
  const slideT1 = gsap.timeline({
    defauls: {
      duration: 1,
      ease: "power2.inOut",
    },
  });
  slideT1.fromTo(userTitle, 5, { opacity: "0" }, { opacity: "1" });
  slideT1.To(description, 1, { x: "0%" });
  //Create scene
  slideSCene = new ScrollMagic.Scence({
    triggerElement,
  });
}
animation();
