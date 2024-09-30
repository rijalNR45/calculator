const inputField = document.getElementById("input-field");
const buttonSelect = document.querySelector(".btns");
const equalsTo = document.querySelector(".equals");
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
})

