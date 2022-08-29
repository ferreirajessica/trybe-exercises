let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let paiDeOndeVoceEsta = ondeVoceEsta.parentNode;
paiDeOndeVoceEsta.style.color = 'green';
let primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;
let primeioFilho = ondeVoceEsta.previousElementSibling;
primeiroFilhoDoFilho.innerText = 'sou o primeiro filho do filho';
let atencao = ondeVoceEsta.parentNode.childNodes[4];
let terceiroFilho = ondeVoceEsta.nextElementSibling;
let terceiroFilhodePai = paiDeOndeVoceEsta.children[2];

let novoIrmao = document.createElement('section');
paiDeOndeVoceEsta.appendChild(novoIrmao);
novoIrmao.id = 'novoIrmao';

let novoFilho = document.createElement('section');
ondeVoceEsta.appendChild(novoFilho);
novoFilho.id = 'novoFilho';

let acesseTerceiro = novoFilho.parentElement.nextElementSibling;

