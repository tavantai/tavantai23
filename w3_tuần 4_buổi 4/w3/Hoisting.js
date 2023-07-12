x = 5; 
elem = document.getElementById("demo");
elem.innerHTML = x;          

var x;//có thể sử dụng trước biến trước khi khai báo;

//
var x = 5; 
var y = 7;
elem = document.getElementById("demo");
elem.innerHTML = x + " " + y; 

//
var x = 5; 
var y;   
elem = document.getElementById("demo"); 
elem.innerHTML = x + " " + y;      
y = 7;// khi khái báo y nhưng không khởi tạo giá trị nó đã được sử dụng

// kết luận : khái báo biến lên trên đầu trước khi sử dụng;
