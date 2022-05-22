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
const display = document.getElementById("output-screen");

let currentOperator;
let currentValue = 0;
let previousValue = 0;

for (i of buttons) {
    let selectedButton;
    i.addEventListener('click', (e) => {

        const isOperator = e.target.classList.contains("calc-operator");

        if (display.textContent == "0" || display.textContent == previousValue) {
            display.textContent = "";
        }

        if (e.target.id == "calc-clear") {
            currentOperator = undefined;
            currentValue = 0;
            previousValue = 0;
            display.textContent = 0;
        }

        if (isOperator) {
            if (currentOperator == undefined) {
                currentOperator = e.target.value;
                previousValue = display.textContent;
                console.log(`prev: ${previousValue}`);
                display.textContent = previousValue;
            } else {
                currentValue = Number(display.textContent)
                console.log(`Prev: ${previousValue} - Curr: ${currentValue} - Oper: ${currentOperator}`);
                let summedValue = operate(Number(previousValue), Number(currentValue), currentOperator);
                console.log(summedValue);
                currentOperator = e.target.value;
                previousValue = summedValue;
                display.textContent = summedValue;
            }

        } else {
            display.textContent += e.target.value;
        }


    })
}