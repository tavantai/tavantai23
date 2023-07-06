//JavaScript Callbacks

function mymyDisplayer(some){
    document.getElementById("demo").innerHTML=some;
}

function  myFirst(){
    mymyDisplayer("hello");
}

function mySecond(){
    mymyDisplayer("goodbye");
}

mySecond();
mySecond();

//
function mylove(demo){
    document.getElementById("demo").innerHTML=demo;
}

function myloveinto(a,b){
    let sum =a+b;
    return sum;
}
let sim =myloveinto(5,3);
mylove(sim);

//

function myloveinto1(a,b){
     let int = a+b;
      mylove(int);
}

let a =myloveinto1(5,6);

//
function mylove2(a,b,mycallback){
   let sum =a+b;
   mycallback(sum);
}

let b=mylove2(5,6,mylove);

//

const myNumbers = [4, 1, -20, -7, 5, 9, -6];
 let innovar= inno(myNumbers,(x)=>x>0);
 function  inno(a,b){
    let int =[];
    for(const x of a){
        if(b(x)){
            int.pushx()
        }
    }
    return int;
 }
document.getElementById("demo").innerHTML=innovar
