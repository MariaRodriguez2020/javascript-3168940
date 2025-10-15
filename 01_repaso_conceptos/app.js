const luffyImg = document.getElementById('Luffy');
const btnBW = document.getElementById('btn1');
const btnBlur = document.getElementById('btn2');
const btnZoomRotate = document.getElementById('btn3');

function volver() {
  luffyImg.classList.remove('grayscale', 'blur', 'zoom-rotate');
}

btnBW.addEventListener('click', () => {
  volver();
  luffyImg.classList.add('grayscale');
});

btnBlur.addEventListener('click', () => {
  volver();
  luffyImg.classList.add('blur');
});

btnZoomRotate.addEventListener('click', () => {
  volver();
  luffyImg.classList.add('zoom-rotate');
});