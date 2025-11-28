import { comic } from "./bd.js";

/* const infocomic = document.querySelector('.infocomic'); */
const personajes = document.querySelector('.personaje-list');


comic.personajes.forEach( char => {
        //crear elementos dinamicamente con javascript
        const div = document.createElement('div');
        div.classList.add('personaje');
        div.innerHTML = `
        <img src="${char.imagen}"  alt="">
        <h3>${char.nombre}</h3>
        <p>${char.descripcion}</p>
        `
        personajes.appendChild(div);
    })

const capitulos = document.querySelector('.capitulos-list');

console.log(capitulos);


comic.capitulos.forEach( cap => {
        //crear elementos dinamicamente con javascript
        const div = document.createElement('div');
        console.log (cap.id)
        div.classList.add('capitulo');
        div.innerHTML = `
        <a href ="capitulos.html?id=${cap.id}">
        <img src="${cap.portada}"  alt="">
        <h3>${cap.name}</h3>
        <p>${cap.descripcion}</p>
        a/>
        `
      capitulos.appendChild(div);
    })




