<<<<<<< HEAD
// not working properly :(
const inputField = document.getElementById("input-field");
const buttonSelect = document.querySelector(".btns");
const equalsTo = document.querySelector(".equals");
takeInputs();

function takeInputs(){
    let firstInput = [];
    let operation = null;
    let secondInput = [];
    const inputField = document.getElementById("input-field");
    var forDisplay = '';
    var operationCount = 0;
    
buttonSelect.addEventListener('click', (e) =>{
    if((e.target.classList.contains("number"))  || (e.target.classList.contains("operations"))) {
    forDisplay += (e.target.innerText);     //updating the input field display with the input of user
    inputField.innerText = forDisplay;
    }

    
   //to reload the page when AC button is clicked
    if(e.target.id === 'ac') {
        location.reload();
    }
    
    if(e.target.className == "btn number"){
        let inputsfor1 = e.target.innerText;
        firstInput.push(inputsfor1);
        console.log("first input is:" + firstInput);    
       } 
    else if(e.target.classList.contains("operations")) {
        operation = e.target.innerText;
        console.log(operation);
        operationCount = 1;
        // inputField.innerText += inputsfor1;

        document.querySelectorAll(".btn.number").forEach(element => {
            element.classList.add("secondInp");
        });
        
       }
    else if(e.target.classList.contains("secondInp")){
        let inputsfor2 = e.target.innerText;
        updateInp = inputsfor2;
        secondInput.push(inputsfor2);
        // inputField.innerText = inputsfor1 + inputsfor2;

        console.log("second input is:" + secondInput);
    }
    

    else if(e.target.classList.contains("equals-to")){
            var converted = convertIntoNumericValues(firstInput, secondInput);
            var obtainedResult = operations(converted.numericInp1, converted.numericInp2, operation);
            console.log("obtained Result is:" + obtainedResult);
            function operations(input1, input2, operator){
                let result;
    
                switch(operator){
                    case '+':
                        if(input2.length === 0  ) {
                            result = 'fuck you';
                        }  else
                        result = input1 + input2;
                        break;
                    case '-':
                        result = input1 -input2;
                        break;
                    case '*':
                        result = input1 * input2;
                        break;
                    case '/':
                        if(input2 === 0) {
                            result = 'cannot divide by zero';
                        } else {
                            result = input1 / input2;
                        }
                        break;
                    default:
                        result = 'Error: invalid operator';
                }
                console.log(result);
                document.getElementById("output-field").innerText = result;
                return result;
            }


    
    }})
}
    
    
    


    function convertIntoNumericValues(a, b){
   
    let concatenatedInp1 = a.join('');
    var numericInp1 = Number(concatenatedInp1);
    console.log(numericInp1);

    let concatenatedInp2 = b.join('');
    var numericInp2 = Number(concatenatedInp2);
    console.log(numericInp2);

    return{numericInp1, numericInp2};

    
    };
    function updateInputField(newValue) {

        // Append the new value to the existing innerText
        // if(inputField.innerText === 0){
        //     inputField.innerText = '';
        // } else {
        // var concatenatedValue = newValue.join('');
        inputField.innerText += (concatenatedValue);
        //}
    }

    
   
   
   


=======
    let num1, operator, num2;
    const outputField = document.querySelector(".input-display");
    const inputField = document.querySelector(".operation-display");
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
            num1 = operate(num1, num2, operator);
            // populateOperationDisplay.textContent += `${num2} =`;
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
        inputField.textContent = inputField.textContent.slice(0, inputField.textContent.length -1);
        if(inputCount < 1) {
            num1 = Number(inputField.textContent);
        } else {
            num2 = Number(inputField.textContent);
        }
    }
   
    
   
        
       
       
       
>>>>>>> spagetti-calc
