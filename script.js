const grid = document.getElementById('grid');
const rows = 10;
const cols = 10;

for (let i = 0; i < rows * cols; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');

  // Cambiar color al hacer clic
  cell.addEventListener('click', () => {
    cell.style.backgroundColor = getRandomColor();
  });

  grid.appendChild(cell);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
