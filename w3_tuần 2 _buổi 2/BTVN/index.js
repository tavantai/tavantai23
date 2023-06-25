const menus = [
  {
    name: "Get data",
    childrent: [
      {
        option: [
          "Occurrences",
          "GBIF API",
          "Data hosting",
          "Standards",
          "Become a publisher",
          "Data quality",
          "Data papers",
        ],
      },
    ],
  },
  {
    name: "How_To",
    childrent: [
      {
        title: "Share data",
        option: [
          "Quick-start guide",
          "Dataset classes",
          "Data hosting",
          "Standards",
          "Become a publisher",
          "Data quality",
          "Data papers",
        ],
      },
      {
        title: "Use data",
        option: [
          "Featured data use",
          "Citation guidelines",
          "GBIF citations",
          "Citation widget",
        ],
      },
    ],
  },
  {
    name: "Tools",
    childrent: [
      {
        title: "Publishing",
        option: [
          "IPT",
          "Dataset classes",
          "Data hosting",
          "Standards",
          "Become a publisher",
          "Data quality",
          "Data papers",
        ],
      },
      {
        title: "Data access and use",
        option: [
          "Hosted portals",
          "Citation guidelines",
          "GBIF citations",
          "Citation widget",
        ],
      },
      {
        title: "GBIF labs",
        option: [
          "Species matching",
          "Citation guidelines",
          "GBIF citations",
          "Citation widget",
        ],
      },
    ],
  },
  {
    name: "Community",
    childrent: [
      {
        title: "Network",
        option: [
          "Participant network",
          "Nodes",
          "Data hosting",
          "Standards",
          "Become a publisher",
          "Data quality",
          "Data papers",
        ],
      },
      {
        title: "Volunteers",
        option: [
          "Mentors",
          "Citation guidelines",
          "GBIF citations",
          "Citation widget",
        ],
      },
      {
        title: "Activities",
        option: [
          "Capacity enhancement",
          "Citation guidelines",
          "GBIF citations",
          "Citation widget",
        ],
      },
    ],
  },
  {
    name: "About",
    childrent: [
      {
        title: "Inside GBIF",
        option: [
          "What is GBIF?",
          "Dataset classes",
          "Data hosting",
          "Standards",
          "Become a publisher",
          "Data quality",
          "Data papers",
        ],
      },
      {
        title: "News & outreach",
        option: [
          "News",
          "Citation guidelines",
          "GBIF citations",
          "Citation widget",
        ],
      },
    ],
  },
];
const header = document.querySelector(".header");
header.innerHTML = `
<div class="content">
    <div class="card text-bg-dark">
       <img src="https://api.gbif.org/v1/image/unsafe/1500x750/http:%2F%2Fimages.ctfassets.net%2Fuo17ejk9rkwj%2FDwhektwBvXdBaayDUUm2D%2F2b362f6116c7781c2355ed61a4a0499c%2Fvaticano.jpg" class="card-img" alt="..."> 
        <div class="card-img-overlay">
            <nav id="NavBar">
                <svg viewBox="90 239.1 539.7 523.9"class="img" xmlns="http://www.w3.org/2000/svg">
            <path class="gbif-logo-svg" d="M325.5,495.4c0-89.7,43.8-167.4,174.2-167.4C499.6,417.9,440.5,495.4,325.5,495.4"fill="white"></path>
            <path class="gbif-logo-svg" d="M534.3,731c24.4,0,43.2-3.5,62.4-10.5c0-71-42.4-121.8-117.2-158.4c-57.2-28.7-127.7-43.6-192.1-43.6
c28.2-84.6,7.6-189.7-19.7-247.4c-30.3,60.4-49.2,164-20.1,248.3c-57.1,4.2-102.4,29.1-121.6,61.9c-1.4,2.5-4.4,7.8-2.6,8.8
c1.4,0.7,3.6-1.5,4.9-2.7c20.6-19.1,47.9-28.4,74.2-28.4c60.7,0,103.4,50.3,133.7,80.5C401.3,704.3,464.8,731.2,534.3,731"fill="white"></path>
        </svg>
                <div class = 'header_Center'></div>
            </nav>
            <div class="group"></div>
            <div class="overlay">
                <h3>GBIF | Global Biodiversity Information Facility</h3>
                <h1>Free and open access to biodiversity data</h1>
                <div class="list_search_Top">
                    <a href="">Occurrences</a>
                    <a href="">Species</a>
                    <a href="">Datasets</a> 
                    <a href="">Publishers</a>
                    <a href="">Resources</a>
                </div>
                <input type="text" placeholder="Search">
                <div class="list_search_Top">
                    <a href="">What is GBIF?</a>
                    <a href="">About GBIF Viet Nam</a>
                </div>
            </div>
            </div>
        </div>
    </div>`;
  const NavBar = document.querySelector("#NavBar");
  const header_Center = document.querySelector(".header_Center");
  const group = document.querySelector(".group");
  menus.forEach((menu, index) => {
    header_Center.innerHTML += `<p class ="List" onclick = "show(${index})">${menu.name}</p>`;
  });

  function show(x) {
    const List = document.querySelectorAll('.List')
    List.forEach(item => {
      item.style.removeProperty("background-color")
    })
    List[x].style.backgroundColor = "#61a861"
    let txt = "";
    menus[x].childrent.forEach((child) => {
      txt += `
          <div class = "list_gr">
              <p class="title">${child.title}</p>
              <div class ="list_Item">`;
      child.option.forEach((op) => {
        txt += `
                  <a class ="item" href="">${op}</a>
              `;
      });
      txt += "</div></div>";
    });
    let margin = 95 * x + 62 + "px";
    group.innerHTML = txt;
    group.style.marginLeft = margin;
    group.style.display = "flex";
  }
  function clickOver() {
    document.addEventListener("click", function (e) {
      if (e.target.classList != "List") {
        group.style.display = "none";
      }
    });
  }
