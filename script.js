const numberOne = document.getElementById("one");
const numberTwo = document.getElementById("two");
const numberThree = document.getElementById("three");
const numberFour = document.getElementById("four");
const numberFive = document.getElementById("five");
const numberSix = document.getElementById("six");
const numberSeven = document.getElementById("seven");
const numberEight = document.getElementById("eight");
const numberNine = document.getElementById("nine");
const numberZero = document.getElementById("zero");
const addBtn = document.getElementById("plus");
const subtractBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

let firstInput = 0;
numberOne.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 1;
    displayingInput();
})
numberTwo.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 2;
    displayingInput();
})
numberThree.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 3;
    displayingInput();
})
numberFour.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 4;
    displayingInput();
})
numberFive.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 5;
    displayingInput();
})
numberSix.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 6;
    displayingInput();
})
numberSeven.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 7;
    displayingInput();
})
numberEight.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 8;
    displayingInput();
})
numberNine.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 9;
    displayingInput();
})
numberZero.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 0;
    displayingInput();
})
signAdd.addEventListener('click', () => {
    console.log("clicked")
    firstInput = "+";
    displayingInput();
})
signMultiply.addEventListener('click', () => {
    console.log("clicked")
    firstInput = "*";
    displayingInput();
})
numberOne.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 1;
    displayingInput();
})
numberOne.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 1;
    displayingInput();
})
numberOne.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 1;
    displayingInput();
})
numberOne.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 1;
    displayingInput();
})
numberOne.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 1;
    displayingInput();
})
numberOne.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 1;
    displayingInput();
})
numberOne.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 1;
    displayingInput();
})
numberOne.addEventListener('click', () => {
    console.log("clicked")
    firstInput = 1;
    displayingInput();
})
function displayingInput(){
    console.log("fast happening");
const display  = document.querySelector(".display-screen");
display.textContent = firstInput;
};
