function signup() {
  const username = document.getElementById("user").value.trim();
  const password = document.getElementById("pass").value.trim();
  const role = document.querySelector('input[name="role"]:checked');
  const msg = document.getElementById("msg");

  if (!username || !password || !role) {
    msg.innerText = "All fields required";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find(u => u.username === username);

  if (exists) {
    msg.innerText = "User already exists";
    return;
  }

  users.push({
    username,
    password,
    role: role.value
  });

  localStorage.setItem("users", JSON.stringify(users));

  msg.style.color = "green";
  msg.innerText = "Signup successful";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
}