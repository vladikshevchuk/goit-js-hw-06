const btnDecrement = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const btnIncrement = document.querySelector('button[data-action="increment"]');

// btnDecrement.addEventListener("click", () => {
//   valueEl.textContent -= 1;
// });

// btnIncrement.addEventListener("click", () => {
//   valueEl.textContent ++;
// });

let counterValue = 0;

btnDecrement.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

btnIncrement.addEventListener("click", () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});