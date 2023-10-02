document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const codigoProducto = urlParams.get("codigo");

  // Fetch para obtener el JSON de productos
  fetch("JSON/products.json")
    .then((response) => response.json())
    .then((data) => {
      const producto = data.find((item) => item.codigo === codigoProducto);

      if (producto) {
        const productoContenedor = document.querySelector(
          ".producto_contenedor"
        );

        const imagenContenedor = document.createElement("div");
        imagenContenedor.classList.add("imagen_contenedor");
        const img = document.createElement("img");
        img.classList.add("producto_imagen");
        img.setAttribute("src", producto.imagen);
        const textoContenedor = document.createElement("div");
        textoContenedor.classList.add("texto_contenedor");
        textoContenedor.innerHTML = `<h2>${producto.descripcion}</h2>
            <p class="texto_precio">Precio: $${producto.precio}</p>
            <p class="texto_envio">Envío Gratis</p>`;

        const divStar = document.createElement("div");
        divStar.classList.add("puntuacion");
        for (let i = 0; i < producto.puntuacion.length; i++) {
          let span = document.createElement("span");
          span.classList.add("star");
          span.innerHTML = "&#9733";
          divStar.appendChild(span);
        }

        imagenContenedor.appendChild(img);
        textoContenedor.appendChild(divStar);
        productoContenedor.appendChild(imagenContenedor);
        productoContenedor.appendChild(textoContenedor);

        const detalle = document.createElement("div");
        detalle.classList.add("detalle_producto");
        detalle.innerHTML = `<p>${producto.detalles}</p>`;

        productoContenedor.insertAdjacentElement("afterend", detalle);
      } else {
        console.log("El producto con ese código no fue encontrado");
      }
    })
    .catch((error) =>
      console.error("Error al obtener el JSON de productos:", error)
    );
});
