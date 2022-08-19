/*Faça um programa que retorne o maior de três números. Defina no começo do programa três 
constantes com os valores que serão comparados. */

const a = 15;
const b = 25;
const c = 26;

if (a > b && a > c) {
    console.log('O maior dos 3 é '+ a);
} else if (b > c) {
    console.log('O maior dos 3 é '+ b);
} else {
    console.log('O maior dos 3 é ' + c);
}

// 