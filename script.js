    let input1, operator, input2;
    const inputField = document.getElementById("input-field");
    const outputField = document.getElementById("output-field");
    const numButtons = document.querySelectorAll(".number");
    const equalsTo = document.querySelector(".equals");
    const reset = document.getElementById("ac");
    const del = document.getElementById("delete");
    let inputCount = 0;

    numButtons.forEach(numButton) =>  {
        numButton.addEventListener("click", populateInputDisplay);
    }


    function add(num1, num2) {
        return (num1 + num2);
    }
    function subtract(num1, num2) {
        return (num1 - num2);
        
    }
    function multiply(num1, num2) {
        return (num1 * num2);
    }
    function divide(num1, num2) {
        if(num2 === 0) {
        result = 'cannot divide by zero!'            
        } else
        result = (num1 / num2);
        return result;
    }
    function percent(num1) {
        result = (num1 / 100);
        return result;
    }

    function operate(input1, operator, input2) {
        switch(operator) {
            case '+':
                result = add(input1, input2);
                break;
            case '-':
                result = subtract(input1, input2);
                break;
            case '*':
                result = multiply(input1, input2);
                break;
            case '/':
                result = divide(input1, input2);
                break;
            default:
                result = 'Please enter valid operator'
            }       
        
    }
    function populateInputDisplay(theTriggeredButton) {
        (outputField.innerText) += theTriggeredButton;
        
   
    }
    function takeInputs() {
        let firstInput = [];
        let operation = null;
        let secondInput = [];
        buttonSelect.addEventListener('click', (e) => {
            if(e.target.id === 'ac') {
                location.reload();
            }

            firstTriggeredInput = e.target.innerText;
            console.log(firstTriggeredInput);
            populateDisplay(firstTriggeredInput);
            

        })

    }
    
    
    takeInputs();
    
    // function takeInputs(){
    //     let firstInput = [0];
    //     let operation = null;
    //     let secondInput = [0];
    //     const inputField = document.getElementById("input-field");
    //     var forDisplay = [0];
        
    // buttonSelect.addEventListener('click', (e) =>{
    //     inputField.innerText = forDisplay;
    //     var updateInp;
    
    //    //to reload the page when AC button is clicked
    //     if(e.target.id === 'ac') {
    //         location.reload();
    //     }        
    //     if(e.target.className == "btn number"){
    //         let inputsfor1 = e.target.innerText;
    //         firstInput.push(inputsfor1);
    //         updateInputField(firstInput);
    //         console.log("first input is:" + firstInput);    
    //        } 
    //     else if(e.target.classList.contains("operations")) {
    //         operation = e.target.innerText;
    //         updateInp = operation;
    //         console.log(operation);
    
    //         document.querySelectorAll(".btn.number").forEach(element => {
    //             element.classList.add("secondInp");
    //         });
            
    //        }
    //     else if(e.target.classList.contains("secondInp")){
    //         let inputsfor2 = e.target.innerText;
    //         updateInp = inputsfor2;
    //         secondInput.push(inputsfor2);
    
    //         console.log("second input is:" + secondInput);
    //     }
        
    
    //     else if(e.target.classList.contains("equals-to")){
    //             var converted = convertIntoNumericValues(firstInput, secondInput);
    //             var obtainedResult = operations(converted.numericInp1, converted.numericInp2, operation);
    //             console.log("obtained Result is:" + obtainedResult);
    //             function operations(input1, input2, operator){
    //                 let result;
        
    //                 switch(operator){
    //                     case '+':
    //                         result = input1 + input2;
    //                         break;
    //                     case '-':
    //                         result = input1 -input2;
    //                         break;
    //                     case '*':
    //                         result = input1 * input2;
    //                         break;
    //                     case '/':
    //                         if(input2 === 0) {
    //                             result = 'lmao';
    //                         } else {
    //                             result = input1 / input2;
    //                         }
    //                         break;
    //                     default:
    //                         result = 'Error: invalid operator';
    //                 }
    //                 console.log(result);
        
    //                 return result;
    //             }
    //    forDisplay.push(updateInp);
    
        
    //     }})
    //     };
        
        
    
    
    //     function convertIntoNumericValues(a, b){
       
    //     let concatenatedInp1 = a.join('');
    //     var numericInp1 = Number(concatenatedInp1);
    //     console.log(numericInp1);
    
    //     let concatenatedInp2 = b.join('');
    //     var numericInp2 = Number(concatenatedInp2);
    //     console.log(numericInp2);
    
    //     return{numericInp1, numericInp2};
    
        
    //     };
    //     function updateInputField(newValue) {
    
    //         // Append the new value to the existing innerText
    //         var concatenatedValue = concat(newValue);
    //         inputField.innerText += (concatenatedValue);
    //     }
    
        
       
       
       