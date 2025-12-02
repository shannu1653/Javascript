const box = document.getElementById("product");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

async function loadProduct() {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    let p = await res.json();

    box.innerHTML = `
        <div class="card">
            <h2>${p.title}</h2>
            <img src="${p.image}">
            <h3>$${p.price}</h3>
            <p><b>Category:</b> ${p.category}</p>
            <p>${p.description}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
        <br>
        <button onclick="window.location.href='index.html'">Back</button>
    `;
}

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart.includes(id)) cart.push(id);

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart!");
}

loadProduct();
