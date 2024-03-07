var container = document.querySelector(".container");
var itemLiked = [];
var html;
var def;
var author;

fetch("https://type.fit/api/quotes")
  .then((promise) => {
    return promise.json();
  })
  .then((answer) => {
    console.log(answer);
    let number = answer.length;
    let randomValue = randomNumber(1, number);
    console.log(randomValue);

    let text = answer[randomValue].text;
    def = text;
    let origin = answer[randomValue].author.replace(",type.fit", " ");
    author = origin;

    html = `<div>
    <h1>A Quote For Today</h1>
    <p>${def}</p>
    <p id = "author">${author}</p>
    <button id="reload">Refresh</button>
    <button id="save">Save</button>
    
    <span class="material-symbols-outlined" id="like">
thumb_up
</span></div>

    `;
    div = document.createElement("div");
    div.innerHTML = html;
    container.appendChild(div);

    container.addEventListener("click", (e) => {
      if (e.target.id === "reload") {
        p = document.querySelectorAll("p");
        let randomTwo = randomNumber(0, number);
        let text = answer[randomTwo].text;
        p[0].textContent = text;
        p[1].textContent = answer[randomTwo].author;
      } else if (e.target.id === "save") {
        console.log("ok");
      } else if (e.target.id === "like") {
        var like = document.querySelector("#like");
        like.style.color = "blue";
      }
    });
  });

function randomNumber(x, y) {
  return Math.floor(Math.random() * (y - x + 1) + x);
}
