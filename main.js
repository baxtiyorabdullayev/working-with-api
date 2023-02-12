"use strict";

let container = document.querySelector(".container");
let allInformations = [];

let info = fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((info) => {
    allInformations = info;
    console.log(allInformations);
    allInformations.map((item) => {
      let box = document.createElement("div");
      box.classList.add("product-card");

      let category = document.createElement("p");
      category.classList.add("category");
      category.textContent = item.category;

      let miniBox = document.createElement("div");
      miniBox.classList.add("mini-box");

      let image = document.createElement("img");
      image.src = item.image;

      let cardInfo = document.createElement("div");
      cardInfo.classList.add("card-info");

      let title = document.createElement("p");
      title.classList.add("title");
      title.textContent = `Product: ${item.title}`;

      let rating = document.createElement("p");
      rating.classList.add("rating");
      rating.textContent = `Rating: ${item.rating.rate} (${item.rating.count})`;

      let price = document.createElement("p");
      price.classList.add("price");
      price.textContent = `Price: ${item.price}$`;

      let description = document.createElement("p");
      description.classList.add("description");
      description.textContent = `Description: ${item.description}`;

      let button = document.createElement("button");
      button.classList.add("button");
      button.textContent = "Buy";

      box.appendChild(category);
      box.appendChild(miniBox);
      miniBox.appendChild(image);
      miniBox.appendChild(cardInfo);
      cardInfo.appendChild(title);
      cardInfo.appendChild(rating);
      cardInfo.appendChild(price);
      box.appendChild(description);
      box.appendChild(button);
      container.appendChild(box);
    });
  });
