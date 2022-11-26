function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const collection = document.querySelector('#boxes')

inputEl.addEventListener('change', getAmountElements);
btnCreate.addEventListener('click', createBoxes);

function getAmountElements(value) { 
  console.log(value.currentTarget.value);
};

function createBoxes(amount) {
  console.log(amount);
    const divEl = document.createElement('div');
    divEl.width = '30px';
    divEl.height = '30px';
    divEl.style.backgroundColor = getRandomHexColor();

    collection.append(divEl);
};

