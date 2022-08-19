/*  Faça um programa que defina três variáveis com os valores dos três ângulos 
internos de um triângulo. Retorne true se os ângulos representarem os ângulos de 
um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve 
retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo. */

const angleOne = 90;
const angleTwo = 46;
const angleThree = 45;

if (angleOne < 0 || angleTwo < 0 || angleThree < 0 ) {
    console.log('Invalid angle');
} else if (angleOne+angleTwo+angleThree === 180) {
    console.log(true);
} else {
    console.log(false);
};


