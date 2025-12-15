import { comic } from "./bd.js";


const params = new URLSearchParams(window.location.search);
const id = params.get("id");


if (!id) {
  window.location.href = "index.html";
}


const personaje = comic.personajes.find(p => p.id == id);


if (!personaje) {
  window.location.href = "index.html";
}


const contenedor = document.querySelector(".contenedor-personaje");

contenedor.innerHTML = `
  <div class="card-personaje">
    <img class="img-personaje" src="${personaje.imagen}" alt="${personaje.nombre}">
    <h1>${personaje.nombre}</h1>
    <p>${personaje.descripcion}</p>
    <a href="index.html" class="boton-volver">Volver</a>
  </div>
`;
