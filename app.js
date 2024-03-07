var container = document.querySelector("div");

fetch("https://jsonplaceholder.typicode.com/comments")
  .then(function (reponse) {
    console.log(reponse);
    return reponse.json();
  })
  .then(function (result) {
    result.forEach((el) => {
      console.log(el);
      var parentElement = document.createElement("div");
      var name = document.createElement("strong");
      var email = document.createElement("i");
      var comment = document.createElement("p");
      name.textContent = el.name;
      email.textContent = el.email;
      comment.textContent = el.body;
      parentElement.appendChild(name);
      parentElement.appendChild(email);
      parentElement.appendChild(comment);
      container.appendChild(parentElement);
    });
  });
