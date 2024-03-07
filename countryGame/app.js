var container = document.querySelector(".container");
var field = document.querySelector("input");
const url = "https://countryapi.io/api/all?apikey=j9Mm0tn3jdruyqIHOi7MWd6Xn90CHY6BUeKsR4Vq";
var ul = document.querySelector("ul");
field.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    ouptut(url);
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
      console.log(value);
      console.log(value.flag);
      ul.children[0].setAttribute("src", `${value.flag.medium}`);
      ul.children[1].textContent = value.name;
      ul.children[2].textContent = "Quel est la Capitale de ce pays ?";
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
