// document.getElementById("page-title").innerText ="Enquanto Você Dormia.";
// document.getElementById("second-paragraph").innerText = "É o tipo de filme que todo mundo deveria assistir pelo menos uma vez ao ano."
// document.getElementById("subtitle").innerText ="Filme com Sandra Bullock"

// let paragraph = document.getElementsByClassName("para");
// for (let index =0; index < paragraph.length; index += 1) {
//     paragraph[0].style.backgroundColor = "yellow";
// }

// let subtitle = document.getElementsByTagName("h4")[0].style.color = "green";
  

document.querySelector("#page-title").innerText = "Enquanto Você Dormia."
document.querySelector('#second-paragraph').innerText = "É o tipo de filme que todo mundo deveria assistir pelo menos uma vez ao ano."
document.querySelector('#subtitle').innerText = "Filme com Sandra Bullock."
let paragraph = document.querySelectorAll('.para')[0].style.backgroundColor = "yellow";
//or
// for (index of paragraph) {
//     paragraph[0].style.backgroundColor = "yellow";
// }

let hfour = document.querySelectorAll('h4')[0].style.color = "green";

document.querySelector("#lorem-para").style.backgroundColor = "pink";
// o querySelector só retorna a primeira ocorrência que ele encontrar

// document.querySelectorAll("p").style.