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
