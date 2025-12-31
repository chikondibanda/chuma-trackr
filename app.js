window.Clerk.load({
  publishableKey: "YOUR_CLERK_PUBLISHABLE_KEY"
}).then(async () => {
  const { user, session } = Clerk;

  Clerk.mountSignIn(document.getElementById("sign-in"));
  Clerk.mountUserButton(document.getElementById("user-button"));

  Clerk.addListener(async ({ user }) => {
    if (!user) return;

    document.getElementById("dashboard").style.display = "block";
    document.getElementById("username").innerText = user.firstName || "User";

    loadDashboard();
    loadTransactions();
  });
});

async function getToken() {
  const session = await Clerk.session.getToken();
  return session;
}

async function loadDashboard() {
  const token = await getToken();
  const res = await fetch("/api/get-dashboard", {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  document.getElementById("balance").innerText = data.balance;
}

async function loadTransactions() {
  const token = await getToken();
  const res = await fetch("/api/get-transactions", {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();

  document.getElementById("transactions").innerHTML =
    data.map(t => `<p>${t.category} - ${t.amount}</p>`).join("");
}

async function addTransaction() {
  const token = await getToken();

  await fetch("/api/add-transaction", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      amount: document.getElementById("amount").value,
      type: document.getElementById("type").value,
      category: document.getElementById("category").value
    })
  });

  loadDashboard();
  loadTransactions();
}
