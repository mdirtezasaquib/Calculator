
function saveName() {
    
    let nameInput = document.getElementById("username"); 
    let name = nameInput.value; 

        if(name.trim() !== ""){
        localStorage.setItem("userName", name); 
        window.location.href = "calculator.html"; 
        }
        else{
            let p = document.querySelector("p");
            p.style.border = "1px solid red";
        }
}

function showName() {
    let userName = localStorage.getItem("userName"); 
    let changeName = document.getElementById("user-name"); 

    changeName.innerText = `Welcome, ${userName} , Sir !`; 
}

document.addEventListener("DOMContentLoaded", showName);



// ------------------------------- calculator code --------------------------------

let displayValue = ""; 

function addToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function calculate() {
    let numbers = displayValue.split(/([\+\-\*\/\%])/); 
    let result = parseFloat(numbers[0]);

    for (let i = 1; i < numbers.length; i += 2) {
        let operator = numbers[i]; 
        let nextNumber = parseFloat(numbers[i + 1]); 

        if (operator === "+") {
            result = result + nextNumber;
        } 
        else if (operator === "-") {
            result = result - nextNumber;
        } 
        else if (operator === "*") {
            result = result * nextNumber;
        } 
        else if (operator === "/") {
            if (nextNumber !== 0) { 
                result = result / nextNumber;
            } else {
                result = "Error"; 
                break;
            }
        }
        else if (operator === "%") {
            result = result % nextNumber;
        }
    }
    displayValue = result; 
    document.getElementById("display").value = displayValue; 
}
