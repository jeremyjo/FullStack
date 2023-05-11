//STEP 1

// function sortAlpha(stringParamater) {

//     stringParamater = stringParamater.split("")
//     stringParamater = stringParamater.sort()
//     return stringParamater.join("")
// }

// let userInput = prompt('enter a string')
// console.log(sortAlpha(userInput))

//STEP 2

// function capitalize (stringParamter) {
//     stringParamter = stringParamter.split(" ")
//     let i = 0
//     for (iter of stringParamter) {
//         stringParamter[i] = iter.charAt(0).toUpperCase() + iter.slice(1)
//         i++
//     }
//     return stringParamter.join(" ")
// }

// let userInput = prompt("enter a string")
// console.log(capitalize(userInput))

//STEP 3

// function countVowels(stringParamater) {
//     let count = 0
//     stringParamater = stringParamater.split("")
//     for (iter of stringParamater) {
//         if (iter === 'a' || iter === "e" || iter === "i" || iter === "o" || iter === "u") {
//             count++
//         }
//     }
//     return count
// }

// let userInput = prompt('enter a string')
// console.log(countVowels(userInput))

//STEP 4

// function generateId(lengthParameter) {
//     let randomId = []
//     randomId.length = lengthParameter
//     for (let i = 0; i < randomId.length; i++) {
//         let temp = Math.floor( Math.random()*26 )
//         if (Math.random() > 0.6667) {
//             temp += 65;
//         } else if (Math.random() <0.3334){
//             temp += 97
//         } else {
//             temp = Math.floor(Math.random()*10) + 48
//         }
//         randomId[i] = String.fromCharCode( temp )
//     }
//     return randomId.join("")
// }

// let userInput = parseInt(prompt("specify the length of the iD"))
// console.log(generateId(userInput))

//STEP 5
// function longestCountry(arrayParameter) {
//     let longestCountryIndex = 0
//     let longestCountryLength = 0
//     for (iter in arrayParameter) {
//         if (arrayParameter[iter].length > longestCountryLength) {
//             longestCountryIndex = iter
//             longestCountryLength = arrayParameter[iter].length
//         }
//     }
//     return arrayParameter[longestCountryIndex]
// }

// let userInput = prompt('enter a list of countries separated by a comma')
// userInput = userInput.split(",")
// console.log(longestCountry(userInput))