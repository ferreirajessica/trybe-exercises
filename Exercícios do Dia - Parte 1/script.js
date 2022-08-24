//Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
	personagem: 'Margarida',
	origem: 'Pato Donald',
	nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 
//Valor esperado no console: Bem-vinda, Margarida

function hello(name) {
	return 'Bem vinda, ' + name;
};

console.log(hello(info.personagem));

info.recorrente = "Sim";

console.log(info);

for (key in info) {
	console.log(key);
}

for (key in info) {
	console.log(info[key]);
};

let info2 = {
	personagem: 'Tio Patinhas',
	origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
	nota: 'O último MacPatinhas',
	recorrente: 'Sim'
};

console.log(info.personagem + ' e ' + info2.personagem );
console.log(info.origem + ' e ' + info2.origem );

if (info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
	console.log('Ambos recorrentes');
};


let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' ' + "se chama '" + leitor.livrosFavoritos[0].titulo + "'.");

leitor.livrosFavoritos[1] = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
};

console.log('Julia tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');