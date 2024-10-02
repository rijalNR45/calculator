    let num1, operator, num2;
    const outputField = document.getElementById("input-field");
    const inputField = document.getElementById("output-field");
    const numButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operations");
    const equalsTo = document.getElementById("equal");
    const reset = document.getElementById("ac");
    const del = document.getElementById("delete");
    let inputCount = 0;

    numButtons.forEach((numButton) =>  {
        numButton.addEventListener("click", populateInputDisplay);
    });

    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener("click", populateOperationDisplay);
    });

    equalsTo.addEventListener('click', calculateResult);

    del.addEventListener('click', delLastInput);

    reset.addEventListener('click', resetEverything);
    
    function add(input1, input2) {
        return input1 + input2;
    }
    function subtract(input1, input2) {
        return (input1 - input2);
        
    }
    function multiply(input1, input2) {
        return (input1 * input2);
    }
    function divide(input1, input2) {
        
        return (input1 / input2);
    }
    function percent(input1) {
        return (input1 / 100);
    }

    function operate(input1, input2, operator) {
        switch(operator) {
            case '+':
                return add(input1, input2);
                break;
            case '-':
                return subtract(input1, input2);
                break;
            case 'x':
                return multiply(input1, input2);
                break;
            case '/':
                return divide(input1, input2);
                break;
            case '%':
                return percent(input1);
                break;
            default:
                return 'Please enter valid operator'
                break;
            }       
        }

    function isFloat(number) {
        if(typeof number === "number" && !isNaN(number)) {
            if(!Number.isInteger(number)) {
                return true;
             }
        } else return false;
        
    }
    function populateInputDisplay(event) {
        inputField.textContent += this.value;
        if(inputCount < 1) {
            num1 = Number(inputField.textContent);
        } else {
            num2 = Number(inputField.textContent);
        }
   
    }

    function populateOperationDisplay(event) {
        inputCount++;
        if(inputCount >1) {
            num1 = operate(num1, num2, operator);
            if(isFloat(num1)) {
                num1 = Number(num1.toFixed(3));
            }
            num2 = null;
        }
        operator = this.value;
        outputField.textContent = `${num1} ${this.value}`;
        inputField.textContent = "";
    }

    function calculateResult(event) {
        if(num2 != null) {
            outputField.textContent += `${num2} =`;
            num2 = null;
            inputCount = 0;
        }
        if(isFloat(num1)) {
            num1 = Number(num1.toFixed(3));
        }

        inputField.textContent = num1;
    }
    
    function resetEverything(event) {
        num1 = num2 = null;
        isFirstInput = true;
        inputCount = 0;
        inputField.textContent = "";
        outputField.textContent = "";
    }

    function delLastInput(event) {
        inputField.textContent = inputDisplay.textContent.slice(0, inputField.textContent.length -1);
        if(inputCount < 1) {
            num1 = Number(inputField.textContent);
        } else {
            num2 = Number(inputField.textContent);
        }
    }
   
    
   
        
       
       
       