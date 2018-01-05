const container = document.getElementById('container');
const gridSize = document.getElementById('gridSize');
const containerSize = container.clientWidth;
const rainbowBtn = document.getElementById('rainbow');
let rainbow = false;

function createSquare(size) {
  let div = document.createElement('div');

  div.classList.add('square');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;

  return div;
}

function createGrid(side) {
  for (let i = 0; i < side * side; i++) {
    container.appendChild(createSquare(containerSize / side));
  }
}

function toggleRainbow() {
  rainbow = !rainbow;
  rainbowBtn.classList.toggle('active');
}

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

function reset() {
  if (gridSize.value < 1) return;
  
  const safeToConfinue = gridSize.value <= 100 || confirm('WARNING\nThis has not been tested with size over 100.\nContinue?');

  if (safeToConfinue) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    createGrid(gridSize.value);
  }
}

container.addEventListener('mouseover', e => {
  let color = rainbow === true ? getRandomColor() : 'black';

  if (e.target.classList.contains('square')) {
    e.target.style.background = color;
  }
});

createGrid(gridSize.value);
