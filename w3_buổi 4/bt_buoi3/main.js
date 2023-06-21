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

const img=["data:image/jpeg;base64,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",];

document.getElementById("back_gr").style.backgroundImage=fn_loatbgr();

function fn_loatbgr(){
    let tinhtoan="";
    tinhtoan= Math.floor(Math.random() * 4) + 1
    for(let i=0;i<img.length;i++){
        if(tinhtoan==i){
          "url('img[i]')"
        }
    }
}


fn_loatData(menus);
function fn_loatData(data){
    let loat='';
     for(let i=0;i<data.length;i++){
        loat+=`<div class="col ">
        <div id="name${i}" class="col" onclick="click_drop(${i})">${data[i].name}
        <ul id="loat${i}" class ='aa'></ul></div>
                </div>`;
    }
    document.getElementById("menu").innerHTML=loat;
    console.log();
    
}

function click_drop(i){ 
    
    let loatElement = document.querySelectorAll('.aa');
    // if (loatElement[i].style.display === "block") {
    //     loatElement[i].style.display = "none";
    loatElement.forEach(item => {
        item.style.display = 'none'
    }) 
    let loatData="";
    
    for(let j=0;j<menus[i].loat.length;j++){
        loatData+=`<li>${menus[i].loat[j]}</li>` 
    }
    
    let active = document.getElementById(`loat${i}`);
    active.style.display='block'

    // } else {
    //     loatElement.style.display = "block";
    document.getElementById(`loat${i}`).innerHTML=loatData;
 
}

