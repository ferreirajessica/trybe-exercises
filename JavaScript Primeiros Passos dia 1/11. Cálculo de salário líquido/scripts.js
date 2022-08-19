/* Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de 
seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, 
calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. 
Para as faixas de impostos, use as seguintes referências:
INSS (Instituto Nacional do Seguro Social)
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88 */

const salarioBruto = 3000.00;
let descInss ;
let descIr;
let salarioBase;
let salarioLiquido;


const inssFaixa1 = (salarioBruto * 8)/100;
const inssFaixa2 = (salarioBruto * 9)/100;
const inssFaixa3 = (salarioBruto * 11)/100;
const inssFaixa4 = 570.88;



if (salarioBruto < 1556.95) {
    descInss = inssFaixa1;
} else if (salarioBruto < 2594.93) {
    descInss = inssFaixa2;
} else if (salarioBruto < 5189.83) {
    descInss = inssFaixa3;
} else if (salarioBruto > 5189.82) {
    descInss = inssFaixa4;
};

salarioBase = salarioBruto - descInss;
console.log(salarioBase);

const irFaixa1 = ((salarioBase * 7.5)/100) - 142.80;
const irFaixa2 = ((salarioBase * 15)/100) - 354.80;
const irFaixa3 = ((salarioBase * 22.5)/100) - 636.13;
const irFaixa4 = ((salarioBase * 27.5)/100) - 869.36;

if (salarioBase < 1903.99) {
    descIr = 0;
} else if (salarioBase < 2826.66) {
    descIr = irFaixa1;
} else if (salarioBase < 3751.06) {
    descIr = irFaixa2;
} else if (salarioBase < 4664.69) {
    descIr = irFaixa3;
} else if (salarioBase > 4664.68) {
    descIr = irFaixa4
};

salarioLiquido = salarioBase - descIr;

console.log(salarioLiquido); // 2612.55
