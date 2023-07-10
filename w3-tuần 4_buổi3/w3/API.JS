fetch(file)
        .then(x => x.text())
        .then(y => myDisplay(y));
        async function getText(file) {
        let x = await fetch(file);
        let y = await x.text();
        myDisplay(y);
        }
        async function getText(file) {
        let myObject = await fetch(file);
        let myText = await myObject.text();
        myDisplay(myText);
        }

//

const x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
//
function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }
  //
  const x2 = document.getElementById("demo");
            function getLocation() {
              if (navigator.geolocation) {
                navigator.geolocation.watchPosition(showPosition);
              } else {
                x2.innerHTML = "Geolocation is not supported by this browser.";
              }
            }
            function showPosition(position) {
              x2.innerHTML = "Latitude: " + position.coords.latitude +
              "<br>Longitude: " + position.coords.longitude;
            }
//
let backGo = () => {
    window.history.back();
}
let backGo2 = () => {
    window.history.go(-2);
}
//
const Y = document.getElementById("demo");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    Y.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
//
let getLocalStoget =(key) => {
    return localStorage.getItem(key);
  }
  let setLocalStoget = (key,value) => {
    localStorage.setItem(key,value);
  }

  //
  function myFunction() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "Input OK";
    } 
} 
//
let w;
        
function startWorker() {
if(typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
}
w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
};
}

function stopWorker() { 
w.terminate();
w = undefined;
}