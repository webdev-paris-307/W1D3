// The good old for-loop

// Anatomy of a for-loop
// for (variable initialisation ; condition ; increment / decrement) {}
for (let i = 0; i < 20; i++) {
	console.log(`i is now ${i}`)
}
/**
 * Infinite loop:
 * To cancel a process : Ctrl + C
 */

// for (let i = 0; ; i++) {
// 	console.log(`i is now ${i}`)
// }

// while loop

let myName = "a"
while (myName.length < 1) {
	myName += "Hi !"
}

console.log(myName)

const now = Date.now()

do {
	console.log("Time is running...")
} while (Date.now() - now < 1000)

console.log(Date.now(), new Date())
console.log(
	new Intl.DateTimeFormat(undefined, {
		dateStyle: "full",
		timeStyle: "short",
	}).format(new Date())
)

// for ... of loop
const myArray = ["Cat", "Potato", "Car"]

const myVariable = "Well hello there!"
for (let i = 0; i < myArray.length; i++) {
	console.log(myArray[i])
}

let newVariable = "*"
for (let i = 0; i < myVariable.length; i++) {
	// console.log(myVariable[i])
	console.log(newVariable)
	newVariable += myVariable[i] + "*"
}

for (let i = myVariable.length - 1; i >= 0; i--) {
	console.log(myVariable[i])
}

for (const element of myArray) {
	console.log(element)
}

// break and continue
let index = 0
while (index < 100) {
	if (index === 3) {
		// Go to the next iteration
		index++
		continue
	}
	if (index === 6) {
		// Stop the while loop
		break
	}
	console.log("i is now " + index)
	index++
}
