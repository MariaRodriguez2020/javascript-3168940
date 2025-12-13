
    import { comic } from "./bd.js";

    // Obtener ID de la URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    // Si no hay ID, redirigir al index
    if (!id) {
      window.location.href = "index.html";
    }

    // Buscar el personaje por ID
    const personaje = comic.personajes.find(p => p.id == id);

    // Si no existe, regresar al index
    if (!personaje) {
      window.location.href = "index.html";
    }

    // Mostrar la información del personaje
    const contenedor = document.getElementById("personaje-detalle");
    contenedor.innerHTML = `
      <div class="card-detalle">
        <h1>${personaje.nombre}</h1>
        <div class="imagen-detalle" style="background-image:url('${personaje.imagen}')"></div>
        <p>${personaje.descripcion}</p>
      </div>
    `;
