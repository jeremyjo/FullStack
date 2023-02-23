// The “Coin Flip” Game

let coinFlip = Math.round(Math.random()*10);
let choice = prompt("Choose Heads or Tails").toLowerCase();
let coinResult;

if (coinFlip<=5) {
    coinResult = "heads";
    if(choice === coinResult) {
        document.write("The flip was heads and you chose heads...you win!");
    } else {
        document.write("The flip was heads but you chose tails...you lose!");
    }
} else if (coinFlip > 6) {
    coinResult = "tails";
    if(choice === coinResult) {
        document.write("The flip was tails and you chose tails...you win!");
    } else {
        document.write("The flip was tails but you chose heads...you lose!");
    }
}



