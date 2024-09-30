const inputField = document.getElementById("input-field");
const buttonSelect = document.querySelector(".btns");
const equalsTo = document.querySelector(".equals");
operate();
function operate(){
let firstInput = [0];
    let operation = null;
    let secondInput = [0];
buttonSelect.addEventListener('click', (e) =>{
   
    if(e.target.className === "btn number"){
        let inputs = e.target.innerText;
        firstInput.push(inputs);
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
        let input2 = e.target.innerText;
        secondInput.push(input2);
        console.log("second input is:" + secondInput);
    }
    performAdd();
})

    function performAdd(){
    let concatenatedInp1 = firstInput.join('');
    let numericInp1 = Number(concatenatedInp1);
    console.log(numericInp1);

    let concatenatedInp2 = firstInput.join('');
    let numericInp2 = Number(concatenatedInp2);
    console.log(numericInp2);
    }
    addition(numericInp1, numericInp2);
}

    function addition(){
    if(operation === '+'){
        let sum = (a, b) => {
            return a + b;
        };
        console.log(sum);
    }
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


