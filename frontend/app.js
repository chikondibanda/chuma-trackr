// Initialize Clerk
const clerk = Clerk({ frontendApi: "https://<your-clerk-frontend>.clerk.dev" });

let token;
clerk.load().then(() => {
  if (clerk.session) token = clerk.session.getToken();
  else clerk.openSignIn();
});

// Load transactions
async function loadTransactions() {
  const res = await fetch('/api/transactions', {
    headers: { Authorization: `Bearer ${token}` }
  });
  const data = await res.json();
  const tbody = document.querySelector('#transactions-table tbody');
  tbody.innerHTML = '';
  data.forEach(t => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${t.transaction_date}</td><td>${t.type}</td><td>${t.category_name}</td><td>${t.amount}</td><td>${t.note}</td>`;
    tbody.appendChild(tr);
  });
}
loadTransactions();

// Add transaction
document.querySelector('#transaction-form').addEventListener('submit', async e => {
  e.preventDefault();
  const payload = {
    amount: parseFloat(document.querySelector('#amount').value),
    type: document.querySelector('#type').value,
    category_id: document.querySelector('#category').value,
    note: document.querySelector('#note').value,
    transaction_date: new Date().toISOString().split('T')[0]
  };
  await fetch('/api/transactions', {
    method:'POST',
    headers:{ 'Content-Type':'application/json', Authorization:`Bearer ${token}` },
    body: JSON.stringify(payload)
  });
  loadTransactions();
});
                    