const inputEl = document.querySelector('input');
const spanEl = document.querySelector('span');

inputEl.addEventListener('input', onSpanChange);

function onSpanChange() {
    spanEl.textContent = inputEl.value
        ? inputEl.value
        : 'Anonymous';
};

