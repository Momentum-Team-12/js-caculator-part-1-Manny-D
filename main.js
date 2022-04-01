console.log ("Java 2 Connected?!")

// Create results and look for ID output
const outcome = document.getElementById("output")
// Print text outcomes div and what ID is found
console.log("The Outc Div", outcome); 

// Create squares and look for all classes containing the
// name square
let squares = document.querySelectorAll('.square')
// Create another array square via the existing array squares
for (let square of squares){
// using that new array, JS for listen for click and the function 
// event ? -> unsure about this.. but it already exists in JS ?
    square.addEventListener("click", function (event) {
// //print what’s in the new array once something is clicked
        console.log(square)
//print event? Target (defines where?) innerText (JS module?)
        console.log(event.target.innerText)
})
}

// event.target.innerText = "click" -> this is my comment: for later