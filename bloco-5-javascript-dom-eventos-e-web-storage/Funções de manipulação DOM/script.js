let myParagraph = document.getElementsByTagName('p');

function changeParagraph (paragraph, text) {
return paragraph[1].innerText = text;
}

changeParagraph(myParagraph,'Me vejo a melhor programadora EVER!')

//rgb(76,164,109)

let background = document.getElementsByClassName('main-content');

function changeBackgroundColor(element) {
    element[0].style.background = 'rgb(76,164,109)';
}

changeBackgroundColor(background);

let redSquare = document.querySelector('.center-content');

function changeToWhite (element) {
    element.style.background = 'white';
}

changeToWhite(redSquare);

let title = document.getElementsByClassName('title');

function correctText (element) {
    element[0].innerText = "Exercício 5.1 JavaScript";
}

correctText(title);

let tagsP = document.getElementsByTagName('p');

function changeToUpper(element) {
    for (i =0; i < element.length; i += 1) {
        element[i].style.textTransform = 'uppercase';
    }
}

changeToUpper(tagsP);

// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

function printTags (element) {
    for (i =0; i < element.length; i += 1) {
        console.log(element[i].innerText);
    }
}

printTags(tagsP);