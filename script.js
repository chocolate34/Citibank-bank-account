document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from refreshing the page

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Sergioperea" && password === "drchoco@34") {
    // Simulate redirect after login
    window.location.href = "dashboard.html"; // Or show dashboard section
  } else {
    document.getElementById("error-message").textContent = "Invalid username or password.";
  }
});
