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
  result.textContent = correction(inf, field.value);
});

field.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    result.innerHTML = "";
    result.textContent = correction(inf, field.value, win, lose);
  }
});

score.addEventListener("click", () => {
  // alert(`Votre Score actuel est : \n Win :${win} ; Lose : ${lose} `);
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

function correction(inf, val) {
  if (inf.capital.trim().toLowerCase() === val.trim().toLowerCase()) {
    return "You Win";
  } else {
    return "You lose";
  }
}
