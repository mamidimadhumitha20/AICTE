// Get display element
let display = document.getElementById("display");

// Append value to display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// Square of a number
function square() {
    if (display.value !== "") {
        display.value = display.value * display.value;
    }
}
