const inputEl = document.querySelector('input');
const spanEl = document.querySelector('span');

inputEl.addEventListener('input', onSpanChange);

function onSpanChange(event) {
    spanEl.textContent = event.currentTarget.value;
};

