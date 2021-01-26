var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 70 * i
  }).add({
    targets: '.ml6',
    opacity: 1,
    // duration: 1000,
    // easing: "easeOutExpo",
    // delay: 1000
  });
