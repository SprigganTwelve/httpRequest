var startBtn = document.querySelector("#go");
var input = document.querySelector("input");
var key = "e6701201";
var trunk = document.querySelector("#trunk");
var filter = document.querySelector("select");
var bool = true;
let urlOne = "https://www.omdbapi.com/?apikey=" + key + "&s=movie";

// fetch(urlOne)
//   .then((promise) => {
//     return promise.json();
//   })
//   .then((data) => {});

startBtn.addEventListener("click", () => {
  let urlS = "http://www.omdbapi.com/?apikey=" + key + "&s=" + input.value;
  fetch(urlS)
    .then((promise) => {
      return promise.json();
    })
    .then((data) => {
      if (filter.value == "" && bool) {
        console.log("input value : ", input.value, " ; url :", urlS, "; data : ", data);
        trunk.textContent = "";
        data.Search.forEach((element) => {
          appearsForFilter(trunk, element);
        });
      } else {
        trunk.textContent = "";
        data.Search.forEach((item) => {
          if (filter.value == item.Type) {
            appearsForFilter(trunk, item);
          }
        });
      }
    });
});

/*------------------------------------------*/

function appearsForFilter(bloc, it) {
  let view = `   

  <img src="${it.Poster}" alt="" />
  <span>${it.Title}</span>
  <span>${it.Year}</span>
  <button>Ajouter</button>
`;
  let section = document.createElement("section");
  section.innerHTML = view;
  bloc.appendChild(section);
}
