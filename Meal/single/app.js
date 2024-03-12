var back = document.querySelector(".back");
var container = document.querySelector(".container");
var descrpContent;

back.addEventListener("click", () => {
  window.location.replace("../index.html");
});

var meal = localStorage.getItem("meal");
var mealKey = JSON.parse(meal);
const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealKey;

fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    let post = `        
    <img src="${data.meals[0].strMealThumb}" alt="Image" />
    <p class="showingUp">
      <span>${data.meals[0].strMeal}</span>
      <span>Class : ${data.meals[0].strCategory}</span>
      <span>Origin: ${data.meals[0].strArea}</span>
    </p>`;
    let first = document.createElement("div");
    descrpContent = document.createElement("div");
    first.classList.add("first");
    descrpContent.classList.add("descrpContent");
    first.innerHTML = post;
    descrpContent.innerHTML = `<p>${data.meals[0].strInstructions}</p>`;
    container.appendChild(first);
    container.appendChild(descrpContent);
  });

// container.addEventListener("click", (e) => {
//   var target = e.target;
//   console.log(target.parentElement.tagName);
//   if (target.parentElement.tagName == "svg") {
//     descrpContent.style.display = "block";
//     descrpContent.style.transform = "translateY(100%)";
//   }
// });

{
  /* <svg class="descrp-arc" xmlns="http://www.w3.org/2000/svg" height="70" viewBox="0 -960 960 960" width="44">
  <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
</svg>; */
}
