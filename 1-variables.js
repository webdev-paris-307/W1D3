/**
 * Welcome to JavaScript!
 */

/**
 * ? Primitive types:
 * numbers
 * string
 * boolean
 * null
 * undefined
 * out of the course :
 *  - BigInt
 *  - Symbol
 *
 * Non primitive type:
 * object
 * array
 * function
 *  */

/**
 * Constructors
 */

const myName = new String("Florian")
// Array()
// Object()
// Number()
// Boolean()
// String()

/**
 * Binary in a nutshell
 */

//  0 1 1 0
// 8  4  2  1

// F E D C B A 9 8 7 6 5 4 3 2 1 0

// What is a variable

// Assigning a value to a variable
let myVariable = "my value"
let anotherVariable

// const vs let
const age = 46

/**
 * This does not work
 */

//const name

// age = 47

// Reassigning a value

anotherVariable = "something"
anotherVariable = 42

// Assigning an other type

// Rules for naming variables

// snake_case
let my_variable

// PascalCase
let MyVariable

// camelCase (JS)
let myNewVariable

// let kebab-cases

let π = Math.PI

// typeof variables
const aNumber = 5
const aString = "JavaScript"
const aBoolean = true
const anObject = {}
const anArray = []
console.log(typeof aNumber)
console.log(typeof aString)
console.log(typeof aBoolean)
console.log(typeof anObject)
console.log(typeof anArray)

// JS file is read from top to bottom

console.log(doesNotWork)

const doesNotWork = null
