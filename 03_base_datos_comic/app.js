import { comic } from "./bd.js";

/* const infocomic = document.querySelector('.infocomic'); */
const personajes = document.querySelector('.personaje-list');


// Generación de Personajes
comic.personajes.forEach( char => {
        const div = document.createElement('div');
        div.classList.add('personaje');
        div.innerHTML = `
        <a href ="personajes.html?id=${char.id}">
          <img src="${char.imagen}"  alt="">
          <h3>${char.nombre}</h3>
          <p>${char.descripcion}</p>
        </a>
        `
        personajes.appendChild(div);
    })

const capitulos = document.querySelector('.capitulos-list');

console.log(capitulos);


// Generación de Capítulos
comic.capitulos.forEach( cap => {
        const div = document.createElement('div');
        console.log (cap.id)
        div.classList.add('capitulo');
        div.innerHTML = `
        <a href ="capitulos.html?id=${cap.id}">
          <img src="${cap.portada}"  alt="">
          <h3>${cap.name}</h3>
          <p>${cap.descripcion}</p>
        </a>         `
      capitulos.appendChild(div);
    })