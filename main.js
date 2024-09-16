let products = document.getElementsByClassName("products")[0];

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.map((result) => {
      let dev = document.createElement("div");
      let img = document.createElement("img");
      let dev2 = document.createElement("div");
      let title = document.createElement("h3");
      let text = document.createElement("p");
      
      img.src = result.image;
      title.textContent = result.title;
      text.textContent = result.price + " $";

      dev.appendChild(img);
      dev2.appendChild(title);
      dev2.appendChild(text);
      dev2.setAttribute("class", "title");
      dev.setAttribute("class", "card");

      dev.appendChild(dev2);
      products.appendChild(dev);
    });
  });