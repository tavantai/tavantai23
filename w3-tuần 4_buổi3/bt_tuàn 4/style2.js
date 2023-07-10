function loaddoc1(){
    const html = new XMLHttpRequest();
   html.onload=function(){
    if(this.readyState == 4 && this.status == 200){
        const data=JSON.parse(this.responseText);
               document.getElementById("demo1").innerHTML = data.name;
    }

   }
   html.open("Get","https://api.github.com/users/bard")
   html.send(); 
}
loaddoc1();
