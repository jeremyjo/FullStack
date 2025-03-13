// Practice with Functions
//STEP 1
function halfNumber(numberParameter) {
    let halfLocalVariable = numberParameter/2;
    console.log(`Half of ${numberParameter} is ${halfLocalVariable}`);
    return halfLocalVariable;
}

halfNumber(10);

//STEP 2

function squareNumber(numberParameter) {
    let squareLocalVariable = numberParameter*numberParameter;
    console.log(`The result of squaring the number ${numberParameter} is ${squareLocalVariable}`);
    return squareLocalVariable;
}

squareNumber(3);

//STEP 3

function percentOf(numberParameter1, numberParameter2) {
    let percentLocalVariable = numberParameter2 / numberParameter1 * 100;
    console.log(`${numberParameter2} is ${percentLocalVariable}% of ${numberParameter1}`);
    return percentLocalVariable;
}

percentOf(4, 2);

//STEP 4

function findModulus(numberParameter1, numberParameter2) {
    let modulusLocalVariable = numberParameter1 % numberParameter2;
    console.log (`${modulusLocalVariable} is the modulus of ${numberParameter2} and ${numberParameter1}`);

    return modulusLocalVariable;
}

findModulus(10, 4);
//STEP 5
