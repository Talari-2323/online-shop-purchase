// Sample data for suggestions
const items = [
  "Mobile Phone",
  "Smart Watch",
  "Bluetooth Headphones",
  "Men's Shoes",
  "Women's Dresses",
  "Laptop Stand",
  "Home Decor",
  "Electric Kettle",
  "Wall Clock",
  "Gaming Mouse"
];

// Show filtered suggestions
function showSuggestions(value) {
  const suggestionsList = document.getElementById("suggestionsList");
  suggestionsList.innerHTML = "";

  if (value.trim() === "") return;

  const filtered = items.filter(item =>
    item.toLowerCase().includes(value.toLowerCase())
  );

  filtered.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.onclick = () => {
      document.getElementById("searchInput").value = item;
      suggestionsList.innerHTML = "";
    };
    suggestionsList.appendChild(li);
  });
}

// Handle search submission
function submitSearch() {
  const searchValue = document.getElementById("searchInput").value.trim();
  if (searchValue === "") {
    alert("Please enter a search term.");
    return;
  }

  // You can replace this with actual search or redirection logic
  console.log("Searching for:", searchValue);
  alert(`Searching for: ${searchValue}`);
}
