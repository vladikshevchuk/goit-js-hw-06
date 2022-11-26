const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', onExamInput);

function onExamInput(event) {
    if (event.currentTarget.value.length === +inputEl.dataset.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    };
};