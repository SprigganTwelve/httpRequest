var startBtn = document.querySelector("#go");
var input = document.querySelector("input");
var key = "e6701201";
var trunk = document.querySelector("#trunk");
var filter = document.querySelector("select");
var bool = true;
let urlOne = "https://www.omdbapi.com/?apikey=" + key + "&s=movie";
var post;

fetch(urlOne)
  .then((promise) => {
    return promise.json();
  })
  .then((data) => {});

startBtn.addEventListener("click", () => {
  if (filter.value == "" && bool) {
    let url = "http://www.omdbapi.com/?apikey=" + key + "&t=" + input.value + "";
    axios.get(url).then((promise) => {
      trunk.textContent = "";

      post = `   
         
              <img src="${promise.data.Poster}" alt="" />
              <span>${promise.data.Title}</span>
              <span>${promise.data.Year}</span>
              <button>Ajouter</button>
        `;

      let section = document.createElement("section");
      section.innerHTML = post;
      trunk.appendChild(section);
      bool = false;
    });
  } else {
    let urlS = "http://www.omdbapi.com/?apikey=" + key + "&t=" + input.value + "&s=" + filter.value;
    fetch(urlS)
      .then((promise) => {
        return promise.json();
      })
      .then((data) => {
        console.log("input value : ", input.value, " ; url :", urlS, "; data : ", data);
        trunk.textContent = "";
        data.Search.forEach((element) => {
          post = `   
         
          <img src="${element.Poster}" alt="" />
          <span>${element.Title}</span>
          <span>${element.Year}</span>
          <button>Ajouter</button>
    `;
          let section = document.createElement("section");
          section.innerHTML = post;
          trunk.appendChild(section);
          bool = false;
        });
      });
  }
});

/*------------------------------------------*/
