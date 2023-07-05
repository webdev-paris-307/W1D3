console.log("Hello world")

const button = document.getElementById("btn")
const container = document.querySelector(".container")
button.addEventListener("click", () => {
	// const div = document.createElement('div')

	const square = `<div class="square">
  ${Math.floor(Math.random() * 10)}
  </div>`

	container.innerHTML += square
})
