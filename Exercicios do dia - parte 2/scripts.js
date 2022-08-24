//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindrome(word) {
	let reversedWord = '';
	for (let i = word.length - 1; i >= 0; i -= 1) {
		reversedWord += word[i];
	}
	if (reversedWord === word) {
		return true;
	}
	return false;
}; 


//console.log(palindrome2('arara')); 

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
console.log(palindrome('arara'));

function highestValue (array) {
		let initValue = array[0];    
		let index = 0;
				for (let value = 0; value < array.length; value += 1) {
						if (array[value] > initValue) {
								initValue = array[value];
								index = value;
						}           
				}
				return index;
		};

		console.log(highestValue([2, 3, 6, 7, 10, 1]));


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowestValue (array) {
		let initValue = array[0];
		let index = 0;
		for (let value = 0; value < array.length; value += 1) {
				if (array[value] < initValue) {
						initValue = array[value];
						index = value;
				};
		}
		return index;
};

console.log(lowestValue([2, 4, 6, 7, 10, 0, -3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function mostCharacters (array) {
		let count = '';
		for (let name = 0; name < array.length; name += 1) {
				if (array[name].length > count.length) {
						count = array[name];
				}
		}
		return count;
}

console.log(mostCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repeat (array) {
		let finalStorage = [];
		for (let layer1 = 0; layer1 < array.length; layer1 += 1) {
				storage = [];
				let compare = array[layer1];
						for (let layer2 = 0; layer2 < array.length; layer2 += 1) {
								if (compare === array[layer2]) {
										storage.push(array[layer2]);            
								 } 
								 if (storage.length > finalStorage.length) {
										finalStorage = storage;
								}
						}
		}
		return finalStorage[0];
};

console.log(repeat([2, 3, 2, 5, 8, 2, 3])); 

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function sumUpTo(n) {
	finalCount = 0;
	for (let i = 1; i <= n; i += 1) {
		finalCount = finalCount + i;
	}
	return finalCount;
};

console.log(sumUpTo(5)); 

// 7 - Crie uma função que receba uma string word e outra string ending.
//Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.


function checkEnding (word, ending) {
	let store = '';
	let compare = '';
		for (let i = word.length; i = ending.length; i -= 1){
		store += word[i];
		let splitWord = store.split("");
		let reversedWord = splitWord.reverse();
	  compare = reversedWord.join();
		}
		if (compare === ending) {
			return true;
		}
		return false;
}
console.log(checkEnding('trybe','be'), "função1"); 
console.log(checkEnding('joaofernando','fernan'), "função1"); 


function checkEnding(word, ending) {
	let store = ending.length; // 2
	let separate = word.split(""); // ['t','r','y','b','e']
	let reversedWord = separate.reverse(); // ['e','b','y','r','t']
	let hereWeGoAgain = reversedWord.join(""); // ebyrt
	let oneMoreTime = hereWeGoAgain.split("", store); // ['e','b']
	let puttingBack = oneMoreTime.reverse(); // ['b','e']
	let compare = puttingBack.join("");		// be
	
	if (compare === ending) {
	return true;
  }
  return false;
};

console.log(checkEnding('trybe','be'));
console.log(checkEnding('joaofernando','fernan'));