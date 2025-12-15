import { comic } from "./bd.js";


const params = new URLSearchParams(window.location.search);
const id = params.get("id");


if (!id) {
  window.location.href = "index.html";
}


const capitulo = comic.capitulos.find(c => c.id == id);


if (!capitulo) {
  window.location.href = "index.html";
}


const contenedor = document.querySelector(".contenedor-capitulo");


contenedor.innerHTML = `
  <section class="card-capitulo">
    <h1>${capitulo.name}</h1>
    <img src="${capitulo.portada}" alt="${capitulo.name}">
    <p class="descripcion">${capitulo.descripcion}</p>
    <p class="info"><strong>Año:</strong> ${capitulo.year}</p>
    <p class="info"><strong>Personajes:</strong> ${capitulo.personajes}</p>
    <a href="index.html" class="boton-volver">Volver</a>
  </section>

  <div class="containervideos">
  <h2> video </h2>
  <video width="640" height ="360" controls>
  <source src="${capitulo.video}" type="video.mp4">
  </div>s
`;


