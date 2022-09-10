const checkin = document.querySelector('.inputCheckin');
const checkout = document.querySelector('.inputCheckout');
const bedroom = document.querySelectorAll('.bedroom');
const select = document.querySelectorAll('.nPessoas');
const textArea = document.querySelector('.obs');
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');
const ol = document.querySelector('ol');
const bookings = [];

function getQuarto() {
  for (let i = 0; i < bedroom.length; i++) {
    if (bedroom[i].checked === true) {
      return bedroom[i].value;
    }
  }
}

function getPessoas() {
  for (let i = 0; i < select.length; i += 1) {
    if (select[i].selected === true) {
      return select[i].value;
    }
  }
}
getPessoas();

function getData(value) {
  const valueDate = value + 'T03:00:00.000Z';
  let data = new Date(valueDate);
  let dataFormatada = data.toLocaleDateString('pt-BR');
  return dataFormatada;
}

function createLi () {
  const newLi = document.createElement('li');
  newLi.innerText = `Reserva para o dia ${getData(checkin.value)} até o dia ${getData(checkout.value)}, Quarto ${getQuarto()}, para ${getPessoas()} Pessoas. Obs: ${textArea.value}`;
  bookings.push(newLi.innerText);
  return newLi;
}

function getBookings () {
  let myBookings = {};
  for (let i = 0; i < bookings.length; i += 1) {
    myBookings[`${i}`] = bookings[i];
  };
  return myBookings;
}

function saveList () {
  localStorage.setItem('bookings', JSON.stringify(getBookings()));
}

function submit (event) {
  event.preventDefault();
  ol.appendChild(createLi());
  saveList();
}

function clear() {
  ol.innerHTML = '';
}



btnSubmit.addEventListener('click', submit);
btnClear.addEventListener('click', clear);

window.onload = function () {
  const getBookings = JSON.parse(localStorage.getItem('bookings'));
  for (i in getBookings) {
    let newLi = document.createElement('li');
    newLi.innerText = getBookings[i];
    ol.appendChild(newLi);
    bookings.push(newLi.innerText);
  }
}

// Desenvolva uma função para criar uma li de forma dinâmica
// Sua li deve conter os valores dos inputs e ficar da seguinte forma: Reserva para o dia xx/xx/xxxx até o dia xx/xx/xxxx Quarto x - Para x Pessoas - Obs: xxxx Obs: xxxxxx
// Esta li deve ser filha da ol
// Adicione um evento de click ao botão que deve receber essa função