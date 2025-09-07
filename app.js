let titulo = document.querySelector('h1');
titulo.innerHTML = 'Calculadora';

function operacao(tipo) {
  let num1 = parseFloat(document.getElementById('numb1').value);
  let num2 = parseFloat(document.getElementById('numb2').value);
  let resultado;

  if (tipo === 'soma') {
    resultado = num1 + num2;
  } else if (tipo === 'subtracao') {
    resultado = num1 - num2;
  } else if (tipo === 'multiplicacao') {
    resultado = num1 * num2;
  } else if (tipo === 'divisao') {
    resultado = num1 / num2;
  }

  document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
}
