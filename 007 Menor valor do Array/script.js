//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let validate;
let value = numbers[0];

for (let i = 0; i < numbers.length; i+= 1) {
validate = numbers[i];
if (validate < value) {
    value = validate;
}
};

console.log('O menor valor é', value); 
