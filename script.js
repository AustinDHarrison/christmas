const snowContainer = document.getElementById('snow-container')
const snowContent = ['&#10052', '&#10053', '&#10054']
const random = (num) => {
    return Math.floor(Math.random() * num);
  }
  const getRandomStyles = () => {
    const top = random(100);
    const left = random(100);
    const dur = random(10) + 10;
    const size = random(25) + 25;
    const hw = random(15) + 5;
    return ` 
  top: -${top}%; 
  left: ${left}%; 
  font-size: ${size}px; 
  animation-duration: ${dur}s; 
    width: ${hw}px;
    height: ${hw}px;
  `;
  }
  const createSnow = (num) => {
    for (var i = num; i > 0; i--) {
      var snow = document.createElement("snow");
      snow.className = "snow";
      snow.style.cssText = getRandomStyles();

      document.getElementById('snow-container').appendChild(snow);
    }
  }
  window.addEventListener("load", () => {
    createSnow(30)
  });