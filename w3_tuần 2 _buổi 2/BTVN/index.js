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
                <img class="img" src="https://www.gbif.org/img/full_logo_white.svg" alt="">
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
  let margin = 100 * x + 80 + "px";
  group.innerHTML = txt;
  group.style.marginLeft = margin;
  group.style.display = "flex";
}
function clickOver() {
  document.addEventListener("click", function (e) {
    // Kiểm tra xem sự kiện click có xảy ra bên ngoài của toast hay không
    if (e.target.classList != "List") {
      // Nếu click xảy ra bên ngoài, ẩn đi toast
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
function checkValueNext() {
  const next = document.querySelector('.next')
  console.log(next)
  next.onclick = () => {
    const location = document.querySelector('.location #username').value
    const email = document.querySelector('.email #username').value
    const user = document.querySelector('.user #password').value
    const password = document.querySelector('.password #password').value
    if(email==='' || password ===''|| user==='' || location ==='') {
      alert('ban chua nhap email')
    }
  }
}

function random_img() {
  const img = [
    "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https://paininthearsenal.com/wp-content/uploads/getty-images/2017/07/1141847104.jpeg",
    "https://transfery.info/img/photos/80967/1500xauto/hakim-ziyech.jpg",
    "https://i.guim.co.uk/img/media/1b8e6e0f5ad822a7fa2d4d9854f8c9e546e67d4b/0_148_5342_3206/master/5342.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9b2e53fab9c1bc7120d674590e69e56b",
    "https://www.planetsport.com/image-library/og/1600/h/hakim-ziyech-chelsea-26-oct-2021.jpg",
    "https://www.foot01.com/img/images/1200x/2023/Jan/31/hakim-ziyech-passe-sa-visite-medicale-avec-le-psg-icon_sipausa_43720585-356447.jpg",
    "https://cdn.modernghana.com/images/content/1022202060530-8eu2xkjwvr-hakim-ziyech-201017-inaction-g-1050.jpg"
  ]
   setInterval(function(){
    const random = Math.floor(Math.random()*6)
    document.querySelector('.header .card.text-bg-dark .card-img').src = `${img[random]}`
  },2000)

}
random_img()
