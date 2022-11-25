const inputEl = document.querySelector('input');
const spanEl = document.querySelector('span');

inputEl.addEventListener('input', onInputPosition);

function onInputPosition(event) {
    console.log(event.currentTarget.value);
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
};
