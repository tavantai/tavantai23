//function cungx co the hieu la mot biet thuc
const x = function (a, b) {return a * b};
document.getElementById("demo1").innerHTML = x(4, 3);

//es6
const t = (x, y) => x * y;
document.getElementById("demo2").innerHTML = t(5, 5);

//có thể viêt thieeus giá chị hàm nhưng nên viết đầy đủ 
function myFunction(x, y) {
    if (y === undefined) {
      y = 2;
    }  
    return x * y;
  }
  document.getElementById("demo3").innerHTML = myFunction(4);


  // có thể khai báo biến khi trong function
  function myFunction(x, y = 10) {
    return x + y;
  }
  document.getElementById("demo").innerHTML = myFunction(5);
  

  //coi một đối tượng  thanh một mảng(...)
  function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let c = sum(4, 9, 16, 25, 29, 100, 66, 77);
  
  document.getElementById("demo").innerHTML = c;

  // arguments hàm gọi ra số lượng 
  function sumAll() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  document.getElementById("demo").innerHTML = sumAll(1, 123, 500, 115, 44, 88)

  //window.
  function myFunction(a, b) {
    return a * b;
  }
  document.getElementById("demo").innerHTML = window.myFunction(10, 2); 
//The Global Object
  let p = myFunction();
function myFunction() {
  return this;
}
document.getElementById("demo").innerHTML = p; 

//Invoking a Function as a Method
const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  document.getElementById("demo").innerHTML = myObject.fullName(); 

  //All Functions are Methods

  const my = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  document.getElementById("demo").innerHTML = my.fullName();


  //The JavaScript call() Method
  const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  document.getElementById("demo").innerHTML = person.fullName.call(person1);


  //apply
  const perso = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const perso1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  document.getElementById("demo").innerHTML = perso.fullName.apply(perso1); 

  //math.max()ra số lớn nhất
  document.getElementById("demo").innerHTML = Math.max(1,2,4); 

  //
  const peron = {
    firstName:"John",
    lastName: "Doe",
    display: function() {
      let x = document.getElementById("demo");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }
  
  setTimeout(peron.display, 3000);

  //Global Variables ko khai báo biến thì nó được coi là một biến toàn cục

  myFunction();
document.getElementById("demo").innerHTML = a * a;

function myFunction() {
  a = 4;
}
//JavaScript Closures
const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter;}
  })();
  
  function myFunction(){
    document.getElementById("demo").innerHTML = add();
  }