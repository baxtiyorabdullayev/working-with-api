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
      box.classList.add("box");

      let title = document.createElement("h1");
      title.classList.add("title");
      title.textContent = item.title;
      let imageBox = document.createElement("div");
      imageBox.classList.add("image");

      let image = document.createElement("img");
      image.src = item.image;

      let ratingBox = document.createElement("div");
      ratingBox.classList.add("rating");

      let ratingStar = document.createElement("i");
      ratingStar.classList.add("fa", "fa-star");

      let ratingNumber = document.createElement("span");
      ratingNumber.item?.rating.rate;

      let name = document.createElement("p");
      name.classList.add("name");
      name.textContent = item.title;

      let price = document.createElement("p");
      price.classList.add("price");
      price.textContent = `${item.price}$`;

      box.appendChild(image);
      box.appendChild(name);
      box.appendChild(price);
      container.appendChild(box);
    });
  });
