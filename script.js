// not working properly :(
const inputField = document.getElementById("input-field");
const buttonSelect = document.querySelector(".btns");
const equalsTo = document.querySelector(".equals");
takeInputs();

function takeInputs(){
    let firstInput = [0];
    let operation = null;
    let secondInput = [0];
    const inputField = document.getElementById("input-field");
    var forDisplay = [0];
    
buttonSelect.addEventListener('click', (e) =>{
    inputField.innerText = forDisplay;
    var updateInp;

   //to reload the page when AC button is clicked
    if(e.target.id === 'ac') {
        location.reload();
    }
    
    if(e.target.className == "btn number"){
        let inputsfor1 = e.target.innerText;
        firstInput.push(inputsfor1);
        updateInputField(firstInput);
        // inputField.innerText += inputsfor1;
        console.log("first input is:" + firstInput);    
       } 
    else if(e.target.classList.contains("operations")) {
        operation = e.target.innerText;
        updateInp = operation;
        console.log(operation);
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
        // document.getElementById("equal").addEventListener('click', () =>{
            var converted = convertIntoNumericValues(firstInput, secondInput);
            var obtainedResult = operations(converted.numericInp1, converted.numericInp2, operation);
            console.log("obtained Result is:" + obtainedResult);
            function operations(input1, input2, operator){
                let result;
    
                switch(operator){
                    case '+':
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
                            result = 'lmao';
                        } else {
                            result = input1 / input2;
                        }
                        break;
                    default:
                        result = 'Error: invalid operator';
                }
                console.log(result);
    
                return result;
            }
   forDisplay.push(updateInp);

    
    }})
    };
    
    


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
        var concatenatedValue = concat(newValue);
        inputField.innerText += (concatenatedValue);
    }

    
   
   
   


