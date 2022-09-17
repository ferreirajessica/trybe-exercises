//     function checkValue(value1, value2) {
//         if (isNaN(`${value1}`) || isNaN(`${value2}`)) {
//         return 'error';
//         } else {
//             return 'cool';
//         }
//     }; 

//   console.log(checkValue('',2));

// console.log(isNaN('2'));

// function checkHoles(value1, value2) {
//     if (value1 === '' || value2 === '') {
//     return 'oh no';
//     } else {
//         return 'oh yeah'
//     }
//   }

//   console.log(checkHoles('','1'));

function change(string) {
    const result = string.replace(',','.');
    console.log(result);
    return isNaN(result);
}

console.log(change('1,2'));