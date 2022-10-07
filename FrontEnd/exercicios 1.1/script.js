// // callbacks-para-fixar-01.js

// const { callbackify } = require("util");

// const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

// const getUser = (callback) => {
//   const user = {
//     firstName: 'Ivan',
//     lastName: 'Ivanovich',
//     nationality: 'Russo',
//   };
//   return callback(user);
// };

// console.log(getUser(userFullName)); // Retorno esperado: "Olá! Meu nome é Ivan Ivanovich"
// console.log(getUser(userNationality)); // Retorno esperado: "Ivan é Russo"

// callbacks-para-fixar-02.js

const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russo',
    };

    // Dica: use esse `console.log()` abaixo para imprimir o resultado na tela.
    console.log(callback(user));
  }, delay());
};

getUser(userFullName); // deve imprimir "Olá! Meu nome é Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan é Russo" depois de um certo tempo