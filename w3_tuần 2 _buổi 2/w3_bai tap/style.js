function changeText(id) {
    id.innerHTML = "Ooops!";
  }

  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
// một cách khác để sử dụng sự kiên onclick
  document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// sự kiện onchange
function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }

  // sự kien hover trong js
  function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }

  //sự kiên cilck (nhưng xe quy chở lại khi bị thanh đổi)
  function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }
//add evern
  document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hello World!");
  });

  //reandum
  window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML = Math.random();
  });

  //thêm được chỉ số đầu vào của function
  let p1 = 5;
let p2 = 7;
document.getElementById("myBtn").addEventListener("click", function() {
  myFunction(p1, p2);
});

function myFunction(a, b) {
  document.getElementById("demo").innerHTML = a * b;
}