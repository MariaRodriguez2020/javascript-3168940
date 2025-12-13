
    import { comic } from "./bd.js";

    // Obtener ID de la URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id) {
      window.location.href = "index.html";
    }

    // Buscar el capítulo por ID
    const capitulo = comic.capitulos.find(c => c.id == id);

    if (!capitulo) {
      window.location.href = "index.html";
    }

    // Mostrar la información del capítulo
    const contenedor = document.getElementById("capitulo-detalle");
    contenedor.innerHTML = `
      <div class="card-detalle">
        <h1>${capitulo.name}</h1>
        <div class="imagen-detalle" style="background-image:url('${capitulo.portada}')"></div>
        <p><strong>Año:</strong> ${capitulo.year}</p>
        <p>${capitulo.descripcion}</p>
        <p><strong>Personajes:</strong> ${capitulo.personajes}</p>
        <button>¡Leer Ahora!</button>
      </div>
    `;
 