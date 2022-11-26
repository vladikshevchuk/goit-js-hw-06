const form = document.querySelector('button');

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    if (formElements.email.value === '' ||
        formElements.password.value === '') {
        return alert('заполните все поля');
    }

    const formData = {
        mail,
        password,
    };

    console.log(formData);

    formData.reset();
};
