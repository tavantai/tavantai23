function loaddoc1(){
    const html = new XMLHttpRequest();
   html.onload=function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById("demo1").innerHTML = this.responseText;
        const data=JSON.parse(this.responseText);
        return data.name;
    }
   }
   html.open("Get","https://raw.githubusercontent.com/openai/gym/master/README.md")
   html.send(); 
}
loaddoc1();
