// Toggle password visibility
function togglePassword() {
  const passwordField = document.getElementById('password');
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
  } else {
    passwordField.type = 'password';
  }
}

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  // Basic validation (for demo purposes)
  if (!email || !password) {
    errorMsg.textContent = 'Please enter both email and password.';
    return;
  }

  // Simulate successful login
  errorMsg.textContent = '';
  alert('Login successful for Emmom!');
  // Redirect or perform real authentication here
});