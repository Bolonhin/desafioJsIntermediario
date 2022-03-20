const voltar = document.getElementById("btVoltar");
const avancar = document.getElementById("btAvancar");
let indiceEslide = 1;
let quadros = document.getElementsByClassName("quadros");

function aparecerQuadro() {
  quadros[indiceEslide].classList.add("mostrar");
}
function esconderQuadro() {
  quadros[indiceEslide].classList.remove("mostrar");
}


voltar.addEventListener("click", () => {
  if (indiceEslide >= 1) {
     indiceEslide--;
    esconderQuadro();
    if(indiceEslide <=1){
        voltar.classList.add("opacidadeSeta");
    }
    if(indiceEslide <=4){
        avancar.classList.remove("opacidadeSeta");
    }  
  }
});
avancar.addEventListener("click", () => {
  if (indiceEslide <= 4) {
    aparecerQuadro();
    indiceEslide++;
    if(indiceEslide >=4){
        avancar.classList.add("opacidadeSeta");
    }
    if(indiceEslide >=1){
        voltar.classList.remove("opacidadeSeta");
    }
  } 
});
