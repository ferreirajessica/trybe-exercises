/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos 
que ela faz. Como desafio, faça o programa funcionar tanto se receber o nome de uma 
peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de 
condicionais. Como dica, você pode pesquisar uma função que faz uma string ficar com todas 
as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais) */

let chessPiece = 'King';

chessPiece = chessPiece.toLowerCase();

switch (chessPiece) {
    case 'queen':
      console.log('The '+ chessPiece + ': Straight and diagonal lines');
      break;
    case 'king':
      console.log('The '+ chessPiece + ':One square in any direction');
      break;
    case 'knight':
			console.log('The '+ chessPiece + ':L-shaped move');
			break;
		case 'rook':
			console.log('The '+ chessPiece + ':Horizontally or Vertically in na straight line');
			break;
		case 'pawn':
			console.log('The '+ chessPiece + ':One to two squares on the first move and then one square directly forward. It defeats the oponent diagonally');
			break;
		case 'bishop':
			console.log('The '+ chessPiece + ':diagonally in a straight line');
			break;
		default:
			console.log("I'm afraid chess can't be played with that piece.");
};
