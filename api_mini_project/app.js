const productBox = document.getElementById("products");
const search = document.getElementById("search");
const categorySelect = document.getElementById("category");

let allProducts = [];

async function loadProducts() {
    let res = await fetch("https://fakestoreapi.com/products");
    allProducts = await res.json();
    displayProducts(allProducts);
    loadCategories();
}

function displayProducts(products) {
    productBox.innerHTML = "";

    products.forEach(p => {
        productBox.innerHTML += `
        <div class="card">
            <h3>${p.title.substring(0, 30)}...</h3>
            <img src="${p.image}">
            <p><b>$${p.price}</b></p>
            <button onclick="openProduct(${p.id})">View Product</button>
        </div>`;
    });
}

function openProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

function loadCategories() {
    const categories = [...new Set(allProducts.map(p => p.category))];

    categorySelect.innerHTML = `<option value="">All Categories</option>`;
    categories.forEach(c => {
        categorySelect.innerHTML += `<option value="${c}">${c}</option>`;
    });
}

search.addEventListener("input", () => {
    let val = search.value.toLowerCase();
    let filtered = allProducts.filter(p =>
        p.title.toLowerCase().includes(val)
    );
    displayProducts(filtered);
});

categorySelect.addEventListener("change", () => {
    let cat = categorySelect.value;
    if (!cat) displayProducts(allProducts);
    else displayProducts(allProducts.filter(p => p.category === cat));
});

loadProducts();
