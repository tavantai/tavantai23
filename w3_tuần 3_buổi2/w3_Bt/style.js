//JavaScript Objects are Mutable
const person = {
    firstName: "John",
    lastName: "Doe",
    age:50,
    eyeColor: "blue",
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
        }
  };
  
  const x = person;
  x.age = 10;
  
  document.getElementById("demo").innerHTML =
  person.firstName + " is " + person.age + " years old.";
  

  //lay ra vi tri bang cach khac

  document.getElementById("demo").innerHTML=person["firstName"]+person["age"];

  //loop
  let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}
document.getElementById("demo").innerHTML=txt;

//deleta
delete person.age;// xoas đi phần tử và chả về giá chị undefined;


//gọ phần tử trong một oj trong oj

document.getElementById("demo").innerHTML=person.cars.car2;

// có thể gán giá trị biến cho một phần tử bên trong oj

let p1 = "cars";
let p2 = "car2";
document.getElementById("demo").innerHTML=person[p1][p2];

//
let x = "";
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
    x += "<h2>" + myObj.cars[i].name + "</h2>";
    for (let j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j] + "<br>";
    }
  }
   document.getElementById("demo").innerHTML=x;

   /// Create an object
   const per = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  document.getElementById("demo").innerHTML=per.fullName();

//json
const perso = {
    name: "John",
    age: function () {return 30;}
  };
  
  document.getElementById("demo").innerHTML = JSON.stringify(person);

  /// nếu muốn json chuyển đổi funtion thánh string thì phải
  const erson = {
    name: "John",
    age: function () {return "30";}
  };
  person.age = person.age();//chuyern funtion thành chuỗi
  
  document.getElementById("demo").innerHTML = JSON.stringify(erson);//{"name":"John","age":"function () {return 30;}"}

  //arayy.JSON
  const arr = ["John", "Peter", "Sally", "Jane"];
document.getElementById("demo").innerHTML = JSON.stringify(arr);


//

const pe = {
    firstName: "John",
    lastName: "Doe",
    language: "NO",
    set lang(value) {
      this.language = value;
    }
  };
  
  // Set a property using set:
  person.lang = "en";
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = pe.language;


  //

  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang.toUpperCase();
    }
  };
  
  // Set a property using set:
  person.lang = "en";
  
  // Display data from the object:
  document.getElementById("demo").innerHTML = person.language;


  //    
  function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const myFather = new Person("John", "Doe", 50, "blue");
  
  // Display age
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + "."; 


  //hàm mạc định để sử dụng
  function on(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person object
  const Father = new on("John", "Doe", 50, "blue");
  
  // Display age
  document.getElementById("demo").innerHTML =
  "My father is " + Father.age + "."; 

  // có thể thêm thuộc tính vào  father 
  Father.nationality = "English";
  document.getElementById("demo").innerHTML =
"My father is " + myFather.nationality; 
  

//có thể thểm function vào hàm;
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function() {
      return this.firstName + " " + this.lastName
    };
  }
  
  // Create a Person object
  const myFathe = new Person("John", "Doe", 50, "blue");
  
  // Display full name
  document.getElementById("demo").innerHTML =
  "My father is " + myFathe.name();

  //thêm vào biến khởi tạo 

  function Peson(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.prototype.nationality = "English";
  
  const myFther = new Peson("John", "Doe", 50, "blue");
  document.getElementById("demo").innerHTML =
  "The nationality of my father is " + myFther.nationality; //The nationality of my father is English

  // lopp of
  const names = "W3Schools";

let text = ""
for (const x of names) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;


// hàm set 
const lette = new Set(["a","b","c"]);

// Display set.size
document.getElementById("demo").innerHTML = lette.size;

/// add thểm vào hàm set
letters.add(a);
letters.add(b);
letters.add(c)// nếu cùng giá trih thì nó chỉ tính là 1

//hàm forech
const lettet = new Set(["a","b","c"]);

// List all Elements
let tex = "";
lettet.forEach (function(value) {
  text += value + "<br>";
})

document.getElementById("demo").innerHTML = tex;

//lầy hàm từ set

const leters = new Set(["a","b","c"]);

// List all Elements
let tx = "";
for (const x of leters.values()) {
  tx += x + "<br>";
}

document.getElementById("demo").innerHTML = tx;

// hàm entry được sử dụng để chả về giá trị aa,bb
const letters = new Set(["a","b","c"]);
const iterator = letters.entries();
let uk = "";
for (const entry of iterator) {
  uk += entry + "<br>";
}

document.getElementById("demo").innerHTML =ukt;

//hàm map();
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  document.getElementById("demo").innerHTML = fruits.get("apples");

  // thêm phần tử vào mảng map băng hàm set();
  fruits.set("bananas", 300);
  fruits.set("oranges", 200);

  //hàm size() chỉ về số lượng
  document.getElementById("demo").innerHTML = fruits.size;//3

  //hàm Delete
  fruits.delete("apples");

  //hàm sóa toàn bộ hàm map //clear()
  fruits.clear();
  // hàm has() chả về giá trị true hoặc f
  fruits.has("apples")
  

  /// chạy hàm for map();
  const ts = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let u = "";
  ts.forEach (function(value, key) {
    u += key + ' = ' + value + "<br>"
  })
  
  document.getElementById("demo").innerHTML = u;

  //   apples,500   bananas,300  ranges,200 
  for (const x of fruits.entries())//fruits.values() thì lấy ra giá trị 5000,300,2000//  fruits.keys() thì lấy rai giá trị apples,bananas,ranges
   {
    text += x + "<br>";
    document.getElementById("demo").innerHTML = text;
  }

  //kiemr tra một oj có giá trị và chả về
  const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN" 
  };

  Object.defineProperty(person, "language", {value:"yes"})//person: là mảng ||language là giá trị so sánh(index)||{value:"yes"} : giá trị chả về nếu  đúng chaef về giá tị ko đung ko chả về gì cả
  document.getElementById("demo").innerHTML = person.language;
  //add thêm vào mảng person
  Object.defineProperty(person, "year", {value:"2008"})
document.getElementById("demo").innerHTML = person.year;

///
