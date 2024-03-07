var container = document.querySelector(".container");
var field = document.querySelector("input");
var result = document.querySelector(".output");
const url = "https://countryapi.io/api/all?apikey=j9Mm0tn3jdruyqIHOi7MWd6Xn90CHY6BUeKsR4Vq";
var ul = document.querySelector("ul");
var win = 0;
var lose = 0;

var value = ouptut(url);
console.log(value);
field.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    correction();
  }
});

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
