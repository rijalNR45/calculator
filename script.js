const inputField = document.getElementById("input-field");
const buttonSelect = document.querySelector(".btns");
buttonSelect.addEventListener('click', (e) =>{
    console.log(e.target.innerText);
    var input = e.target.innerText;

    inputField.innerText += input;

})

