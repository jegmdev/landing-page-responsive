document.getElementById("contact-form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Validación de campos
    if (name === "" || email === "" || message.length < 20) {
      alert("Por favor, completa todos los campos correctamente.");
      event.preventDefault();
    }
  });
  