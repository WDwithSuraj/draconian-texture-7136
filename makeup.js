let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.location = "index.html";
});
let productCont = document.getElementById("product-container");
let neededData = [];
fetch("./data/mydata.JSON")
  .then((res) => {
    return res.json();
  })
  .then((act) => {
    let needed = act.map((element) => {
      return {
        image: element.image_link,
        name: element.name,
        brand: element.brand,
        price: element.price,
        priceSign: element.price_sign,
        category: element.category,
        id: element.id,
      };
    });

    createDom(needed);
    filter(needed);
    sort(needed);
  })
  .catch((err) => {
    console.error(err);
  });

function createDom(data) {
  productCont.innerHTML = null;
  data.forEach((element) => {
    let box = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src", element.image);
    img.setAttribute("alt", "image broken");
    let name = document.createElement("h3");
    name.innerText = element.name;
    let id = document.createElement("p");
    id.innerText = element.id;
    let brand = document.createElement("p");
    brand.innerText = element.brand;
    let category = document.createElement("p");
    category.innerText = element.category;
    let price = document.createElement("p");
    price.innerText = "$" + element.price;
    let choose = document.createElement("div");
    choose.setAttribute("class", "atc");
    let wish = document.createElement("p");
    wish.setAttribute("class", "fa-regular fa-heart");
    wish.setAttribute("id", "heart");

    let atcBtn = document.createElement("button");
    atcBtn.setAttribute("class", "atcBtn");
    atcBtn.innerText = "Add To Cart";
    choose.append(wish, atcBtn);
    box.append(img, name, brand, category, price, choose);
    productCont.append(box);
  });
}

//filter section
let filterSelect = document.getElementById("filter");
function filter(data) {
  filterSelect.addEventListener("change", () => {
    let filteredData = data.filter((element) => {
      if (element.category == filterSelect.value) {
        return true;
      } else {
        return false;
      }
    });
    createDom(filteredData);
  });
}

//sorting section
let sortByPrice = document.getElementById("sort");

function sort(data) {
  sortByPrice.addEventListener("change", () => {
    if (sortByPrice.value == "l2h") {
      let sortedData = data.sort((a, b) => {
        return a.price - b.price;
      });
      createDom(sortedData);
    } else if (sortByPrice.value == "h2l") {
      let sortedData = data.sort((a, b) => {
        return b.price - a.price;
      });
      createDom(sortedData);
    }
  });
}

//add to wishlist
let wish = document.getElementById("heart");
wish.addEventListener("click", () => {});

// add to cart
let atcBtn = document.querySelectorAll(".atcBtn");
atcBtn.addEventListener("click", (e) => {});
