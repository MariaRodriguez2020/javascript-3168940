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
        div.classList.add('capitulo');
        div.innerHTML = `
        <img src="${cap.portada}"  alt="">
        <h3>${cap.name}</h3>
        <p>${cap.descripcion}</p>
        `
      capitulos.appendChild(div);
    })



comic.capitulo. forEach(cap => {
const div = document.createElement ('div');
div.classList.add ('capitulos');
div.innerHTML = `
<div class="capitulo">
<div class=" imagen">
<img src="${CAPITULO1.png}" alt="Capítulo 1"></ing>
</div>
<div class="detalles-capitulo">
<h3>${cap.nombre}</h3>
<p»${cap.descripcion}</p>
<p class="personajes"><strong>Personajes:</strong> $(cap-personaje)</p»
<a href="capitulos.html"><button class="vercapitulo">ver capitulo</button></a
</div>
`;
capitulos.appendChild(div);

} );
