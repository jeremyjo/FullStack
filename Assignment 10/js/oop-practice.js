// STEP 1

// class Cat {
//     constructor (nameParameter) {
//         this.name = nameParameter
//     }
// }

// const Dog = class {
//     constructor(nameParameter) {
//         this.name = nameParameter
//     }
// }

// STEP 2

// const meow = new Cat("fluffy")
// console.log(meow)

// const bark = new Dog("spot")
// console.log(bark)

// STEP 3

// function Animal(nameParameter) {
//     this.name = nameParameter
// }
// Animal.prototype.displayMessage = function() {
//     console.log("The Animal has been created")
// }

// const rat = new Animal('Joey')
// console.log(rat)
// rat.displayMessage()

// STEP 4

// function Animal(messageParameter) {
//     Animal.prototype.displayMessage = function() {
//         console.log(messageParameter)
//     }
// }

// const rabbit = new Animal("bunny")
// rabbit.displayMessage()

// STEP 5

// function Animal (type, breed, color, height, length) {
//     this.type = type
//     this.breed = breed
//     this.color = color
//     this.height = height
//     this.length = length
// }

// let fido = new Animal("dog", "collie", "brown", "tall", "long")
// console.log(fido)

// STEP 6

// for (property in fido) {
//     console.log(property)
// }

// // STEP 7
// Animal.prototype.speak = function(){
//     if (this.type === "dog") {
//         retun `The ${this.color} dog is barking!`
//     } else if (this.type === 'cat') {
//         return `The ${this.color} cat is meowing!`
//     }
// }

// let sparky = new Animal("cat", "short hair", "tuxedo", "short", "small")
// fido.speak()
// sparky.speak()

// STEP 8

function Animal (type, breed, color, height, length) {
    let _type = type
    let _breed = breed
    let _color = color
    let _height = height
    let _length = length
    let checkType = function() {
        if (_type === 'dog') {
            return "dog"
        }
        if (_type === 'cat') {
            return "cat"
        }
    }
    this.speak = function () {
        console.log ( `The ${checkType()} has made a noise!` )
    }
}

let fido = new Animal("dog", "collie", "brown", "tall", "long")
fido.speak()
let sparky = new Animal("cat", "short hair", "tuxedo", "short", "small")
sparky.speak()

// STEP 9
String.prototype.findWords = function(word) {
    let count = 0;
    for (iter in this) {
        if (iter == word) {
            count++
        }
    }
    return count   
}

let test = "Create your own String method called findWords that inherits from the native String"
console.log(`Own occurs ${test.findWords("own")} times in this paragraph`)