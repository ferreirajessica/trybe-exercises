const button = document.getElementsByTagName('button')[0];
const showClick = document.getElementById('clicks');
let clickCount = 0;

button.onclick = () => {
    clickCount += 1;
    showClick.innerText = clickCount;
}