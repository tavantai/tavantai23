myFunction();
function myFunction() {
  let carName = "Volvo";
  document.getElementById("demo1").innerHTML = typeof carName + " " + carName;
}

document.getElementById("demo2").innerHTML = typeof carName;// biến cục bộ không được sử dụng đc bên ngoài


//

let carName = "Volvo";
function myFunction() {
  document.getElementById("demo").innerHTML = "I can display " + carName;
}//một biến khai báo bên ngoài được sử dụng như là một biến toàn cục

//
document.getElementById("demo").innerHTML = "I can display " + carName;
function myFunction() {
  carName = "Volvo";
}// khi không khai báo biến thì nó được coi là một biến toàn cục

//

var car = "Volvo";
document.getElementById("demo").innerHTML = "I can display " + window.carName;
//var thuộc biến toàn cục thuộc về window con let cũng được coi là biến toàn cục nhưng nó không thuộc về window

//
