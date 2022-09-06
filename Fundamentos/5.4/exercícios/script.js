
/*Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte (Font family).*/


let yourName = document.getElementById('namebox');
let buttonSaveName = document.getElementById('saveName');
let corDoTexto = document.getElementById('text-color');
let buttonSaveTextColor = document.getElementById('saveColor');
let tamanhoDaFonte = document.getElementById('tamanho-da-fonte');
let buttonSaveFontSize = document.getElementById('saveFontSize');
let alturaDaLinha = document.getElementById('altura-da-linha');
let buttonSaveLineHeight = document.getElementById('saveLineHeight');
let fonte = document.getElementById('fonte');
let buttonSaveFontType = document.getElementById('saveFontType');
let backgroundColor = document.getElementById('bkgcolor');
let buttonSaveBkgColor = document.getElementById('saveBkgColor');


let myText = document.getElementById('my-text');

// localStorage.clear();

// function registerName (key, boxValue) {
//         localStorage.setItem(key, boxValue);    
// }

function registerName() {
    localStorage.setItem('user', yourName.value);    
}


function registerFontColor() {
    localStorage.setItem('fontColor', corDoTexto.value);    
}

function registerFontSize () {
    localStorage.setItem('fontSize', tamanhoDaFonte.value);    
}

function registerLineHeight () {
    localStorage.setItem('lineHeight', alturaDaLinha.value);    
}

function registerFontType () {
    localStorage.setItem('fontType', fonte.value);    
}

function registerBkgColor () {
    localStorage.setItem('bkg', backgroundColor.value);    
}

buttonSaveName.addEventListener('click', registerName);
buttonSaveTextColor.addEventListener('click', registerFontColor);
buttonSaveFontSize.addEventListener('click', registerFontSize);
buttonSaveLineHeight.addEventListener('click', registerLineHeight);
buttonSaveFontType.addEventListener('click', registerFontType);
buttonSaveBkgColor.addEventListener('click', registerBkgColor);
// yourName.addEventListener('')

let textColor = localStorage.getItem('fontColor');
let textSize = localStorage.getItem('fontSize');
let textLineHeight = localStorage.getItem('lineHeight');
let textFontType = localStorage.getItem('fontType');
let bkgColor = localStorage.getItem('bkg');


let settings = localStorage;

function defineSettings () {
    myText.style.color = textColor;
    myText.style.fontSize = `${textSize}px`;
    myText.style.lineHeight = `${textLineHeight}em`;
    myText.style.fontFamily = textFontType;
    document.body.style.backgroundColor = bkgColor;
}

window.onload(defineSettings());



// fontColor: "Black"
// fontSize: "12"
// fontType: "Shadows Into Life"
// lineHeight: "4"
// name: "Diogo"
// user: "Jessica"
// length: 6

//pra cada alteração eu devo fazer uma chave e um valor e linkar a uma mudança?

// window.onload(function() {
//     if (localStorage.length === 0)
// })



//capturar preferências, armazenar, rodar quando a pessoa voltar pro site