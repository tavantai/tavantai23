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

//Returning Boolean Values from Functions
function isLess(a, b) {
       return a <= b;
  }
  isLess(10, 15);

//Return Early Pattern for Functions
function abTest(a, b) {  
  if (a < 0 || b < 0) {
      return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);
//Counting Cards
let count = 0;

function cc(card) {
  // Only change code below this line
 switch (card){
 case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  
}
}

cc(2); 
cc(3); cc(7); cc('K'); cc('A')