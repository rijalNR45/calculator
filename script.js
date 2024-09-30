const inputField = document.getElementById("input-field");
const buttonSelect = document.querySelector(".btns");
const equalsTo = document.querySelector(".equals");
takeInputs();

function takeInputs(){
let firstInput = [0];
    let operation = null;
    let secondInput = [0];
    var numericInp1 = 0;
    var numericInp2 = 0;
buttonSelect.addEventListener('click', (e) =>{
   
    if(e.target.className == "btn number"){
        let inputsfor1 = e.target.innerText;
        firstInput.push(inputsfor1);
        console.log("first input is:" + firstInput);    
       } 
       else if(e.target.classList.contains("operations")) {
        operation = e.target.innerText;
        console.log(operation);
        document.querySelectorAll(".btn.number").forEach(element => {
            element.classList.add("secondInp");
        });
        
       }
        else if(e.target.classList.contains("secondInp")){
        let inputsfor2 = e.target.innerText;
        secondInput.push(inputsfor2);
        console.log("second input is:" + secondInput);
    }
})
    document.getElementById("equal").addEventListener('click', () =>{
        convertIntoNumericValues(firstInput, secondInput);
        operations(numericInp1, numericInp2, operation);
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

})
};
    function convertIntoNumericValues(a, b){
   
    let concatenatedInp1 = a.join('');
    numericInp1 = Number(concatenatedInp1);
    console.log(numericInp1);

    let concatenatedInp2 = b.join('');
    numericInp2 = Number(concatenatedInp2);
    console.log(numericInp2);

    
    };

    
   
   
    // var input = e.target.innerText;
    // inputField.innerText += input;
    //     clickCount++;
    //     if(clickCount === 1){
    //         firstClick = e.target.innerText; 
    //         inputField.innerText = firstClick;
            
    //          } 
            
    //     else if(clickCount ===2){

    //         if(e.target.classList.contains("number")){
    //             firstClick += e.target.innerText;
    //         } else {
    //             secondClick = e.target.innerText;
    //         }
            
    //         console.log(secondClick);

    //     }   else {
    //         thirdClick = e.target.innerText;
    //         console.log(thirdClick);

    //     }


