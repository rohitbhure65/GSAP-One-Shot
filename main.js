gsap.to('#page2 h1', {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: '#page2',
        scroller: "body", // corrected from "scroll" to "scroller"
        markers: true,
        start: "top 0%",
        end: "bottom -150%",
        pin: true,
        scrub: 2,
    }
});