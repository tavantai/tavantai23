class FullYear {
  constructor(ngay,thang,nam) {
    this.a = new Date();
    this.n=ngay;
    this.t=thang;
    this.m=nam;
  
  }
  fn_Hours() {
    let b="";
    if (this.a.getHours() - 12 > 0) {
        b = this.a.getHours() - 12 + " giờ:"+this.a.getMinutes()+ "phút chiều";
    } else {
        b =this.a.getHours()+ " giờ:"+this.a.getMinutes() + "phút sáng";
    }
    document.write("hiện tại là:" +  b);
  }
  fn_day() {
   document.write("hôm nay là Thứ:"+Number(this.a.getDay()+1));
  }
  fn_Date(){
    document.write("hôm nay là Mùng :"+this.a.getDate())
  }
  fn_Month(){
    document.write("Tháng này là Tháng:"+Number(this.a.getMonth()+1))
  }
  fn_FullYear(){  
    document.write("Năm này là năm :"+this.a.getFullYear());
  }
 fn_full(){
  let b;
  if(this.a.getHours() - 12 > 0){
   b=this.a.getHours() - 12 + " giờ: "+this.a.getMinutes()+ " phút chiều  "+"-"+
   " Thứ: "+ Number(this.a.getDay()+1)+" Ngày: "+this.a.getDate()+" Tháng:"+
   Number(this.a.getMonth()+1)+" Năm: "+this.a.getFullYear();
  }
  else{
    b=this.a.getHours()  + " giờ:"+this.a.getMinutes()+ " phút sáng  "+"-"+
   " Thứ:"+Number(this.a.getDay()+1)+" Ngày:"+this.a.getDate()+" Tháng:"+
   Number(this.a.getMonth()+1)+" Năm: "+this.a.getFullYear();

  }
  document.write(b)
 }

 fn_congngay(){
  this.a.setDate(this.a.getDate() + this.n);
 this.fn_full();
 }
 fn_trungay(){
  this.a.setDate(this.a.getDate() - this.n);
 this.fn_full();
 }
 fn_congthang(){
  this.a.setMonth(this.a.getMonth() + this.t);
  this.fn_full();
 }
 fn_truthang(){
  this.a.setMonth(this.a.getMonth() - this.t);
  this.fn_full();
 }
 fn_congnam(){
  this.a.setFullYear(this.a.getFullYear() + this.m);
  this.fn_full();
 }
 fn_trunam(){
  this.a.setFullYear(this.a.getFullYear() - this.m);
  this.fn_full();
 }

}
const Hours=new FullYear(50,8,2010);

Hours.fn_congnam();




