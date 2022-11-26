function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector('button');
const nameColor = document.querySelector('span');
const bodyEl = document.querySelector('body');

btnChangeColor.addEventListener('click', () => {
  const color = getRandomHexColor();
  nameColor.textContent = color;
  bodyEl.style.backgroundColor = color;
});