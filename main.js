// function brackText() {
//     var h1 = document.querySelector('h1')
//     var h1Text = h1.textContent
//     var splittedText = h1Text.split('');
//     var clutter = ""
//     // console.log(splittedText);

//     splittedText.forEach(function (e) {
//         // clutter += e // clutter = clutter + e
//         clutter += `<span>${e}</span>` // clutter = clutter + `<span>${e}</span>`   
//     })

//     // console.log(clutter);

//     h1.innerHTML = clutter // Corrected from innerHtml to innerHTML
// }

// brackText()

// gsap.from('h1 span', {
//     y: 50,
//     opacity: 0,
//     duration: 0.8,
//     delay: 0.5,
//     stagger: 0.15,
//     repeat: -1,

// });


////////////////////////////////////////////////

function brackText() {
    var h1 = document.querySelector('h1')
    var h1Text = h1.textContent
    var splittedText = h1Text.split('');
    var halfvalue = splittedText.length / 2;
    var clutter = ""
    // console.log(splittedText);

    splittedText.forEach(function (e,idx) {
      if(idx < halfvalue){
        clutter += `<span class="left">${e}</span>` // clutter = clutter + `<span>${e}</span>`
      }else{
        clutter += `<span class="right">${e}</span>` // clutter = clutter + `<span>${e}</span>`
      } 
    })

    // console.log(clutter);

    h1.innerHTML = clutter // Corrected from innerHtml to innerHTML
}

brackText()

gsap.from('h1 .left', {
    y: 80,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15,
    repeat: -1,

});

gsap.from('h1 .right', {
    y: 80,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: -0.15,
    repeat: -1,

});