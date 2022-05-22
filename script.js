function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2)
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
    }
}

const buttons = document.getElementsByClassName("calc-button");

let inputValue;
let currentTotal = 0;
let newValue;
let wasLastInputOperator = true;

for (i of buttons) {
    let selectedButton;
    i.addEventListener('click', (e) => {
        //console.log(e.target.value)

        const isOperator = e.target.classList.contains("calc-operator");
        const calcOutput = document.getElementById("output-screen");

        if (wasLastInputOperator) {
            calcOutput.textContent = "";
        }

        if (isOperator) {
            if (e.target.value == "calc-equals") {
                calcOutput.textContent = currentTotal
            } else {
                newValue = calcOutput.textContent;
                inputValue = null;
                //calcOutput.textContent = e.target.value;
                wasLastInputOperator = true;

                let currentVal = operate(Number(currentTotal), Number(newValue), e.target.value);

                currentTotal = Number(currentVal);
                calcOutput.textContent = currentTotal;
            }

        } else {
            inputValue = e.target.value;
            calcOutput.textContent += inputValue;
            wasLastInputOperator = false;
        }
    })
}