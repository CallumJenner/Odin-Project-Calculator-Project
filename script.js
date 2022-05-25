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

let currentOperator = "C";
let currentValue = 0;
let previousValue = 0;
let decimalUsed = false;
let selectedButton;


for (i of buttons) {
    let selectedButton;
    i.addEventListener('click', (e) => {

        const isOperator = e.target.classList.contains("calc-operator");

        selectedButton = e.target.value;

        if (display.textContent == "0" || display.textContent == previousValue) {
            display.textContent = "";
        }

        console.log(`target is ${selectedButton}`);
        if (selectedButton == "calc-decimal") {
            console.log("calc dec")

            if (decimalUsed == true) {
                selectedButton = "";
            } else {
                selectedButton = ".";
            }

            decimalUsed = true;

        }

        if (isOperator) {
            if (currentOperator == "C") {
                currentOperator = selectedButton;
                previousValue = display.textContent;
                console.log(`prev: ${previousValue}`);
                display.textContent = previousValue;
            } else {
                currentValue = Number(display.textContent)
                console.log(`Prev: ${previousValue} - Curr: ${currentValue} - Oper: ${currentOperator}`);
                let summedValue = operate(Number(previousValue), Number(currentValue), currentOperator);
                console.log(summedValue);
                if (selectedButton == "calc-equals") {
                    currentOperator = "+";
                } else {
                    currentOperator = selectedButton;
                }
                previousValue = summedValue;
                display.textContent = summedValue;
            }

            decimalUsed = false;

        } else {
            display.textContent += selectedButton;
        }


        if (e.target.id == "calc-clear") {
            currentOperator = "C";
            currentValue = 0;
            previousValue = 0;
            display.textContent = 0;
        }

    })
}