const cartBox = document.getElementById("cart");
const totalPriceBox = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

async function loadCart() {
    if (cart.length === 0) {
        cartBox.innerHTML = "<h2>No items in cart</h2>";
        totalPriceBox.innerHTML = "";
        return;
    }

    let res = await fetch("https://fakestoreapi.com/products");
    let products = await res.json();

    let cartProducts = products.filter(p => cart.includes(p.id));

    let total = 0;

    cartBox.innerHTML = "";
    cartProducts.forEach(p => {
        total += p.price;

        cartBox.innerHTML += `
        <div class="card">
            <h3>${p.title}</h3>
            <img src="${p.image}">
            <p>$${p.price}</p>
            <button onclick="removeItem(${p.id})">Remove</button>
        </div>`;
    });

    totalPriceBox.innerHTML = `Total: $${total.toFixed(2)}`;
}

function removeItem(id) {
    cart = cart.filter(item => item !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

loadCart();
