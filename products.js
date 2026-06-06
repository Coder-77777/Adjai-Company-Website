const API = "/api";

/* =========================
   LOAD PRODUCTS
========================= */
async function loadProducts() {
    try {
        const response = await fetch(`${API}/products`);

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        const productsContainer = document.getElementById("products");

        if (!productsContainer) {
            console.error("Products container not found.");
            return;
        }

        if (!data.products || data.products.length === 0) {
            productsContainer.innerHTML = `
                <div class="card">
                    <h3>No Products Available</h3>
                    <p>Please check again later.</p>
                </div>
            `;
            return;
        }

        productsContainer.innerHTML = data.products.map(product => `
            <div class="card">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>KES ${product.price}</strong></p>
                <button onclick="location.href='payments.html?productId=${product.id}'" class="product-btn">
                    Buy Now
                </button>
            </div>
        `).join("");

    } catch (error) {
        console.error("Error loading products:", error);

        const productsContainer = document.getElementById("products");

        if (productsContainer) {
            productsContainer.innerHTML = `
                <div class="card">
                    <h3>Connection Error</h3>
                    <p>Unable to load products at the moment.</p>
                </div>
            `;
        }
    }
}

/* =========================
   INITIALIZE
========================= */
document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});