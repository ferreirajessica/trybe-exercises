const submitButton = document.getElementById('submit-button');
const clearButton = document.getElementById('clear-button');
const form = document.getElementById('my-form');
const nameField = document.getElementById('full-name');
const emailField = document.getElementById('email');
const textField = document.getElementById('text');
const date = document.getElementById('best-date');
const authorizePics = document.getElementById('authorize-pictures');


function checkName() {
    if (nameField.value.length < 10 || nameField.value.length > 50) {
        alert('Nome Inválido');
        return false;
    }
}

function checkEmail () {
    if (emailField.value.length < 10 || emailField > 50) {
        alert('E-mail Inválido')
        return false;
    }
}

function checkText () {
    if (textField.value.length > 500) {
        alert('O texto só pode ter até 500 caracteres');
        return false;
    }
   }

function checkValues () {
    if (checkName() !==  false && checkEmail() !== false && checkText() !== false) {
        alert('Dados Enviados com Sucesso');
    }
}

function prevent(event) {
    event.preventDefault();
    checkName();
    checkEmail();
    checkText();
    checkValues();
}


submitButton.addEventListener('click', prevent);

