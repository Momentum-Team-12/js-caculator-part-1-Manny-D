console.log ("Java Visuals Connected")

//from Thinkific - What can JS do with the DOM
// 1. Set variables
const clr = document.getElementById("clear");
// const output = document.getElementById("output");
// const seven = document.getElementById("seven");
// const eight = document.getElementById("eight");
// const nine = document.getElementById("nine");
const divi = document.getElementById("dOperator");
// const four = document.getElementById("four");
// const five = document.getElementById("five");
// const six = document.getElementById("six");
const mult = document.getElementById("mOperator");
// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const subtract = document.getElementById("sOperator");
// const zeroe = document.getElementById("div3");
// const decimal = document.getElementById("div4");
// const equals = document.getElementById("div5");
// const plus = document.getElementById("pOperator");


// 2. Set event listener - change clr background color
clr.addEventListener("mouseover", changeGreen);
clr.addEventListener("mouseout", resetStyle);

// 3. Event (? my explanation) - Change background color to green 
function changeGreen() {
clr.style.backgroundColor = "green";
}


// 2a. Set event listener - change divide text color change
divi.addEventListener("mouseover", changeWhite);
divi.addEventListener("mouseout", resetStyle);

// 3a. Event - Divide aka divi color change from black to white
function changeWhite() {
  divi.style.color = "white";
}



// 2b. Set event listener - testing for multiply text color change
mult.addEventListener("mouseover", changeWhite);
mult.addEventListener("mouseout", resetStyle);

// 3b. Event - Divide aka divi color change from black to white
//function changeWhite() {
//  mult.style.color = "white";
//}
// don't need this because changeWhite function defined above



// 4. Event (? my explanation)
// Reset background color and color
function resetStyle(e) {
  e.target.style.backgroundColor = "";
  e.target.style.color = "";
  }



// 2a. don't seem to need this.. redundant perhaps
// divide resetStyle(e) {
//   e.target.style.fontcolor = "";
//   e.target.style.color = "";
// }

//3b. Multiply aka mult color change from black to white
//function changeWhite() {
//  mult.style.color = "white";
//  }







//numbers won't change
//operators C and = will change to a lighter green
//other operators invert color - eg black to white


// event.target.innerText = "click" -> this is my comment: for later
// from codepen -> text in squares change to clicked (li 30)
//let squares = document.querySelectorAll('.square')
//   for (let square of squares){
//   square.addEventListener('click', function (event){
//     console.log(event)
//     console.log(event.target.innerText)
//     event.target.innerText = "Click'eth"
//       //event.target.remove()
//     })
//   } 