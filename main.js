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

// event.target.innerText = "click" -> this is my comment: for later