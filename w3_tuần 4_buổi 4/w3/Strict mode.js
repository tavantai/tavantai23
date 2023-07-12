x = 3.14;    
myFunction();
function myFunction() {
  "use strict";
  y = 3.14;  
}
//"use strict" là câu lệnh kiểm soát biến cần phải báo trước khi sử dụng;

"use strict";
function x(p1, p2) {}; 
delete x; 
// không được 
// let v = 010;
// let xv = "\010";
// chữ số bát phân và  ký tự bất phân không được phép
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;// không được phép  ghi vào thuộc tính chỉ đọc

const obj = {get x() {return 0} };

obj.x = 3.14;//không được phép  ghi vào  thuộc tính chỉ nhận;


//
arguments,eval// không được đạt tên biến  bằng tên này;
//  ở chế độ nghiêm ngặt evarl không thê khai báo biên var,let trong này





