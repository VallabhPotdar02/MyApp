const username = localStorage.getItem("username");

if (!username) {
  window.location.href = "login.html";
}

// get all customers
const customers = JSON.parse(localStorage.getItem("customers")) || [];

// find current customer
const customer = customers.find(c => c.username === username);

const box = document.getElementById("data");

if (!customer) {
  box.innerHTML = "<p>No data found</p>";
} else {
  box.innerHTML = `
    <div class="row">
      <strong>Name:</strong>
      <span>${customer.name}</span>
    </div>

    <div class="row">
      <strong>Phone:</strong>
      <span>${customer.phn}</span>
    </div>

    <div class="row paid">
      <strong>Total Amount:</strong>
      <span>₹${customer.amt}</span>
    </div>

    <div class="row pending">
      <strong>Pending:</strong>
      <span>₹${customer.pending}</span>
    </div>
  `;
}

// logout
function logout() {
  localStorage.removeItem("username");
  window.location.href = "login.html";
}