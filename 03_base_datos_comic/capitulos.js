import { comic } from "./bd";
const paramas= new URLSearchParams(window.location.search)
const id = parseInt(paramas.get("id"))

console.log("el id delo personaje es", id)