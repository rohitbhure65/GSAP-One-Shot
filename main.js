var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")

main.addEventListener("mousemove", function (e) { // event listener jo harkat ho rahi usko monitor karne ke liye
    // console.log(e.x);
    gsap.to(cursor, {
      x: e.x-15,
      y: e.y-15,
      duration: 1,
      ease: "ease.out"
    });
})