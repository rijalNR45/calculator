const inputField = document.getElementById("input-field");
const buttonSelect = document.querySelector(".btns");
const equalsTo = document.querySelector(".equals");
let firstInput = 0;
    let secondClick = null;
    let thirdClick = null;
    let clickCount  = 0;
buttonSelect.addEventListener('click', (e) =>{
    // console.log(e.target.innerText);
    // console.log(e);
   
    if(e.target.classList.contains("number")){
        firstInput += e.target.innerText;
        console.log(firstInput);    
       } 
       else if(e.target.classList.contains("operations")) {
        secondInput = e.target.innerText;
        console.log(secondInput);
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

