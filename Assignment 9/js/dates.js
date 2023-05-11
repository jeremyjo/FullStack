//STEP 1
// let userMonth = prompt('enter the month from 1 to 12')
// let userYear = prompt('enter the year')
// let date = new Date(userYear,userMonth,0)
// console.log(`There are ${date.getDate()} days in this month`)

//STEP 2

// let date = prompt('Enter a date (YYYY-MM-DD)')
// date = new Date(date)

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// let monthName = months[date.getMonth()]
// console.log(monthName)

//STEP 3

// let date = prompt('Enter a date (YYYY-MM-DD)')
// date = new Date(date)

// let dayName = date.getDay()
// if(dayName == 5 || dayName == 6){
//     console.log('This day is a weekend')
// } else {
//     console.log('This day is not a weekend')
// }

//STEP 4

// let date = new Date("2023-05-07")
// let dayOfWeek = date.getDay()

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// if(dayOfWeek > 0) {
//     console.log(`Yesterday was ${days[dayOfWeek-1]}`)
// } else {
//     dayOfWeek = 6
//     console.log(`Yesterday was ${days[dayOfWeek]}`)
// }

//STEP 5
// let date = new Date()
// let days = ["S", "M", "T", "W", "T", "F", "S"]
// console.log(`Today is: ${days[date.getDay()]}`)