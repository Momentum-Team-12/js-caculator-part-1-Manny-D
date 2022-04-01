console.log ("Java Connected?!")

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
// const multiply = document.getElementById("multiply");
// const one = document.getElementById("one");
// const two = document.getElementById("two");
// const three = document.getElementById("three");
// const subtract = document.getElementById("subtract");
// const zeroe = document.getElementById("div3");
// const decimal = document.getElementById("div4");
// const equals = document.getElementById("div5");
// const plus = document.getElementById("plus");


// 2. Set event listener
clr.addEventListener("mouseover", changeGreen);
clr.addEventListener("mouseout", resetStyle);

// 2a. testing for divide text color change
divi.addEventListener("mouseover", changeWhite);
divi.addEventListener("mouseout", resetStyle);


// 3. Event (? my explanation) 
// Change background color to green
function changeGreen() {
    clr.style.backgroundColor = "green";
  }

  // 3. Event (? my explanation)
  // Reset background color
  function resetStyle(e) {
    e.target.style.backgroundColor = "";
    e.target.style.color = "";
  }

//3a. Divide aka divi color change from black to white
function changeWhite() {
divi.style.color = "white";
}

// 3a. don't seem to need this.. redundant perhaps
// divide resetStyle(e) {
//   e.target.style.fontcolor = "";
//   e.target.style.color = "";



//numbers won't change
//operators C and = will change to a lighter green
//other operators invert color - eg black to white