var startBtn = document.querySelector("#go");
var input = document.querySelector("input");
var key = "e6701201";
var trunk = document.querySelector("#trunk");
var filter = document.querySelector("select");
var bool = true;
var post;

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
        appearsForFilter(trunk, post, item);
      } else {
        data.Search.forEach((item) => {
          if (filter.value == item.Type) {
            appearsForFilter(trunk, post, item);
          }
        });
      }
    });
});

/*------------------------------------------*/

function appearsForFilter(trunk, post, item) {
  trunk.textContent = "";

  post = `   

  <img src="${item.Poster}" alt="" />
  <span>${item.Title}</span>
  <span>${item.Year}</span>
  <button>Ajouter</button>
`;
  let section = document.createElement("section");
  section.innerHTML = post;
  trunk.appendChild(section);
}
