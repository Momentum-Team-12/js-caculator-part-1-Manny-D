console.log ("Java Connected?!")

//from Thinkific - What can JS do with the DOM
// 1. Set variables
const two = document.getElementById("div2");
// const output = document.getElementById("output");
// const seven = document.getElementById("seven");
// const eight = document.getElementById("eight");
// const nine = document.getElementById("nine");
// const divide = document.getElementById("divide");
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
two.addEventListener("mouseover", changeRed);
two.addEventListener("mouseout", resetStyle);

// 3. Event (? my expanation) 
// Change background color to red
function changeRed() {
    two.style.backgroundColor = "red";
  }
  
  // 3. Event (? my expanation)
  // Reset background color
  function resetStyle(e) {
    e.target.style.backgroundColor = "";
    e.target.style.color = "";
  }





//numbers won't change
//operators C and = will change to a lighter green
//other operators invert color - eg black to white