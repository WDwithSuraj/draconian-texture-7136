let wishCont = document.getElementById("wishlist-container")
let whishData = JSON.parse(localStorage.getItem("wishlist"))
if (whishData == null) {
    whishData = []
}
createDom(whishData)




function createDom(data) {
    wishCont.innerHTML = null;
    data.forEach((element, index) => {
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
        let remove = document.createElement("button")
        remove.setAttribute("id", "removeBtn")
        remove.innerText = "Remove Item";
        remove.addEventListener("click", () => {
            let LSdata = JSON.parse(localStorage.getItem("wishlist"))
            if (LSdata == null) {
                LSdata = []
            }
            let deleted = LSdata.filter((ele, idex) => {
                if (index == idex) {
                    return false
                } else {
                    return true
                }
                LSdata.push(ele)
            })
            localStorage.setItem("wishlist", JSON.stringify(deleted))
            createDom(deleted)
        })

        box.append(img, name, brand, category, price, remove);
        wishCont.append(box);
    });
}