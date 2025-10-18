
const pardo = document.getElementById("pardo");
pardo.addEventListener("click", () => {
  alert("¡Hola! Soy Pardo 🐻");
});

const panda = document.getElementById("panda");
panda.addEventListener("click", () => {
  panda.style.transform = "scale(1.3)";
  setTimeout(() => {
    panda.style.transform = "scale(1)";
  }, 800);
});

const polar = document.getElementById("polar");
polar.addEventListener("click", () => {
  polar.style.filter = "hue-rotate(90deg)";
  setTimeout(() => {
    polar.style.filter = "none";
  }, 1000);
});

const roca = document.getElementById("roca");
roca.addEventListener("click", () => {
  roca.style.transition = "transform 0.5s";
  roca.style.transform = "translateX(30px)";
  setTimeout(() => {
    roca.style.transform = "translateX(0)";
  }, 600);
});

const nube = document.getElementById("nube");
function moverNube() {
  nube.animate(
    [
      { transform: "translateX(0px)" },
      { transform: "translateX(200px)" },
      { transform: "translateX(0px)" }
    ],
    {
      duration: 7000,
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
}
moverNube();

const sol = document.getElementById("sol");
function moverSol() {
  sol.animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(-30px)" },
      { transform: "translateY(0px)" }
    ],
    {
      duration: 5000,
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
}
moverSol();
