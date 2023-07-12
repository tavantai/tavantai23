try{
  adddlert("Welcome guest!");
}
catch{
    document.getElementById("demo").innerHTML=err.message;
}


//
function myfunction(){
    const message =document.getElementById("p1");
    message.innerHTML="";
    let x= document.getElementById("demo").value;
    try{if(x.trim()=="")throw "empty";
    if(isNaN(x))throw"not a  number "
    if(x<5)throw "too low";
    if(x>10)throw "too high"

    }
    catch(err){
        message.innerHTML="Input is"+ err;

    }
}
//
let num = 1;
try {
  num.toPrecision(500);
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
//
let x = 5;
try {
  x = y + 1;
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
///
try {
    eval("alert('Hello)");
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.name;
  }
//
let nu = 1;
try {
  nu.toUpperCase();
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}
try {
    decodeURI("%%%");
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.name;
  }