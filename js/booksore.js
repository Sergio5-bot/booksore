// Initialize cart from local storage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a book to the cart
function addToCart(title, price) {
    cart.push({ title, price });
    updateCartCount();
    saveCartToLocalStorage();
    alert(`${title} has been added to your cart!`);
}

// Function to remove a book from the cart
function removeFromCart(title) {
    cart = cart.filter(item => item.title !== title);
    updateCartCount();
    saveCartToLocalStorage();
    renderCartItems();
}

// Function to view the cart
function viewCart() {
    renderCartItems();
    document.getElementById("cart-modal").style.display = "block";
}

// Function to close the cart modal
function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

// Function to render cart items
function renderCartItems() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.title} - $${item.price} `;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeFromCart(item.title);
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
}

// Function to borrow books
function borrowBooks() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Books borrowed successfully!");
    cart = [];
    updateCartCount();
    saveCartToLocalStorage();
    renderCartItems();
}

// Function to update cart count display
function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

// Function to save cart to local storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load the cart when the page loads
window.onload = function() {
    updateCartCount();
    renderCartItems();
};
