const inputField = document.getElementById("input-field");
const buttonSelect = document.querySelector(".btns");
const equalsTo = document.querySelector(".equals");
let firstClick = null;
    let secondClick = null;
    let thirdClick = null;
    let clickCount  = 0;
buttonSelect.addEventListener('click', (e) =>{
    // console.log(e.target.innerText);
    // console.log(e);

    var input = e.target.innerText;
    inputField.innerText += input;
        clickCount++;
        if(clickCount === 1){

            if(e.target.classList.contains("number") ){

            // firstClick = e.target.innerText;
            // console.log(firstClick);
            // } else {
                console.log("is a number");
            }
        } else if(clickCount ===2){
            secondClick = e.target.innerText;
            console.log(secondClick);

        }   else {
            thirdClick = e.target.innerText;
            console.log(thirdClick);

        }
})

