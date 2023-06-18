document.getElementById("demo").innerHTML="Hello World!";
 const element=document.getElementsByTagName("p");
 document.getElementById("demo").innerHTML = 
 'The text in first paragraph (index 0) is: ' + element[0].innerHTML;


 const x=document.getElementById("demo");
 const y=x.document.getElementsByTagName("p");


  document.getElementById("main").innerHTML=y[0].innerHTML


  const t=document.querySelectorAll("p.demo");
  document.getElementById("demo1").innerHTML=t[0].innerHTML;

  document.getElementById("demo1").src="https://static-images.vnncdn.net/files/publish/2022/9/3/bien-vo-cuc-thai-binh-346.jpeg"
   


  document.write(data());
  document.getElementById("demo2").innerHTML="date:"+date();

  function myFunction() {
    let x = document.getElementById("numb").value;
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }
  myFunction();
  document.getElementById("demo3").style.color = "blue";