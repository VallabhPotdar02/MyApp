document.getElementById("loginForm").onsubmit = function(e) {
  e.preventDefault();

  loginUser();
};

function loginUser() {

  const username = document.getElementById("user").value.trim();
  const password = document.getElementById("pass").value.trim();
  const msg = document.getElementById("msg");


  let users = JSON.parse(localStorage.getItem("users")) || [];


  const user = users.find(function(u) {
    return u.username === username && u.password === password;
  });


  if (!user) {
    msg.innerText = "Invalid login";
    return;
  }


  localStorage.setItem("username", user.username);
  localStorage.setItem("role", user.role);


  if (user.role === "shopkeeper") {
    window.location.href = "shop.html";
  } else {
    window.location.href = "customer.html";
  }
}