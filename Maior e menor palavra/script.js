/*3- Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.  
Considere o número de caracteres de cada palavra.*/

let array = ['java', 'javascript', 'python', 'html', 'css'];

let size = array[0].length;
let size2 = array[0].length;
let wordHolder ='';
let longest = '';
let shortest = '';
let wordHolder2 = '';

for (i = 0; i < array.length; i+= 1) {
    for (word = 0; word < array[i].length; word += 1) {
        wordHolder = array[i];
    }
    if (wordHolder.length > size) {
        longest = wordHolder;
        size = wordHolder.length;
    }

}

console.log('The longest word is ' + longest);

for (j = 0; j < array.length; j+= 1) {
    for (word = 0; word < array[j].length; word += 1) {
        wordHolder2 = array[j];
    }
    if (wordHolder2.length < size2) {
        shortest = wordHolder2;
        size2 = wordHolder2.length;
    }

}

console.log('The shortest word is ' + shortest);