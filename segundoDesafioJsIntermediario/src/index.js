const primeiraOpcao = document.getElementsByTagName("input");
const quadro = document.getElementsByClassName("respostas");
const seta = document.getElementsByClassName("imagem");

function esconder() {
  quadro[0].classList.remove("aparecer");
  quadro[1].classList.remove("aparecer");
  quadro[2].classList.remove("aparecer");
  seta[0].classList.remove("imagemSeta");
  seta[1].classList.remove("imagemSeta");
  seta[2].classList.remove("imagemSeta");
}
function aparecerResposta(valoQuadro) {
  esconder();
  quadro[valoQuadro].classList.add("aparecer");
  seta[valoQuadro].classList.add("imagemSeta");
}
primeiraOpcao[0].addEventListener("click", () => {
  aparecerResposta(0);
});
primeiraOpcao[1].addEventListener("click", () => {
  aparecerResposta(1);
});
primeiraOpcao[2].addEventListener("click", () => {
  aparecerResposta(2);
});
