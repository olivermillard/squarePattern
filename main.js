/* eslint-disable no-unused-vars */
var mainContainer = document.getElementById("mainContainer");

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}
function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

var dimVar = 50;
var dimensions = dimVar + "px";
var pageWidth = getWidth();
var pageHeight = getHeight();
var spacingVar = Math.floor(pageWidth / dimVar);
var spacing = spacingVar + "px";

function setup() {
  //square1
  var square1 = document.createElement("div");
  square1.classList.add("square");
  square1.setAttribute("id", "square1");
  square1.style.height = dimensions;
  square1.style.width = dimensions;
  square1.style.left = spacing;
  square1.style.top = spacing;
  mainContainer.appendChild(square1);
  //square2
  // var square2 = document.createElement("div");
  // square2.classList.add("square");
  // square2.setAttribute("id", "square2");
  // square2.style.height = dimensions;
  // square2.style.width = dimensions;
  // square2.style.left = spacing;
  // square2.style.bottom = spacing;
  // mainContainer.appendChild(square2);
  //square3
  var square3 = document.createElement("div");
  square3.classList.add("square");
  square3.setAttribute("id", "square3");
  square3.style.height = dimensions;
  square3.style.width = dimensions;
  square3.style.right = spacing;
  square3.style.bottom = spacing;
  mainContainer.appendChild(square3);
  //square4
  // var square4 = document.createElement("div");
  // square4.classList.add("square");
  // square4.setAttribute("id", "square4");
  // square4.style.height = dimensions;
  // square4.style.width = dimensions;
  // square4.style.right = spacing;
  // square4.style.top = spacing;
  // mainContainer.appendChild(square4);
  //animate
  animate();
}

var heightChange = pageHeight - 4 * spacingVar;
var widthChange = pageWidth - 4 * spacingVar;
console.log(heightChange);

function animate() {
  // eslint-disable-next-line no-undef
  const animation1 = anime({
    targets: ".square",
    // eslint-disable-next-line no-undef
    keyframes: [
      {
        translateY: anime.stagger([heightChange / 2, (heightChange / 2) * -1]),
        // easing: "easeInOutSine",
        easing: "easeOutQuad",
        rotate: 180,
      },
      {
        translateX: anime.stagger([-1 * (widthChange / 2), widthChange / 2]),
        easing: "easeInOutSine",
        // width: "+= 20px",
        // height: "+= 20px",
      },
      {
        rotateY: 720,

        easing: "easeInOutSine",
      },
      {},
    ],
    duration: 3000,
    // loop: true,
    // direction: "alternate",
  });

  var paused = false;
  document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
      if (paused == false) {
        animation1.pause();
        paused = true;
      } else {
        animation1.play();
        paused = false;
      }
    }
  });
}
