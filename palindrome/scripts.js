/*Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.  
Por exemplo, a palavra "banana" seria invertida para "ananab".  
Utilize a string abaixo como exemplo, depois troque por outras para verificar  
se seu algoritmo está funcionando corretamente.*/

let word = "tryber";
let filter= word.toLowerCase();
let inverted = '';

for (let i = filter.length - 1; i >= 0; i -= 1) {
inverted += filter[i];
}

console.log(inverted);