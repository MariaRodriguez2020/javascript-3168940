import { comic } from "./bd";
const paramas= new URLSearchParams(window.location.search)
const id = parseInt(paramas.get("id"))

console.log("el id de el capitulo es", id)

const micapitulo = comic.capitulos.find(c => c.id === id)
console.log("el capitulo encontrado es:", micapitulo)

const contenedor = document.querySelector('.contenedor-capitulos');

console.log(contenedor);