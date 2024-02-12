// side effect text

gsap.to(".text h1", {
  transform: "translateX(-90%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    scrub: 2,
    markers: true,
    pin: true,
    start: "top 0",
    end: "top -100%",
  },
});
