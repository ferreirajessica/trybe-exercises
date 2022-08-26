/* header id - header-container
section urgente e não importante class="emergency-tasks"
h3 lista1
section class "no-emergency-tasks"
h3 lista2
footer id 'footer-container" */

const header = document.getElementById('header-container');
const emergency = document.querySelectorAll('.emergency-tasks');
const nonEmergency = document.querySelectorAll('.no-emergency-tasks');
const titleEmergency = document.querySelectorAll('h3 .lista1');
const titleNonEmergency =  document.querySelectorAll('.lista2');
const footer = document.getElementById('footer-container');
const h3 = document.querySelectorAll('h3');

function changeToMagenta (element) {
     for (let index = 0; index < element.length; index += 1) {
        element[index].style.backgroundColor = "rgb (255,0,255)";
    }
}

function changeToGreen (element) {
   element.style.backgroundColor = "green";
}

function changeToPink (element) {
    for (let index = 0; index < element.length; index =+ 1) {
        element[index].style.backgroundColor = "pink";
    }
}

function changeToYellow (element) {
    for (let index = 0; index < element.length; index =+ 1) {
        element[index].style.backgroundColor = "rgb(255,255,167)";
    }
}

function changeToDarkGreen (element) {
    element.style.backgroundColor = "rgb(0,51,0)";
 }


function changeToDarkGrey (element) {
    for (let index = 0; index < element.length; index =+ 1) {
        element[index].style.backgroundColor = "rgb(64,64,64)";
    }
}


changeToGreen(header);
changeToPink(emergency);
changeToYellow(nonEmergency);
changeToDarkGreen(footer);
changeToMagenta(titleEmergency);

