const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', onExamInput);

function onExamInput(event) {
    if (event.currentTarget.value.length === +inputEl.dataset.length) {
        console.log(true);
        inputEl.style.borderColor = '#4caf50';
    } else {
        console.log(false);
        inputEl.style.borderColor = '#f44336';
    };
};