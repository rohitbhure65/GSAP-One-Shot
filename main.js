// gsap.to animates the target element from its current state to the specified properties.
gsap.to('#box', {
    x: 1000, // Moves the element 1000px along the x-axis.
    duration: 2, // Animation lasts for 2 seconds.
    delay: 1 // Starts the animation after a 1-second delay.
});

// gsap.from animates the target element from the specified properties to its current state.
// Example:
// gsap.from('#box', {
//   x: -500, // Starts the animation with the element 500px to the left of its current position.
//   duration: 1.5, // Animation lasts for 1.5 seconds.
//   opacity: 0 // Starts the animation with the element fully transparent.
// });

gsap.from('#box1', {
    x: 1000,
    duration: 2,
    delay: 1,
    backgroundColor: 'blue', // camel case for css in gsap
    scale: 0.5, // Scales the element to half its size.
});

gsap.from('h1', {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: 30,
    stagger: 0.5, // -1 for reverse move | Staggers the animation for multiple elements.  
    repeat: 1, // Repeats the animation once. if u use -1 it will repeat infinitely
    yoyo: true, // Bounces back to the original position after the animation.
});

var tl = gsap.timeline()

// tl.to('#box4', {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     backgroundColor: 'blue',
//     scale: 0.5,
// })

// tl.to('#box5', {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     backgroundColor: 'blue',
//     scale: 0.5,
// })

tl.from("h2",{
    y:-20,
    opacity:0,
    duration: 1,
    delay: 0.5
})


tl.from("#part2 h4",{
    y:-20,
    opacity:0,
    duration: 1,
   stagger: 0.3,
})

tl.from("h3",{
    y:-20,
    opacity:0,
    duration: 1,
  scale:0.5,
})