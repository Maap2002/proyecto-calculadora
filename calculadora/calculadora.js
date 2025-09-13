const buttons = document.querySelectorAll('.calc-button');
const display = document.getElementById('display');

let currentOperand = "";
let operator = null;
let firstOperand = null;

buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    const target = event.target;
    const value = target.innerText;

    if (target.id === 'borrar') {
      // limpiar todo
      currentOperand = "";
      operator = null;
      firstOperand = null;
      display.innerText = "0";

    } else if (target.id === 'suma-resta') {
      // cambia el signo
      display.innerText = -1 * parseFloat(display.innerText);

    } else if (target.id === 'porcentaje') {
      // convierte en porcentaje
      display.innerText = parseFloat(display.innerText) / 100;

    } else if (
      target.id === "division" ||
      target.id === "multiplicacion" ||
      target.id === "resta" ||
      target.id === "suma"
    ) {
      // guardar operador y primer operando
      operator = target.id;
      firstOperand = parseFloat(display.innerText);
      currentOperand = "";

    } else if (target.id === "igual") {
      // realizar la operación
      if (operator) {
        const secondOperand = parseFloat(display.innerText);

        if (operator === "suma") {
          firstOperand = firstOperand + secondOperand;
        } else if (operator === "resta") {
          firstOperand = firstOperand - secondOperand;
        } else if (operator === "multiplicacion") {
          firstOperand = firstOperand * secondOperand;
        } else if (operator === "division") {
          firstOperand = firstOperand / secondOperand;
        }

        operator = null;
        currentOperand = firstOperand.toString();
        display.innerText = currentOperand;
      }

    } else {
      // números y punto
      if (target.id === "punto" && currentOperand.includes(".")) return;

      currentOperand += value;
      display.innerText = currentOperand;
    }
  });
});