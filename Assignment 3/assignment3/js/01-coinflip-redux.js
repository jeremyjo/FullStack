let coinFlip;

let iterations = parseInt(prompt("How many times to execute the loop?"));

for(let i = 0; i < iterations; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0) {
        console.log(`%c Heads`, `color: blue;`);
    } else {
        console.log(`%c Tails`, `color: pink;`)
    }

}