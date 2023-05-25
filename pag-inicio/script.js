
// Función de búsqueda
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResultsElement = document.getElementById("search-results");
const products = [
    { name: "Jugo de Naranja", price: 2.50 },
    { name: "Jugo de Manzana", price: 2.00 },
    { name: "Batido de Fresa", price: 3.00 },
    { name: "Batido de Mango", price: 3.50 },
    // Agrega más productos aquí
];

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const results = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    renderSearchResults(results);
});

function renderSearchResults(results) {
    searchResultsElement.innerHTML = "";
    results.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        searchResultsElement.appendChild(li);
    });
}

// Botones de registro/inicio de sesión
const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Puedes almacenar los datos en el almacenamiento local si lo deseas
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  
  // Redirigir al usuario a la página de registro
  window.location.href = "registro.html";
});