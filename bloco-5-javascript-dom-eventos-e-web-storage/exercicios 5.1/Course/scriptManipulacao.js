let header = document.getElementById('header-container');
let tituloUrgente = document.querySelectorAll('.emergency-tasks h3');
let urgenteSection = document.querySelectorAll('.emergency-tasks');
let tituloNaoUrgente = document.querySelectorAll('.no-emergency-tasks h3');
let naoUrgenteSection = document.querySelectorAll('.no-emergency-tasks');
let footer = document.getElementById('footer-container');

header.style.background = 'green';
urgenteSection[0].style.background = 'pink';
naoUrgenteSection[0].style.background = 'rgb(255,234,160)'; // aqui ele pega a section inteira, por isso colore no 0!
tituloUrgente[0].style.background = 'rgb(255,20,147)';
tituloUrgente[1].style.background = 'rgb(255,20,147)';
tituloNaoUrgente[0].style.background = 'rgb(37,34,30)';
tituloNaoUrgente[1].style.background = 'rgb(37,34,30)';
footer.style.background = 'rgb(75,122,71)';
