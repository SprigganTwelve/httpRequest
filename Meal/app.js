var field = document.querySelector("input");
var search = document.querySelector("#searchIcon");
var container = document.querySelector(".container");
var tab = [];
let next = document.querySelector(".next");

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
      console.log(promise);
      promise.meals.forEach((meal) => {
        let post = `
        <div title="Click on me">
                <img src="${meal.strMealThumb}" alt="" />
               <p> <strong>${meal.strMeal}</strong>
               <span class="material-symbols-outlined great" id="fav">
               grade
               </span><span id="id" style="display:none">${meal.idMeal}</span></p>
               
        </div>
        `;
        let div = document.createElement("div");
        div.innerHTML = post;
        container.appendChild(div);
      });
    });

  container.addEventListener("click", (e) => {
    var target = e.target;
    console.log(target.parentElement.childNodes[4]);
    console.log(e);
    if (target.classList[1] == "great") {
      target.classList.toggle("yellow");
      if (tab.indexOf(target.parentElement.childNodes[4].textContent) == -1) {
        tab.unshift(target.parentElement.childNodes[4].textContent);
        localStorage.setItem("favoris", JSON.stringify(tab));
      }
    }
  });

  // .catch((error) => {
  //   alert("une erreur est survenu ! : ", error);
  // }); www.themealdb.com/api/json/v1/1/lookup.php?i=52772
});
