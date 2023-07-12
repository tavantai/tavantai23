let l = arr.length;//để cải thiện tốc độ vòng lặp
for (let i = 0; i < l; i++) {}

//Nếu bạn muốn truy cập một phần tử DOM nhiều lần, hãy truy cập nó một lần và sử dụng nó như một biến cục bộ:
const obj = document.getElementById("demo");
obj.innerHTML = "Hello";

//Không tạo biến mới nếu bạn không định lưu giá trị.    
let fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName;
document.getElementById("demo").innerHTML = firstName + " " + lastName;

//

