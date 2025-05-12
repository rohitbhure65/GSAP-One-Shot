var initialPath= `M 10 100 Q 500 100 990 100`
var finalPath= `M 10 100 Q 500 100 990 100`

var string = document.querySelector("#string")

string.addEventListener("mousemove", function(dets) {
    // console.log(dets.x);
    path = `M 10 100 Q 500 ${dets.y} 990 100`
    gsap.to('svg path', {
      attr: { d: path },
      duration: 0.2,
      ease: "power2.Out",
    });
})

string.addEventListener("mouseleave", function(dets) {
    // console.log(dets.y);
    gsap.to('svg path', {
      attr: { d: finalPath },
      duration: 1.5,
      ease: "elastic.out(1, 0.2)",
    });
})