var container = document.querySelector(".container");
var favoris = localStorage.getItem("favoris");
var favTab = JSON.parse(favoris);
var back = document.querySelector(".back");

back.addEventListener("click", () => {
  window.location.replace("../index.html");
});

favTab.forEach((element) => {
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + element;
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data.meals[0]);
      let post = `
        <div title="Click on me">
                <img src="${data.meals[0].strMealThumb}" alt="" />
               <p> <strong>${data.meals[0].strMeal}</strong>
               <span class="material-symbols-outlined great yellow" id="fav">
               grade
               </span><span id="id"" style="display:none">${data.meals[0].idMeal}</span></p>
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
    target.parentElement.parentElement.remove();
    let index = favTab.indexOf(target.parentElement.childNodes[4].textContent);
    favTab.splice(index, 1);
    localStorage.setItem("favoris", JSON.stringify(favTab));
  }
});

// .catch((error) => {
//   alert("une erreur est survenu ! : ", error);
// }); www.themealdb.com/api/json/v1/1/lookup.php?i=52772
