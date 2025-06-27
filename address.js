document.getElementById("addressForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  // Get form values
  const fullName = document.getElementById("fullName").value.trim();
  const street = document.getElementById("street").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();
  const zip = document.getElementById("zip").value.trim();
  const country = document.getElementById("country").value.trim();

  // Optional: Validate ZIP code format (basic)
  const zipRegex = /^[0-9]{4,10}$/;
  if (!zipRegex.test(zip)) {
    alert("Please enter a valid ZIP/Postal Code.");
    return;
  }

  // Save data (optional - localStorage example)
  const address = {
    fullName,
    street,
    city,
    state,
    zip,
    country
  };

  localStorage.setItem("userAddress", JSON.stringify(address));

  // Show success message
  const successMsg = document.getElementById("successMsg");
  successMsg.textContent = "✅ Address saved successfully!";
  successMsg.style.color = "green";

  // Optional: Clear form after submission
  document.getElementById("addressForm").reset();
});
