const username = localStorage.getItem("username");


if (!username) {
  window.location.href = "login.html";
}

let customers = JSON.parse(localStorage.getItem("customers")) || [];

document.addEventListener("DOMContentLoaded", renderCustomers);

function logout() {
  localStorage.removeItem("username");
  window.location.href = "login.html";
}

function addCustomer() {
  const name = document.getElementById("cusname").value.trim();
  const amt = document.getElementById("amount").value.trim();
  const pending = document.getElementById("pendingAmt").value.trim();
  const phn = document.getElementById("phone").value.trim();

  if (!name || !amt || !pending || !phn) {
    alert("Fill all fields");
    return;
  }

  const newCustomer = {
    id: Date.now(),
    name,
    amt,
    pending,
    phn,
    owner: username
  };

  customers.push(newCustomer);
  localStorage.setItem("customers", JSON.stringify(customers));


  document.getElementById("cusname").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("pendingAmt").value = "";
  document.getElementById("phone").value = "";

  renderCustomers();
}

function renderCustomers() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  const myCustomers = customers.filter(c => c.owner === username);

  if (myCustomers.length === 0) {
    list.innerHTML = "<p style='text-align:center;color:#888;'>No customers yet</p>";
    return;
  }

  myCustomers.forEach(c => {
    const div = document.createElement("div");
    div.className = "customer";

    div.innerHTML = `
      <div class="row">
        <span><b>${c.name}</b></span>
        <span>${c.phn}</span>
      </div>
      <div class="row">
        <span>Total: ₹${c.amt}</span>
      </div>
      <div class="row">
        <span>Pending: ₹${c.pending}</span>
      </div>
    `;

    list.appendChild(div);
  });
}