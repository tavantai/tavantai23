
//bài 1 het api
function loaddoc(){
    const html = new XMLHttpRequest();
   html.onload=function(){
    if(this.readyState == 4 && this.status == 200){
        let a =JSON.parse(html.responseText);
        console.log(a);      
    }
   }
   html.open("Get","https://api.chucknorris.io/jokes/random")
   html.send(); 

}
loaddoc();


