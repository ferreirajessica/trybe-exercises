// Utilizando for, descubra qual o maior valor contido no array e imprima-o;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let validate;
let store = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
validate = numbers[i];
if (validate > store) {
    store = validate
} else {
    store = store;
}
};

console.log('O maior número é', store);