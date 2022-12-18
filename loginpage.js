let loginNumber = document.getElementById("login-number");
let loginBtn = document.getElementById("login-button");
let count = 0;
loginBtn.addEventListener("click", () => {
  count++;
  loginNumber.value = "";
  loginNumber.setAttribute("placeholder", "Enter OTP");
  loginBtn.innerText = "Validate OTP";
  if (count == 2) {
    if (loginNumber.value == "") {
      alert("OTP Matched");
      window.location = "index.html";
      let loginValue = true;
      localStorage.setItem("login", JSON.stringify(loginValue));
    }
  }
});