clickOver();
console.log(NavBar);
const list_Icon = [
  {
    name: "Right_Header",
    icon: [
      "fa-solid fa-heart-pulse",
      "fa-solid fa-language",
      "fa-solid fa-magnifying-glass",
      "fa-regular fa-message",
    ],
  },
];
function headeRight() {
  NavBar.innerHTML += `<div class="headRight">
    <div class="list_icon">
        
        

    </div>
</div>`;
}
headeRight();
function Icon_HeadRight() {
  const Login = [
    {
      name: "Login",
      email: {
        label: "Username or email",
        placehoder: "nhap email",
      },
      pass: {
        label: "Password",
        placehoder: "nhap matkhau",
      },
    },
    {
      name: "Register",
      location: {
        country: "Country",
        placehoder: "Viet Nam",
      },
      email: {
        label: "email",
        placehoder: "nhap email",
      },
      user: {
        label: "Username",
        placehoder: "nhap matkhau",
      },
      pass: {
        label: "Password",
        placehoder: "nhap matkhau",
      },
    },
  ];

  const list_icon = document.querySelector(".list_icon");
  list_Icon[0].icon.forEach((icon) => {
    list_icon.innerHTML += `
    <div class="icon">
      <i class="${icon}"></i>
    </div>`;
  });
  list_icon.innerHTML += `
  <div id="Login">
    <p class="login">
        <button class="btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Login
        </button>
    </p>
    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            <ul class="nav nav-underline">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">${Login[0].name}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">${Login[1].name}</a>
                </li>
            </ul>
            <div class ="groupLogin">
              <div class='email'>
                  <label for="username">${Login[0].email.label}</label>
                  <input type="text" id="username" name="username" value=''>
              </div>
              <div class='password'>
                  <label for="username">${Login[0].pass.label}</label>
                  <input type="text" id="password" name="username" value=''>
              </div>
              <div class="d-grid gap-2">
                  <button class="sign btn btn-primary border-0 mt-4" type="button" style='background: #71b171;'>Sign in</button>
              </div>
            </div>

        </div>
    </div>
  </div>`;
  checkValueSign()
  const cardLogin = document.querySelector("#Login .groupLogin");
  const Options = document.querySelectorAll("#Login li");
  let active = document.querySelectorAll("#Login li a");
  Options[0].onclick = (e) => {
    active.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    cardLogin.innerHTML = `
            <div class='email'>
                <label for="username">${Login[0].email.label}</label>
                <input type="text" id="username" name="username" value=''>
            </div>
            <div class='password'>
                <label for="username">${Login[0].pass.label}</label>
                <input type="text" id="password" name="username" value=''>
            </div>
            <div class="d-grid gap-2">
                <button class="sign btn btn-primary border-0 mt-4" type="button" style='background: #71b171;'>Sign in</button>
            </div>`;
            checkValueSign()

  };

  Options[1].onclick = (e) => {
    active.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    cardLogin.innerHTML = `
            <div class='location'>
                <label for="username">${Login[1].location.country}</label>
                <input type="text" id="username" name="username" value = '${Login[1].location.placehoder}'>
            </div>
            <div class='email'>
                <label for="username">${Login[1].email.label}</label>
                <input type="text" id="username" name="username" value='' required>
            </div>
            <div class='user'>
                <label for="username">${Login[1].user.label}</label>
                <input type="text" id="password" name="username" value='' required>
            </div>
            <div class='password'>
                <label for="username">${Login[1].pass.label}</label>
                <input type="text" id="password" name="username" value='' required>
            </div>
            <div class="d-grid gap-2">
                <button class="next btn btn-primary border-0 mt-4" type="button" style='background: #71b171;'>Next</button>
            </div>`;
            checkValueNext()

  };
}
Icon_HeadRight();

function checkValueSign() {

  const sign = document.querySelector('.sign')
  sign.onclick = () => {
    const email = document.querySelector('.email #username').value
    const password = document.querySelector('.password #password').value
    if(email==='' || password ==='') {
      alert('ban chua nhap email')
    }
  }
  
}


function random_img() {
  const img = [
    "https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg",
    "https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg",
    "https://vtv1.mediacdn.vn/thumb_w/640/2018/11/29/photo-1-154348431990377584420.jpg",
    "https://cdn.baogiaothong.vn/upload/2-2022/images/2022-05-25/1653446036-488-thumbnail-width740height555.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkQ3u8dJ7RrADrQtMzY0929b8Qc6m3--Tfw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvXNQpMPrxb_Nj6Z_JACQK7l5kzyGdwjQjug&usqp=CAU"
  ]
   setInterval(function(){
    const random = Math.floor(Math.random()*6)
    document.querySelector('.header .card.text-bg-dark .card-img').src = `${img[random]}`
  },3000)

}
random_img()
