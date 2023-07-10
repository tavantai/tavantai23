function showHint(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtHint").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "gethint.php?q="+str);
    xhttp.send();
}

///
const xhttp = new XMLHttpRequest();
let cd;
xhttp.onload = function() {
    const xmlDoc = xhttp.responseXML;
    cd = xmlDoc.getElementsByTagName("CD");
    loadCD();
}
xhttp.open("GET", "cd_catalog.xml");
xhttp.send();

function loadCD() {
    let table="<tr><th>Artist</th><th>Title</th></tr>";
    for (let i = 0; i < cd.length; i++) {
        table += "<tr onclick='displayCD(" + i + ")'><td>";
        table += cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
        table += "</td><td>";
        table += cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
        table += "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

function displayCD(i) {
    document.getElementById("showCD").innerHTML =
        "Artist: " +
        cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
        "<br>Title: " +
        cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
        "<br>Year: " +
        cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}
///
function showCustomer(str) {
    if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    document.getElementById("txtHint").innerHTML = this.responseText;
    }
    xhttp.open("GET", "getcustomer.php?q="+str);
    xhttp.send();
}
///
function showHint(str) {
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    }
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("txtHint").innerHTML =
            this.responseText;
    }
    xhttp.open("GET", "gethint.php?q="+str);
    xhttp.send();
}
///
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML =
              this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
  }

  /**
   * The responseXML Property (Thuộc tính responseXML)
   * Đối tượng XMLHttpRequest có một trình phân tích cú pháp XML dựng sẵn.
   * Thuộc tính responseXML trả về phản hồi của máy chủ dưới dạng một đối tượng XML DOM.
   * Sử dụng thuộc tính này, bạn có thể phân tích cú pháp phản hồi dưới dạng đối tượng XML DOM:*/
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    const xmlDoc = this.responseXML;
    const x = xmlDoc.getElementsByTagName("ARTIST");
    let txt = "";
    for (let i = 0; i < x.length; i++) {
      txt = txt + x[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("demo1").innerHTML = txt;
  }
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();




  //The getAllResponseHeaders() Method -> Phương thức getAllResponseHeaders() trả về tất cả thông tin tiêu đề từ phản hồi của máy chủ.
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
            this.getAllResponseHeaders();
  }
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();

  //The getResponseHeader() Method -> Phương thức getResponseHeader() trả về thông tin tiêu đề cụ thể từ phản hồi của máy chủ.
  const xhttp=new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML =
            this.getResponseHeader("Last-Modified");
  }
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
  //
  function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      myFunction(this);
    }
    xhttp.open("GET", "cd_catalog.xml");
    xhttp.send();
  }
  function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("CD");
    let table="<tr><th>Artist</th><th>Title</th></tr>";
    for (let i = 0; i <x.length; i++) {
      table += "<tr><td>" +
              x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
              "</td><td>" +
              x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
              "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }

  //
  let loadDoc= () => {
    const http= new XMLHttpRequest();
    http.onreadystatechange = () => {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector("#demo").innerHTML = this.responseText;
        }
    }
    http.open("GET","text.txt");
    http.send();
}

