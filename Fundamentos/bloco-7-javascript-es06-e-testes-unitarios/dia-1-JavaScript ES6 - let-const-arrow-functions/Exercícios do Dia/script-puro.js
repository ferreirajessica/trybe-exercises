// Crie uma função que receba um número e retorne seu fatorial.

// function factorial(number) {
//     let result = number;
//     for (let i = number - 1; i >= 1; i -= 1) {
//         result = result * i;
//     }
//     return result;
// }

// console.log(factorial(4));


// function factorial(number) {
//     let num = (number -1);
//     let result = num >= 1? number*(num)
    

// }

// function longestWord(sentence) {
//   const words = sentence.split(" ");
//   let storage = "";
//     for (let i = 0; i < words.length; i += 1) {        
//       let wordCount = words[i].length;
//         if (wordCount > storage.length) {
//         storage = words[i];
//         } else {
// 					storage = storage;
// 				}
//     }
// 	return storage;

	// function longestWord(sentence) {
	// 	const words = sentence.split(' ');
	// 	let storage = '';
	// 	  for (let word of words) {
	// 			if (word.length > storage.length) {
	// 				storage = word;
	// 			} else {
	// 				storage = storage;
	// 			}
	// 		}
	// 		return storage;
	// }

// function longestWord(sentence) {
// 	const words = sentence.split(' ');
// 	const sorted = words.sort((a, b) => a.length - b.length);
// 	return sorted[words.length - 1];
// }


// console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'


// function substituaX(nome) {
//   const frase = 'Tryber x aqui!';
//   const result = frase.replace('x', nome);
//   return result;
// }

// console.log(substituaX('Jessica'));

function substituaX2(nome) {
  const frase = 'Tryber x aqui!';
  let fraseArray = frase.split(' ');
  let result;
  for (let word of fraseArray) {
	 if (word === 'x') {
	fraseArray[word] = nome;
	result = fraseArray;
	} 
	return result;
  }

}

console.log(substituaX2('Jessica'));

// const fruits = ['banana', 'apple', 'melon'];
// fruits[0] = 'kiwi';
// console.log(fruits);
