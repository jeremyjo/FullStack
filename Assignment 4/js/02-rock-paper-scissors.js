let userInput = fnGetUserChoice();
let computerInput = fnGetComputerChoice();

document.write('user input: ' + userInput + '<br>');
document.write('computer input: ' + computerInput + '<br>');

fnCheckWinner(userInput, computerInput);

function fnGetUserChoice() {
    let properUserChoice = 0;
    do {
        let userInputLocalVar = prompt(`please choose rock, paper or scissors`);
        userInputLocalVar = userInputLocalVar.toLowerCase();
        if (userInputLocalVar == "rock" || userInputLocalVar == "scissors" || userInputLocalVar == "paper") {
            properUserChoice = 1;
            return userInputLocalVar;
        } else {
            alert("incorrect input")
        }
    }
    while (!properUserChoice);
}

function fnGetComputerChoice() {
    let computerChoiceLocalVar = Math.round(Math.random()*100);

    if (computerChoiceLocalVar < 33 ) {
        return "rock";
    } else if (computerChoiceLocalVar < 67) {
        return "scissors";
    } else {
        return "paper";
    }
}

function fnCheckWinner (parameterUser, parameterComputer) {
    if (parameterUser == parameterComputer) {
        alert ("Tie");
    } else if (parameterUser == "rock") {
        if (parameterComputer == "scissors") {
            alert ("User wins!");
        } else {
            alert ("Computer wins"); 
        }
    } else if (parameterUser == "scissors") {
        if (parameterComputer == "rock") {
            alert ("Computer wins"); 
        } else {
            alert ("User wins!");
        }
    } else {
        if (parameterComputer == "rock") {
            alert ("User wins!");
        } else {
            alert ("Computer wins");
         }
    }
}