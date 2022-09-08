const submitButton = document.getElementById('submit-button');
const clearButton = document.getElementById('clear-button');
const form = document.getElementById('my-form');
const nameField = document.getElementById('full-name');
const emailField = document.getElementById('email');
const expText = document.getElementById('text');
const date = document.getElementById('best-date');
const authorizePics = document.getElementById('authorize-pictures');


function prevent(event) {
    event.preventDefault();
}


submitButton.addEventListener('click', prevent);
// form.addEventListener('click', function() {
//     if (submitButton.click()){
//         form.prevent;
//     }
// });

function clearAll() {
    form.reset();
}

function reset() {
    nameField.value = '';
    emailField.value = '';
    expText.value = '';
    date = new Date().toDateInputValue();

}

clearButton.addEventListener('click', reset);

function validateCharacters() {
    if (!nameField.checkValidity()) {
        alert('Dados Inválidos.');
    }
    if (!emailField.checkValidity()){
        alert('Dados Inválidos.');
    }
    if(!expText.checkValidity()) {
        alert('Dados Inválidos.');
    }
    if (!authorizePics.checkValidity()) {
        alert('Dados Inválidos');
    }
}

submitButton.addEventListener('click', validateCharacters());