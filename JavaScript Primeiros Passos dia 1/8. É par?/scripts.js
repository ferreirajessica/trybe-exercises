/*Escreva um programa que defina três números em constantes e retorne true se pelo 
menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const number1 = 3;
const number2 = 4;
const number3 = 5;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 ===0 ) {
    console.log('True');
} else {
    console.log('False');
};
