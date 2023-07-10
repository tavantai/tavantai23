
//bài 1 het api
function loaddoc(){
    const html = new XMLHttpRequest();
   html.onload=function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById("demo").innerHTML = this.responseText;
    }
   }
   html.open("Get","https://jsonplaceholder.typicode.com/todos/")
   html.send(); 

}
loaddoc();


