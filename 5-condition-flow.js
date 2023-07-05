// Simple if condition
const itIsRaining = false
const itIsWednesday = true

if (itIsWednesday) {
	console.log("It is half of the week !")
}

/**
 * if (condition) {
 * The logic that we want to apply
 * }
 */

// if-else block
if (itIsRaining) {
	console.log("The rain is upon us!")
} else {
	console.log("It is not raining...")
}

/**
 * Revering conditions with a bang !
 */
if (!itIsRaining) {
	console.log("It is not raining...")
}
console.log("The rain is upon us!")

// if, else if ..., else block
if (itIsRaining) {
	console.log("Rain")
} else if (itIsWednesday) {
	console.log("Wednesday")
} else {
	console.log("Neither")
}

// switch
const dayOfTheWeek = "Wednesday"

switch (dayOfTheWeek) {
	case "Monday":
		console.log("Did you had a good weekend?")
		break
	case "Tuesday":
		console.log("Tuesday day")
		break
	case "Wednesday":
		console.log("It is the middle of the week")
		break
	default:
		console.log("Half the week is gone already")
}

// Ternary operator

const biggerThanDotFive = Math.random() > 0.5 ? "Yup" : "Nay"
console.log(biggerThanDotFive)
// condition ? true : false

let result
if (Math.random() > 0.5) {
	result = "Yup"
} else {
	result = "Nay"
}
