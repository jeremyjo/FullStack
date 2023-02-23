// Larger or Smaller?

let firstNumber = parseInt(prompt("enter one integer"));
let secondNumber = parseInt(prompt("enter two integer"));

if(firstNumber>secondNumber) {
    document.write(`Larger number is ${firstNumber}`);
}
else if(secondNumber>firstNumber) {
    document.write(`Larger number is ${secondNumber}`);
}
else {
    document.write(`The numbers are equal`);
}