// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button  that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.


// Get a reference to the button element in the DOM
let convertButton = document.getElementById("converter");
let clearButton = document.getElementById("clear-text");
let toF = document.getElementById("fahrenheit");
let toC = document.getElementById("celsius");

convertButton.addEventListener("click", determineConverter);
clearButton.addEventListener("click", clearValue)

function printToDom (value) {
    document.getElementById("output").innerHTML = value;
}

function determineConverter () {
    let temperature = document.getElementById("number").value
    let convertedTemp = null;
    if (toF.checked) {
        convertedTemp = toFahrenheit(temperature);
    } else {
        convertedTemp = toCelsius(temperature);
    }
    printToDom(convertedTemp);
};

// if (toF.checked && determineConverter() > 90){
//     document.getElementById("output").innerHTML.style.color = "red";
// }

function clearValue() {
    document.getElementById("number").value = "";
    // clearButton = "";
    document.getElementById("output").innerHTML = "";
    toF.checked = false;
    toC.checked = false;
}

function toFahrenheit (temperature) {
    let fahrenheitValue = (temperature * 1.8) + 32;
    if (fahrenheitValue > 90) {
        output.style.color = "red";
    } else if (fahrenheitValue < 32) {
        output.style.color = "blue";
    } else output.style.color = "black";
    
    return fahrenheitValue;
}

function toCelsius (temperature) {
    let celsiusValue = (temperature - 32) * .5556;
    if (celsiusValue > 32) {
        output.style.color = "red";
    }   else if (celsiusValue < 0) {
        output.style.color = "blue";
    }   else output.style.color = "black";

    return celsiusValue;
}

// });

// clearButton.addEventListener("click", function(){
//     let numInput = document.getElementById("number").value;
//     numInput.value = "";
// })
