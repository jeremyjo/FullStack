//STEP 1

// let favMovies = ["The Matrix", "The Kingdom", "Kiss of the Dragon", "The Big Short", "Up"]
// console.log(`Step 1: ${favMovies[1]}`);

//STEP 2

// let movies = new Array(5);
// movies[0] = "The Matrix";
// movies[1] = "The Kingdom";
// movies[2] = "Kiss of the Dragon";
// movies[3] = "The Big Short";
// movies[4] = "Up";

// console.log(`Step 2: ${movies[0]}`);

//STEP 3

// let movies = new Array(5);
// movies[0] = "The Matrix";
// movies[1] = "The Kingdom";
// movies[2] = "Kiss of the Dragon";
// movies[3] = "The Big Short";
// movies[4] = "Up";

// for (let i = movies.length-1; i > 1; i--) {
//     movies[i+1] = movies[i];
// }

// movies[2] = "Fight Club";
// console.log(`Step 3: ${movies.length}`);

//STEP 4

// let movies = [];
// movies[0] = "The Matrix";
// movies[1] = "The Kingdom";
// movies[2] = "Kiss of the Dragon";
// movies[3] = "The Big Short";
// movies[4] = "Up";
// delete movies[0];
// console.log(movies);

//STEP 5

// let movies = [];
// movies[0] = "The Matrix";
// movies[1] = "The Kingdom";
// movies[2] = "Kiss of the Dragon";
// movies[3] = "The Big Short";
// movies[4] = "Up";
// movies[5] = "Fight Club";
// movies[6] = "Top Gun";

// console.log(`Step 5:`);
// for (indexCounter in movies) {
//     console.log(movies[indexCounter]);
// }

//STEP 6

// let movies = [];
// movies[0] = "The Matrix";
// movies[1] = "The Kingdom";
// movies[2] = "Kiss of the Dragon";
// movies[3] = "The Big Short";
// movies[4] = "Up";
// movies[5] = "Fight Club";
// movies[6] = "Top Gun";

// console.log(`Step 6:`);
// for (singleMovie of movies) {
//     console.log(singleMovie);
// }

//STEP 7

// let movies = [];
// movies[0] = "The Matrix";
// movies[1] = "The Kingdom";
// movies[2] = "Kiss of the Dragon";
// movies[3] = "The Big Short";
// movies[4] = "Up";
// movies[5] = "Fight Club";
// movies[6] = "Top Gun";

// console.log(`Step 7:`);
// for (singleMovie of movies.sort()) {
//     console.log(singleMovie);
// }

//STEP 8

// let movies = [];
// let leastFavMovies = ["Hairspray","Gigli", "Avengers"];
// console.log(`Step 8:`);
// movies[0] = "The Matrix";
// movies[1] = "The Kingdom";
// movies[2] = "Kiss of the Dragon";

// console.log(`Movies I like:


// `);
// for (indexCounter in movies) {
//     console.log(movies[indexCounter]);
// }


// console.log(`

// Movies I regret watching:

// `);

// for (let i = 0; i < 3; i++) {
//     console.log(leastFavMovies[i]);
// }
// console.log(`
// `);


//STEP 9

// let movies = [];
// let leastFavMovies = ["Hairspray","Gigli", "Avengers"];
// console.log(`Step 9:`);
// movies[0] = "The Matrix";
// movies[1] = "The Kingdom";
// movies[2] = "Kiss of the Dragon";

// movies = movies.concat(leastFavMovies).sort();

// for (indexCounter in movies) {
//     console.log(movies[indexCounter]);
// }

//STEP 10

// let movies = [];
// let leastFavMovies = ["Hairspray","Gigli", "Avengers"];
// console.log(`Step 10:`);
// movies[0] = "The Matrix";
// movies[1] = "The Kingdom";
// movies[2] = "Kiss of the Dragon";

// movies = movies.concat(leastFavMovies).sort();

// let lastMovie = movies.slice(-1);
// console.log(lastMovie);

//STEP 11

// let movies = [];
// let leastFavMovies = ["Hairspray","Gigli", "Avengers"];
// console.log(`Step 11:`);
// movies[0] = "The Matrix";
// movies[1] = "The Kingdom";
// movies[2] = "Kiss of the Dragon";

// movies = movies.concat(leastFavMovies).sort();

// let firstMovie = movies.slice(0,1);
// console.log(firstMovie);

//STEP 12

// let movies = [];
// let indexMoviesToReplace = [];
// let leastFavMovies = [ ["Hairspray",0],["Gigli",0], ["Avengers",0] ];
// let favMoviesToAdd = ["The Big Short", "Up", "Fight Club"];
// console.log(`Step 12:`);
// movies[0] = ["The Matrix",1];
// movies[1] = ["The Kingdom",1];
// movies[2] = ["Kiss of the Dragon",1];

// movies = movies.concat(leastFavMovies).sort();

// for(counter in movies) {
//     if(movies[counter][1] == 0) {
//         indexMoviesToReplace.push(counter);
//     }
// }

// for(counter in indexMoviesToReplace) {
//     movies[counter] = favMoviesToAdd[counter];
// }

// for (counter in movies) {
//     if(movies[counter][1]==1) {
//         movies[counter] = movies[counter][0];
//     }
// }
// console.log(movies);

//STEP 13

// let fiveFavoriteMovies = [
//     ["The Matrix",1],
//     ["The Kingdom",2],
//     ["Kiss of the Dragon",3],
//     ["The Big Short",4],
//     ["Up", 5]
// ];

// let movieName = fiveFavoriteMovies.flat().filter(
//     (iteration) => {
//         return typeof iteration[0] === 'string';
//     }
// );

// console.log("Step 13:")
// console.log(movieName);

//STEP 14

// let employees = ["Anne", "Steve", "Jim", "Mark", "Tim"];

// function showEmployee (employees) {
//     for (iter of employees) {
//         console.log(iter.toUpperCase());
//     }
// }

// showEmployee(employees);

//STEP 15

let testData = [58, '', 'abcd', true, null, false, 0];
function filtervalues(data) {
    let cleanData = data.filter(
        (item) => {
            return typeof item != 'false'
        }
    );
}

let test = filtervalues(testData);
console.log(test);

//STEP 16

//STEP 17