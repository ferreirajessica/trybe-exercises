/*9. Escreva um programa que defina três números em constantes e retorne true se 
pelo menos uma das três for ímpar. Caso contrário, ele retorna false.  
Bonus: use somente um if.  */

const number1 = 6;
const number2 = 7;
const number3 = 8;

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0) {
    console.log ('true');
} else {
    console.log ('false');
};