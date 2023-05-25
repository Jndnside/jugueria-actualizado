const registerForm = document.getElementById("input-contenedor");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Puedes almacenar los datos en el almacenamiento local si lo deseas
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  
  // Redirigir al usuario a la página de registro
  window.location.href = "";
});