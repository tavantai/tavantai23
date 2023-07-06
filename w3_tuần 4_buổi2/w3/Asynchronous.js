setTimeout(mylove,3000)

function mylove(){
    document.getElementById("demo").innerHTML="I Love You!!";
}
//
setTimeout(function (){mylove1("love my ")},3000);


function mylove1(value){
    document.getElementById("demo").innerHTML=value;
}

//
setTimeout(mylove2,3000)
function mylove2(){
    let d= new Date();
    document.getElementById("demo").innerHTML= d.getHours() + ":" +
    d.getMinutes() + ":" +
    d.getSeconds();
}