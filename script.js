document.getElementById("inicio-link").addEventListener("click", function (e) {
  e.preventDefault(); 

  const contenido = document.getElementById("contenido-inicio");

  if (contenido.style.display === "block") {
      contenido.style.display = "none";
  } else {
      contenido.style.display = "block"; 
  }
});


console.log("Bienvenido a la página web de la Farmacia VitaMed");

document.addEventListener("DOMContentLoaded", function () {
  const buscador = document.getElementById("buscador");
  const productos = document.querySelectorAll(".producto");

  buscador.addEventListener("input", function () {
    const valor = buscador.value.toLowerCase();

    productos.forEach(function (producto) {
      const nombre = producto.getAttribute("data-nombre").toLowerCase();

      if (nombre.includes(valor)) {
        producto.style.display = "block";
        producto.style.opacity = "1";
        producto.style.transform = "scale(1)";
        producto.classList.add('encontrado');
      } else {
        producto.style.opacity = "0";
        producto.style.transform = "scale(0.95)";
        producto.classList.remove('encontrado');
        setTimeout(() => {
          producto.style.display = "none";
        }, 200);
      }
    });
  });

  buscador.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });

  const btnMostrar = document.getElementById('mostrar-productos');
  if (btnMostrar) {
    btnMostrar.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('seccion-productos').style.display = 'block';
    });
  }
});
