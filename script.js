let angle = 0;
const carousel = document.querySelector(".carousel");

function rotate(dir){
  angle += dir * 72;
  carousel.style.transform = `rotateY(${angle}deg)`;
}

// Auto rotate every 4 seconds
setInterval(() => rotate(1), 5000);
