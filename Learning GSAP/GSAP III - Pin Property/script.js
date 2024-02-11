// pin property

gsap.to(".page2 img", {
  width: "100%",
  scrollTrigger: {
    //in pin we only target parrent
    trigger: ".page2",
    scroller: "body",
    markers: true,
    start: "top 0",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
