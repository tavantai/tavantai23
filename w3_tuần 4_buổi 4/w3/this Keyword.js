const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  document.getElementById("demo").innerHTML = person.fullName();


  ///

  let x = this;
  document.getElementById("demo").innerHTML = x;
  // khi this đứng một mình thì this là window==[object Window] ở chế độ nghiêm ngặt cũng vậy
  document.getElementById("demo").innerHTML = myFunction();

function myFunction() {
  return this;
}

//  this  đề cập trong sự kiến this chỉ đến mục chứa nó 
//<button onclick="this.style.display='none'">Click to Remove Me!</button>

const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

let t = person1.fullName.call(person2); 
document.getElementById("demo").innerHTML =t; 

//
const perso = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = perso.fullName.bind(member);
  
  document.getElementById("demo").innerHTML = fullName();





