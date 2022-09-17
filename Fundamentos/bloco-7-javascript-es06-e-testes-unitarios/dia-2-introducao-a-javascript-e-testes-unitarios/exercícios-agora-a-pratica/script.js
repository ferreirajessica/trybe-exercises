function checkValue(value1, value2) {
  if (isNaN(`${value1}`) || isNaN(`${value2}`)) {
    throw new Error('Os valores devem ser numéricos');
  }   
};

function checkHoles(value1, value2) {
  if (value1.length < 1 || value2.length < 1) {
    throw new Error('É preciso preencher os dois campos.');
  } 
}

function printValue(value1, value2) {	
  const result = Number(value1) + Number(value2);
  document.getElementById('result').innerHTML = `Resultado: ${result}`;  
}

function erase() {
	document.getElementById('value1').value = '';
	document.getElementById('value2').value = '';
}

function sum() {   
  const value1 = (document.getElementById('value1').value).replace(',','.');
  const value2 = (document.getElementById('value2').value).replace(',','.');
  try {
	  checkHoles(value1, value2);
    checkValue(value1, value2);	
    printValue(value1, value2);       
  } catch (error) {
      return document.getElementById('result').innerHTML = error.message;
  } finally {
		 erase();
	}

   
  }
  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }