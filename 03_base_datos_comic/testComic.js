const infocomic = document.querySelector('.infoComic');
const cardPersonajes = document.querySelector('.personajes-container');
console.log(infocomic);

/* infocomic.innerHTML = `

    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>genero:${comic.genero}</p>

    
    `
    
    console.log(comic.personajes);
 */
    comic.personajes.forEach( char => {
        //crear elementos dinamicamente con javascript
        const div = document.createElement('class');
        div.classList.add('personajes');
        div.innerHTML = `
        <img src="${char.imagen}"  alt="">
        <h3>${char.nombre}</h3>
        <p>${char.descripcion}</p>
    
        `
        cardPersonajes.appendChild(div);
    })

// CAPITULOS //


const cardCapitulos = document.querySelector('.cards');

comic.capitulos.forEach( char => {
        //crear elementos dinamicamente con javascript
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src="${char.portada}"  alt="">
        <h3>${char.name}</h3>
        <p>${char.descripcion}</p>
    
        `
        cardCapitulos.appendChild(div);
    })