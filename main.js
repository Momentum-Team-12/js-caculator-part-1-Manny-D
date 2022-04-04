console.log ("Java Main Connected?!")

// Create results and look for ID output
const outcome = document.getElementById("output")
// Print text outcomes div and what ID is found
console.log("The Output Display", outcome); 

// Create squares and look for all classes containing the
// name square
let squares = document.querySelectorAll('.square')
// Create another array square via the existing array squares
for (let square of squares){
// using the new square array, JS 'listen' for click and the 
//function event prints
    square.addEventListener("click", function (event) {
//print what’s in the new array once something is clicked
        console.log(square)
//print event(string/text) in the square that was clicked (innerText - JS)
        console.log(event.target.innerText)
})
}


let display = document.querySelector('#output')
let numbers = document.querySelectorAll(".square")
// let empt = document.querySelector('#clear')

for (let number of numbers) {
  number.addEventListener("click", (event) => {
    console.log(event.target)
    if (event.target.id === "clear") {
      console.log("Clear clicked")
      display.innerText = "0"
      console.log('did this empty')
    }
    display.innerText += number.innerText
    
  })
}