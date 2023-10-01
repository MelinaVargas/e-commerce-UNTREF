"use strict";

window.addEventListener("load", () => {
  let productos = [];
  let listaProductos = document.getElementById("listaProductos");

  fetch("../JSON/productos.json")
    .then((data) => data.json())
    .then((data) => {
      productos = data;

      productos.map((producto, i) => {
        let templateString = `
        <tr>
            <td>${producto.descripcion}</td>
            <td>${producto.detalle}</td>
            <td><i class="fa-solid fa-magnifying-glass"></i></td>
        </tr>
        `;

        listaProductos.insertAdjacentHTML("beforeend", templateString);
      });
    });
});
