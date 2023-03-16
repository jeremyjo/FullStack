// ADD A PRIVATE FUNCTION CALLED CALCULATE

function calculate (parameterString) {
    switch (parameterString) {
        case "+":
            return "add"
            break;
        case "-":
            return "subtract"
            break;
        case "*":
            return "multiply"
            break;
        case "/":
            return "divide"
            break;
    }
}

// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
function add(parameterNumber1, parameterNumber2) {
    console.log("add");
    alert(parameterNumber1 + parameterNumber2);
}
// SUBTRACT FUNCTION

function subtract (parameterNumber1, parameterNumber2) {
    alert(parameterNumber1 - parameterNumber2);
}

// MULTIPLY FUNCTION

function multiply (parameterNumber1, parameterNumber2) {
    alert(parameterNumber1 * parameterNumber2);
}

// DIVIDE FUNCTION

function divide (parameterNumber1, parameterNumber2) {
    alert(parameterNumber1 / parameterNumber2);
}

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {add, subtract, multiply, divide, calculate}