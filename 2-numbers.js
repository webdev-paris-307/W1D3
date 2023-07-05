/**
 * Let's talk about Math
 */

/**
 * Operators:
 * addition: +
 * substraction: -
 * multiply: *
 * division: /
 * powerof: **
 * modulo: %
 */

let result = 2 / 3

let remainder = 3 % 2

const amountOfMinutes = 132

const amountOfHours = Math.floor(amountOfMinutes / 60)
const amountOfRemainingMinutes = amountOfMinutes % 60
console.log(amountOfHours, amountOfRemainingMinutes)

// Order of operations

/**
 * 5+5
 * 10 * 2
 * console.log
 */

/**
 * Shorthand math
 */

let total = 0

total = total + 2
total = total + 3
total += 5
total *= 3
console.log(total)

// Math constructor

console.log(Math.PI)

// Getting a random number
console.log("======Random======")
// console.log(Math.random())
const randomFloat = Math.random()
console.log(randomFloat)
const randomLessThanTen = randomFloat * 10
console.log(randomLessThanTen)
const randomInteger = Math.floor(randomLessThanTen)
console.log(randomInteger)

const quickRandom = Math.floor(Math.random() * 20)

const myArray = ["Hungry", "Cat", "Sleep", "Nap"]

console.log(myArray[Math.floor(Math.random() * myArray.length)])

// Operations between numbers and Strings

console.log("2" + 2)
console.log("2" - 2)
const numberAsAString = "42aszf"

// const gettingANumber = numberAsAString * 1
const gettingANumber = Number(numberAsAString)
console.log(gettingANumber)
console.log(typeof gettingANumber)

// NaN
console.log(5 * "a")

console.log(0.1 + 0.2)

// Incrementing / Decrementing numbers

let myLastNumber = 0
myLastNumber += 1
myLastNumber++
myLastNumber--
