const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "electronics", price: 499 * 83, gender: "", img: "https://source.unsplash.com/featured/?laptop" },
  { id: 2, name: "Smartphone", category: "electronics", price: 299 * 83, gender: "", img: "https://source.unsplash.com/featured/?smartphone" },
  { id: 3, name: "Headphones", category: "electronics", price: 99 * 83, gender: "", img: "https://source.unsplash.com/featured/?headphones" },
  { id: 4, name: "Tablet", category: "electronics", price: 399 * 83, gender: "", img: "https://source.unsplash.com/featured/?tablet" },
  { id: 5, name: "Gaming Keyboard", category: "electronics", price: 70 * 83, gender: "", img: "https://source.unsplash.com/featured/?gaming-keyboard" },

  // Fashion
  { id: 6, name: "Men's Sneakers", category: "fashion", price: 59 * 83, gender: "male", img: "https://source.unsplash.com/featured/?mens-sneakers" },
  { id: 7, name: "Women's T‑shirt", category: "fashion", price: 25 * 83, gender: "female", img: "https://source.unsplash.com/featured/?womens-tshirt" },
  { id: 8, name: "Women's Jacket", category: "fashion", price: 120 * 83, gender: "female", img: "https://source.unsplash.com/featured/?womens-jacket" },
  { id: 9, name: "Men's Watch", category: "fashion", price: 149 * 83, gender: "male", img: "https://source.unsplash.com/featured/?mens-watch" },
  { id: 10, name: "Men's Jeans", category: "fashion", price: 40 * 83, gender: "male", img: "https://source.unsplash.com/featured/?mens-jeans" },

  // Home
  { id: 11, name: "Microwave", category: "home", price: 89 * 83, gender: "", img: "https://source.unsplash.com/featured/?microwave" },
  { id: 12, name: "Washing Machine", category: "home", price: 599 * 83, gender: "", img: "https://source.unsplash.com/featured/?washing-machine" },
  { id: 13, name: "Blender", category: "home", price: 45 * 83, gender: "", img: "https://source.unsplash.com/featured/?blender" },
  { id: 14, name: "Vacuum Cleaner", category: "home", price: 199 * 83, gender: "", img: "https://source.unsplash.com/featured/?vacuum-cleaner" },
  { id: 15, name: "Sofa Cover", category: "home", price: 30 * 83, gender: "", img: "https://source.unsplash.com/featured/?sofa-cover" }
];

const productList = document.getElementById("product-list");
const filters = document.querySelectorAll(".filter");
const genderFilters = document.querySelectorAll(".gender-filter");
const sortSelect = document.getElementById("sort-price");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsList = document.getElementById("cart-items");
const closeCartBtn = document.getElementById("close-cart");
const cartCount = document.getElementById("cart-count");

let cart = [];

function formatINR(num) {
  return "₹" + num.toLocaleString("en-IN");
}

function displayProducts(arr = products) {
  productList.innerHTML = "";
  arr.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>${formatINR(p.price)}</p>
      ${p.gender ? `<div class="gender">For: ${p.gender.charAt(0).toUpperCase() + p.gender.slice(1)}</div>` : ""}
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  cartCount.textContent = cart.length;
}

function showCart() {
  cartItemsList.innerHTML = "";
  if (cart.length === 0) {
    cartItemsList.innerHTML = "<li>Cart is empty.</li>";
  } else {
    cart.forEach(i => {
      const li = document.createElement("li");
      li.textContent = `${i.name} - ${formatINR(i.price)}`;
      cartItemsList.appendChild(li);
    });
  }
  cartModal.classList.remove("hidden");
}

function getFiltered() {
  const cat = Array.from(filters).filter(f => f.checked).map(f => f.value);
  const gen = Array.from(genderFilters).filter(g => g.checked).map(g => g.value);
  let tmp = products.filter(p =>
    (cat.length ? cat.includes(p.category) : true) &&
    (gen.length ? gen.includes(p.gender) : true)
  );

  const sort = sortSelect.value;
  if (sort === "low-high") tmp.sort((a, b) => a.price - b.price);
  else if (sort === "high-low") tmp.sort((a, b) => b.price - a.price);
  return tmp;
}

function applyFilters() {
  displayProducts(getFiltered());
}

filters.forEach(f => f.addEventListener("change", applyFilters));
genderFilters.forEach(g => g.addEventListener("change", applyFilters));
sortSelect.addEventListener("change", applyFilters);
cartBtn.addEventListener("click", showCart);
closeCartBtn.addEventListener("click", () => cartModal.classList.add("hidden"));

displayProducts();
