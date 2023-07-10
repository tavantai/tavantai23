const txt = '{"name":"John", "age":30, "city":"New York"}'
const on = JSON.parse(txt);
document.getElementById("demo").innerHTML=on.name;

const text1 = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const on1=JSON.parse(text1)
document.getElementById("demo").innerHTML=on1[0];


const text2 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// muốn cho thời gian vào json thì phải cho dưới dạng chuỗi. 
const on2=JSON.parse(text2)
on2.birth=new Date(on2.birth)
document.getElementById("demo").innerHTML=on2.name


const text3 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const on3=JSON.parse(text3,function(key,value){
    if(key=="birth"){
        return new Date(value);
    }
    else{
        return value;
    }
});
document.getElementById("demo").innerHTML=on3.birth;



const text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
const on4=JSON.parse(text);
on4.age=eval("("+on4.age+")");//khi function thì phải dùng câu lệnh này dể bảo dấu ngoặc;
document.getElementById("demo").innerHTML=on4.name+on4.age();


// json stringify
const obj = {name: "John", age: 30, city: "New York"};
const myson=JSON.stringify(obj);
document.getElementById("demo").innerHTML=myson;


const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myJSON;


const myObj = { name: "John", age: 31, city: "New York" };
const my = JSON.stringify(myObj);
localStorage.setItem("testJSON", my);
localStorage.setItem("mylove",my)
let tt =localStorage.getItem("mylove");
let ttc=JSON.parse(tt);
document.getElementById("demo").innerHTML=ttc;

const ob = {name: "John", today: new Date(), city: "New York"}
const conob=JSON.stringify(ob);
document.getElementById("demo").innerHTML=conob;


//k  dươc thêm giá tin vào hàm funcion;
const oj = {name: "John", age: function () {return 30;}, city: "New York"};
const ojbb=JSON.stringify(oj)//{"name":"John","city":"New York"} xóa mất funcison

oj.age=oj.age.stringify();// nó xẽ khác phục dc tình trạng xóa mất functison khon obj


//loop
const myJSO = '{"name":"John", "age":30, "car":null}';
const myOb = JSON.parse(myJSON);
let tex = "";
for (const x in myObj) {
  tex += x + ", ";
}

let tcc = "";
for (const x in myObj) {
  tcc += myObj[x] + ", ";
}
document.getElementById("demo").innerHTML = tex;



// sever
const xmhtml= new XMLHttpRequest();
xmhtml.onload=function(){
    let vv=JSON.parse(this.responseText)
    document.getElementById("demo").innerHTML=vv.name// vv[0];
}
xmhtml.open("Get","json_demo.txt");
xmhtml.send();

const dbParam = JSON.stringify({table:"customers",limit:20});
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  let text = "<table border='1'>"
  for (let x in myObj) {
    text += "<tr><td>" + myObj[x].name + "</td></tr>";
  }
  text += "</table>"    
  document.getElementById("demo").innerHTML = text;
}
xmlhttp.open("POST", "json_demo_html_table.php");
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);




