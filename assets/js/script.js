document.addEventListener("DOMContentLoaded", function () {
    fetch("header.html") // Adjust path if needed
      .then(response => response.text())
      .then(data => {
        document.getElementById("header-container").innerHTML = data;
      })
      .catch(error => console.error("Error loading header:", error));
  });
  