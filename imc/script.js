let peso;
let altura;
let imc;
let resultado;

function calcular(event) {
  event.preventDefault();

  peso = parseFloat(document.getElementById("textPeso").value);
  altura = parseFloat(document.getElementById("textAltura").value);

  imc = peso / (altura * altura);

  resultado = document.getElementById("textResultado");

  if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
    resultado.innerHTML =
      "Por favor, digite valores válidos para peso e altura.";
  } else {
    imc = peso / (altura * altura);

    if (imc < 17) {
      resultado.innerHTML = `IMC: ${imc.toFixed(2)} - Muito abaixo do peso`;
    } else if (imc >= 17 && imc <= 18.49) {
      resultado.innerHTML = `IMC: ${imc.toFixed(2)} - Abaixo do peso`;
    } else if (imc >= 18.5 && imc <= 24.99) {
      resultado.innerHTML = `IMC: ${imc.toFixed(2)} - Peso normal`;
    } else if (imc >= 25 && imc <= 29.99) {
      resultado.innerHTML = `IMC: ${imc.toFixed(2)} - Acima do peso`;
    } else if (imc >= 30 && imc <= 34.99) {
      resultado.innerHTML = `IMC: ${imc.toFixed(2)} - Obesidade I`;
    } else if (imc >= 35 && imc <= 39.99) {
      resultado.innerHTML = `IMC: ${imc.toFixed(2)} - Obesidade II (severa)`;
    } else {
      resultado.innerHTML = `IMC: ${imc.toFixed(2)} - Obesidade III (mórbida)`;
    }
  }

  var resultModal = new bootstrap.Modal(document.getElementById("resultModal"));
  resultModal.show();

  document.getElementById("textPeso").value = "";
  document.getElementById("textAltura").value = "";
}
