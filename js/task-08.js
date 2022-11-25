const btnForm = document.querySelector('button');

btnForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    console.log('Hello');
};
