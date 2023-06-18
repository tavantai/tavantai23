const menus=[
    {name:"GET-DATA",
    loat:["Occurrencences","GBIF API","Species","Datasets","Occurrencence snapshots","Hosted portals","trends"],
    },
    {name:"HOW-To",loat:
    ["Quick-start guide","Dataset classes","Data Hotsting","standards","become publisher","Data quality","Data papers"]
    },
    {name:"Tools",loat:
    ["IPT","Data validator","Scientific Collections","Suggest a dataset","New data model "]
    },
    {name:"Community",loat:
    ["IPT","Data validator","Scientific Collections","Suggest a dataset","New data model "],
    },
    {name:"About",loat:
    ["Quick-start guide","Dataset classes","Data Hotsting","standards","become publisher","Data quality","Data papers"],
    }
];



fn_loatData(menus);
function fn_loatData(data){
    let loat='';
     for(let i=0;i<data.length;i++){
        loat+=`<div class="col ">
        <div id="name${i}" class="col" onclick="click_drop(${i})">${data[i].name}
        <ul id="loat${i}"></ul></div>
                </div>`;
    }
    document.getElementById("menu").innerHTML=loat;
}

function click_drop(i){ 
    let loatData="";
    let loatElement = document.getElementById(`loat${i}`);  
    if (loatElement.style.display === "block") {
        loatElement.style.display = "none";
    } else {
        loatElement.style.display = "block";
    for(let j=0;j<menus[i].loat.length;j++){
        loatData+=`<li>${menus[i].loat[j]}</li>` 
    }
    document.getElementById(`loat${i}`).innerHTML=loatData;
 }
}

