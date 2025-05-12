// Animate the element with ID 'box' inside 'page1'.
// The animation scales the element from 0 to its original size, rotates it 360 degrees, and starts after a delay of 1 second.
gsap.from('#page1 #box', {
    scale: 0,
    delay: 1,
    rotate: 360,
});

// Animate the element with ID 'box' inside 'page2'.
// The animation scales the element from 0 to its original size and rotates it 360 degrees.
// The scrollTrigger configuration ensures the animation is triggered when the element comes into view during scrolling.
gsap.from('#page2 #box', {
    scale: 0,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page2 #box", // The element that triggers the animation.
        scroller: "body", // The container being scrolled.
        markers: true, // Displays markers for debugging the start and end points of the animation.
        start: "top 60%", // Animation starts when the top of the element reaches 60% of the viewport height.
        end: "top 50%", // Animation ends when the top of the element reaches 50% of the viewport height.
        scrub: 2 // Smoothly scrubs the animation in sync with the scroll position.
    }
}); 