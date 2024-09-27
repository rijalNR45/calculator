const display = document.querySelector(".display-screen");
display.textContent = 0;
var firstInput = [0];
const numberOne = document.getElementById("one");
numberOne.addEventListener('click', () =>{
    firstInput = [1];
    display.textContent = 1;
})
const addBtn = document.getElementById("plus")
addBtn.addEventListener('click',() => {
    firstInput.reduce((acc,curr), () => {
        return acc + curr;
    },0)
} )
