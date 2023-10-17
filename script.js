function calcularFactorial() {
  const $d = document;
  const numero = parseInt($d.getElementById("numero").value);
  let resultado= 1;

  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  //creo elemento para escribir factorial
  const textFac = $d.createElement("p");
  textFac.textContent = `Su factorial es: ${resultado}`

  //llamando a el contenedor donde se coloca el resultado
  const contenedor = document.getElementById("resultado");
  contenedor.appendChild(textFac);
}

