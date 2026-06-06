const API = "/api";

/* =========================
   LOGIN
========================= */
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    alert(data.message);

    if (data.token) {
        localStorage.setItem("token", data.token);
    }
});

/* =========================
   REGISTER
========================= */
document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const role = e.target[3].value;

    const res = await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role })
    });

    const data = await res.json();
    alert(data.message);

    if (data.token) {
        localStorage.setItem("token", data.token);
    }
});