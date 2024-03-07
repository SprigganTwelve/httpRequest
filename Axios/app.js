container = document.querySelector(".container");
axios.get("https://api.disneyapi.dev/character/").then((resp) => {
  console.log(resp.data.data);
  resp.data.data.forEach((element) => {
    console.log(element);
    let name = element.name;
    let srcImg = element.imageUrl;
    let describe = element.films[0];
    element.html = `<strong>${name}</strong>
              <img src=${srcImg}></img>
              <p><strong>Film</strong> : ${describe}</p>
              `;
    let div = document.createElement("div");
    div.innerHTML = div;
    container.appendChild(div);
  });
});
