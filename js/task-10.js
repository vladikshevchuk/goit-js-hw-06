function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const collection = document.querySelector('#boxes')

console.log(collection);

inputEl.addEventListener('change', getAmountElements);
btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function getAmountElements() { 
  inputEl.value
};

function createBoxes() {
    const divEl = document.createElement('div');
    divEl.style.width = 30 + 'px';
    divEl.style.height = 30 + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
  
  collection.append(divEl);
};

function destroyBoxes() {
  const children = document.querySelectorAll('div > div');
  children.forEach(child => child.remove());
};


console.log(collection);
