/*----------Declare--------------------*/

var field = document.querySelector("input");
var search = document.querySelector("#searchIcon");
var container = document.querySelector(".container");
var tab = [];
let next = document.querySelector(".next");
var id;
let footer = document.querySelector("footer");
let allLetters = ["b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let aBtn = document.createElement("button");
aBtn.classList.add("opac");
aBtn.textContent = "a";
footer.appendChild(aBtn);

/*-----------------------*/

allLetters.forEach((element) => {
  let button = document.createElement("button");
  button.textContent = element;
  button.classList.add("letters");
  footer.appendChild(button);
});

fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  .then((resp) => {
    console.log(resp);
    return resp.json();
  })
  .then((data) => {
    console.log(data);
    postMeal(data);
  });

next.addEventListener("click", () => {
  window.location.replace("favorite/index.html");
});

search.addEventListener("click", () => {
  container.innerHTML = "";
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + field.value;
  console.log(url);
  fetch(url)
    .then((resp) => resp.json())
    .then((promise) => {
      postMeal(promise);
    });
});

container.addEventListener("click", (e) => {
  var target = e.target;
  console.log(e);

  if (target.classList[1] == "great") {
    target.classList.toggle("yellow");
    let id = target.parentElement.childNodes[4].textContent;
    let index = tab.indexOf(id);

    if (index == -1) {
      tab.unshift(id);
      localStorage.setItem("favoris", JSON.stringify(tab));
    }
  } else if (target.parentElement.tagName == "DIV") {
    id = target.parentElement.childNodes[3].childNodes[4].textContent;
    localStorage.setItem("meal", JSON.stringify([id, "home"]));
    window.location.replace("./single/index.html");
  }
  if (e.target.classList.contains("container")) {
    console.log("ok");
    /*-----------scroll---item------------*/
    let scrollDown = document.createElement("button");
    scrollDown.classList.add("moved");
    scrollDown.innerHTML = `<span class="material-symbols-outlined goDown">
    keyboard_double_arrow_down
    </span>`;
    e.target.appendChild(scrollDown);
  }
});

window.addEventListener("click", (e) => {
  /*-----------scroll---item--move----------*/
  console.log("e windown : ", e);
  if (e.target.classList.contains("goDown")) {
    document.body.scrollIntoView(false);
    e.target.parentElement.remove();
  }
});

/*--------function----*/

function postMeal(promise) {
  container.innerHTML = "";
  promise.meals.forEach((meal) => {
    let post = `
      <div >
              <img title="Click on me" src="${meal.strMealThumb}" alt="" />
             <p> <strong>${meal.strMeal}</strong>
             <span class="material-symbols-outlined great" id="fav">
             grade
             </span><span id="id" style="display:none">${meal.idMeal}</span></p>
             
      </div>
      `;
    let div = document.createElement("div");
    div.classList.add("containerChild");
    div.innerHTML = post;
    container.appendChild(div);
  });
}

function supp(table, index) {}

// window.scroll({
//   top: 100,
//   left: 100,
//   behavior: "smooth",
// });

// if (target.classList.contains("yellow")) {
//   tab.splice(index, 1);
//   localStorage.setItem("favoris", JSON.stringify(tab));
// }
