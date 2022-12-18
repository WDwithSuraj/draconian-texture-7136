let search = document.getElementById("search");
let searchArea = document.getElementById("searh-area");
let slide1 = document.getElementById("slide1");
let image = [
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F326d1e4e-1c75-4b56-8533-0db3902a5815.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F1e69c5f7-2df9-4c42-bf08-22b6b68779e0.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F34d52684-19de-435e-bbde-86d09bf08c19.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fbcd1e4c1-fbaa-486c-86ed-07048ad3a3f9.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fc1fc9534-054e-46ea-80e2-482a128d9151.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fa7bfdf05-ad0e-4c24-ab48-7ff64e9115b8.jpg&w=1920&q=75",
  "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff8a41835-0598-46e8-ba2c-72e885291eb0.jpg&w=1920&q=75",
];
let count = 0;
setInterval(function () {
  let img = document.createElement("img");
  img.setAttribute("src", image[count]);
  slide1.innerHTML = null;
  slide1.append(img);

  if (count == image.length - 1) {
    count = 0;
  }

  count++;
}, 3000);

// ----------------------------------
let bestseller = document.getElementById("bestseller");
/// login area

let userName = document.getElementById("login");
let LSdata = JSON.parse(localStorage.getItem("login"));

if (LSdata == true) {
  userName.innerText = "";
  // userName.setAttribute("class");
  let select = document.createElement("select");
  select.setAttribute("id", "login-select");
  let opt1 = document.createElement("option");
  opt1.setAttribute("value", "user-name");
  // opt1.setAttribute("class", "fa-solid fa-user");
  let opt2 = document.createElement("option");
  opt2.setAttribute("id", "logOut");
  opt2.innerText = "Log Out";
  select.addEventListener("change", () => {
    LSdata = false;
    if (select.value == opt2.innerText) {
      if (LSdata == false) {
        window.location = "index.html";
      }
      localStorage.setItem("login", JSON.stringify(LSdata));
    }
  });
  opt1.innerText = "Suraj";
  select.append(opt1, opt2);
  userName.append(select);
}

