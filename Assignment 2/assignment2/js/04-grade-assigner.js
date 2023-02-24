let userChoice = parseInt(prompt("Enter a number between 1 and 100"));
if(userChoice < 1 || userChoice > 100) {
    document.write("Only numbers between 1 and 100 are accepted");
} else if (userChoice > 59 && userChoice < 70) {
    console.log("You received a D");
} else if (userChoice > 69 && userChoice < 80) {
    console.log("You received a C");
} else if (userChoice > 79 && userChoice < 90) {
    console.log("You received a B");
} else if (userChoice > 89 && userChoice < 101) {
    console.log("You received an A");
} else {
    console.log("You received an F");
}