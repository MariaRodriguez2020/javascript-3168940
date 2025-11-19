const infocomic = document.querySelector('.info-comic');

console.log(infocomic);

infocomic.innerHTML = `

    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>genero:${comic.genero}</p>

    
    `
    
    console.log(comic.personajes);

    comic.personajes.forEach( char => {
        //crear elementos dinamicamente con javascript
        const div = document.createElement('div');
        div.classList.add('personaje');
        div.innerHTML = `
        <img"${char.imagen}" alt"">
        <p>${char.nombre}</p>
        <p>${char.descripcion}</p>
        
        `
        cardPersonaje.appendiChild(div)
        
    });