//Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
  }
  
  reusableFunction();
 
  //Passing Values to Functions with Arguments
  function functionWithArgs(one, two) {
    console.log(one + two);
  }functionWithArgs(7, 3);

  //Return a Value from a Function with Return.
  function timesFive(num) {
    return num * 5;
  }
  //Global Scope and Functions.
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}
function fun2() {
 let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Local Scope and Functions
function myLocalScope() {
    var myVar
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  console.log('outside myLocalScope', myVar);
  var outerWear = "T-Shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

myOutfit();


//Understanding Undefined Value returned from a Function

let sum = 0;

function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum += 5;
}
addThree();
addFive();

//Assignment with a Returned Value
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7); 

//Stand in Line
function nextInLine(arr, item) {
      arr.push(item);
    const removed = arr.shift();
    return removed;
    return item;
  }
  let testArr = [1, 2, 3, 4, 5];
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  //Understanding Boolean Values
  function welcomeToBooleans() {
    return true; 
  }

  //Use Conditional Logic with If Statements

function trueOrFalse(wasThatTrue) {
   
  
    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
  
   
  }