import { comic } from "./bd.js";



const personajes = document.querySelector('.personaje-list');

if (personajes) {
    comic.personajes.forEach(char => {
        const div = document.createElement('div');
        div.classList.add('personaje');
        div.innerHTML = `
            <a href="personajes.html?id=${char.id}" class="enlace-personaje">
                <img src="${char.imagen}" alt="${char.nombre}">
                <h3>${char.nombre}</h3>
                <p>${char.descripcion}</p>
            </a>
        `;
        personajes.appendChild(div);
    });
}


const capitulos = document.querySelector('.capitulos-list');

if (capitulos) {
    comic.capitulos.forEach(cap => {
        const div = document.createElement('div');
        div.classList.add('capitulo');
        div.innerHTML = `
            <a href="capitulos.html?id=${cap.id}" class="enlace-capitulo">
                <img src="${cap.portada}" alt="${cap.name}">
                <h3>${cap.name}</h3>
                <p>${cap.descripcion}</p>
            </a>
        `;
        capitulos.appendChild(div);
    });
}
