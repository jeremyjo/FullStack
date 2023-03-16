// IMPORT THE MODULE
import * as calc from './modules/calculator.js'
// import 

// COLLECT FIRST NUMBER FROM USER

let userFirstNumber = parseInt(prompt("Enter the first number"));

// COLLECT SECOND NUMBER FROM USER

let userSecondNumber = parseInt(prompt("Enter the second number"));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

let userOperationInput = prompt("Enter the operation");

// CHECK TO SEE WHAT OPERATION THEY'RE USING

let userOperationString = cacalculate(userOperationInput);

// CALL THE APPROPRIATE FUNCTION

userOperationString(userFirstNumber, userSecondNumber);

// switch (userOperationInput) {
//     case "+":
//         calc.add(userFirstNumber, userSecondNumber);
//         break;
//     case "-":
//         calc.subtract(userFirstNumber, userSecondNumber);
//         break;
//     case "*":
//         calc.multiply(userFirstNumber, userSecondNumber);
//         break;
//     case "/":
//         calc.divide(userFirstNumber, userSecondNumber);
//         break;
// }
