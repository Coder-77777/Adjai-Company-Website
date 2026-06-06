const API = "/api";

window.onload = async function () {
    const token = localStorage.getItem("token");

    if (!token) {
        alert("Not logged in");
        return;
    }

    const res = await fetch(`${API}/auth/me`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await res.json();

    document.getElementById("userInfo").innerHTML = `
        <h2>Welcome</h2>
        <p>${data.user.name}</p>
        <p>${data.user.email}</p>
        <p>Role: ${data.user.role}</p>
    `;
};