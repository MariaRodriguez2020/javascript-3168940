const oso= document.querySelectorAll(".oso")
const tablero = document.querySelector ("#contador-numero")

let counter = 0
console.log(oso, tablero)

// funciones 

oso.forEach ( item => {
    item.style.filter = "grayscale(1)"

    item.addEventListener("click", ()=> {
        item.style.filter = "grayscale(1)"
        item.classList.add("saltar")
        counter++
        tablero.textContent = counter
    })

 

})

// variable 

const escena = document.querySelectorAll(".escena")
const anterior = document.querySelectorAll(".anterior")
const siguiente = document.querySelectorAll(".siguiente")
const miniatura = document.querySelectorAll(".miniatura")

let indice = 0

console.log(escena)
console.log(siguiente)
console.log(anterior)
console.log(miniatura)

//funciones 

function mostrarEscena(1){

    for(let j = 0;j <escenas . length; j++){
        escenas [j].classList.remove("activa")

        indice = 1
    }
}