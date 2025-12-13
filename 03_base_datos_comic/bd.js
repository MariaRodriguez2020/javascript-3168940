// bd.js
// Base de datos local del cómic (todo en español)
export let comic = {

  "año": "2025",
  "nombreComic": "vovi a nacer",
  "numeroEpisodios": "1",
  "genero": "introspectivo",
  "sinopsis": "Carlos Vives se sumerge en un viaje con su yo de 10 años donde la música lo inspira a seguir su carrera de artista y lo ayuda a enfrentar sus inseguridades.",
  "members": "carlos vives y carlos niño",
  "autores": "juan david y maria fernanda",

  // Imágenes del header para el carrusel (Rutias a imgcarrusel/ y nombres simplificados)
  "hero": [
    "./imgcarrusel/carrusel1.png",
    "./imgcarrusel/carrusel2.png",
    "./imgcarrusel/carrusel3.png"
  ],

  // PERSONAJES (Rutas a img/)
  "personajes": [
    {
      "id": 1,
      "nombre": "carlos vives",
      "descripcion": "Un artista consagrado que atraviesa una crisis creativa y busca reencontrarse con su esencia musical.",
      "imagen": "./img/carlos.png" 
    },
    {
      "id": 2,
      "nombre": "carlos niño",
      "descripcion": "Representa la inocencia, la inspiración y el amor puro por la música. Es la voz interior que guía al adulto.",
      "imagen": "./img/carlosnino.png" 
    }
  ],

  // CAPÍTULOS (Rutas a img/)
  "capitulos": [
    {
      "id": 1,
      "name": "el llamado del mar",
      "personajes": "carlos vives y carlos niño",
      "portada": "./img/capitulo1.png", 
      "year": "2025",
      "descripcion": "Carlos descubre un portal que lo lleva a revivir su niñez y reencontrarse con su esencia musical."
    },
    {
      "id": 2,
      "name": "ecos del camino",
      "personajes": "carlos vives y carlos niño",
      "portada": "./img/capitulo2.png", 
      "year": "2025",
      "descripcion": "El joven Carlos enfrenta sus miedos y comprende la importancia de su legado familiar."
    },
    {
      "id": 3,
      "name": "el despertar",
      "personajes": "carlos vives y carlos niño",
      "portada": "./img/capitulo3.png", 
      "year": "2025",
      "descripcion": "Ambos Carlos, el niño y el adulto, se reconcilian para crear juntos una nueva melodía de vida."
    }
  ]
};