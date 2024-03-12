var container = document.querySelector(".container");
var field = document.querySelector("input");
var result = document.querySelector(".result");
const url = "https://countryapi.io/api/all?apikey=j9Mm0tn3jdruyqIHOi7MWd6Xn90CHY6BUeKsR4Vq";
var ul = document.querySelector("ul");
var skip = document.querySelector("#skip");
var go = document.querySelector("#go");
var score = document.querySelector("#score");
var win;
var lose;
var inf;

ouptut(url);

skip.addEventListener("click", () => {
  ouptut(url);
});

go.addEventListener("click", () => {
  result.innerHTML = "";
  result.textContent = correction(inf, field.value, win, lose);
});

field.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    result.innerHTML = "";
    result.textContent = correction(inf, field.value, win, lose);
  }
});

score.addEventListener("click", () => {
  alert(`Votre Score actuel est : \n Win :${win} ; Lose : ${lose} `);
});

/*------------function-----------*/

function ouptut(url) {
  fetch(url)
    .then((promise) => {
      return promise.json();
    })
    .then((data) => {
      var length = Object.keys(data).length;
      var randomCountry = getRandomInt(length);
      let objectSelected = Object.keys(data)[randomCountry];
      let value = data[objectSelected];
      inf = value;
      console.log(inf);
      ul.children[0].setAttribute("src", `${value.flag.medium}`);
      ul.children[1].textContent = value.name;
      ul.children[2].textContent = "Quel est la Capitale de ce pays ?";
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function correction(answer, value, item, win, lose) {
  item.textContent = "";
  if (answer == value.capital) {
    let succes = document.createElement("div");
    score += 1;
    succes.innerHTML = `          <div id="succes" >
    <span>vous avez  gagner !</span>
    <button>Follow
    </button>
    <p>${win} ${lose}</p>
  </div>
>`;
    item.appendChild(succes);
  } else {
    let lose = document.createElement("div");
    score += 1;
    succes.innerHTML = `<div id="succes" >
    <span>vous avez  perdu !</span>
    <button>Follow
    </button>
    <p> Win : ${win}  lose : ${lose}</p>
  </div>
>`;
    item.appendChild(lose);
  }
}

function correction(inf, val, win, lose) {
  if (inf.capital.trim().toLowerCase() === val.trim().toLowerCase()) {
    win++;
    return "You Win";
  } else {
    lose--;
    return "You lose";
  }
}
