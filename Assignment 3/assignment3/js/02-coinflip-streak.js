let coinFlip;

do {
    coinFlip = Math.round(Math.random());
    if(coinFlip == 0) {
        console.log(`%c Heads`, `color: green;`);
    } else {
        console.log(`%c Tails`, `color: red;`);
    }
} while(coinFlip == 0);