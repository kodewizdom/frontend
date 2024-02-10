//! GSAP

//! to go from inital to final 
gsap.to(".box", {
  x: 1000,
  rotate: 360,
  backgroundColor: "blue",
  duration: 2,
  delay: 1,
});

//! to go from final to inital
// gsap.from(".box", {
//   x: 1000,
//   rotate: 360,
//   backgroundColor: "blue",
//   duration: 2,
//   delay: 1,
// });

//! GSAP Timeline

//! 1st way

// gsap.to(".box1", {
//   x: 1200,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
//   delay: 1,
// });

// gsap.to(".box2", {
//   x: 1200,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
//   delay: 2,
// });

// gsap.to(".box3", {
//   x: 1200,
//   rotate: 360,
//   scale: 0.5,
//   duration: 2,
//   delay: 3,
// });

//! 2nd way

var timeline = gsap.timeline();

timeline.to(".box1", {
  x: 1100,
  rotate: 360,
  scale: 0.5,
  duration: 2,
});

timeline.to(".box2", {
  x: 1100,
  rotate: 360,
  scale: 0.5,
  duration: 2,
},"+=1.5");
// here "+=1.5"  means that this tween will start 1.5 seconds after the previous one ends

timeline.to(".box3", {
  x: 1100,
  rotate: 360,
  scale: 0.5,
  duration: 2,
});

timeline.to(".box4", {
  x: 1100,
  rotate: 360,
  scale: 0.5,
  duration: 2,
},"-=1.5");
//here "-=1.5"  means that this tween will start 1.5 seconds before the previous one end
