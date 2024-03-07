var container = document.querySelector(".container");
var field = document.querySelector("input");
const url = "https://countryapi.io/api/all?apikey=j9Mm0tn3jdruyqIHOi7MWd6Xn90CHY6BUeKsR4Vq";

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    ouptut(url);
  }
});

function ouptut(url) {
  fetch(url).then((promise) => {
    return promise.json();
  });
}
