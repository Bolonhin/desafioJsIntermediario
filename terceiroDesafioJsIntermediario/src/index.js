const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");
const enviar = document.getElementById("enter");
const obrigatorio = document.getElementsByClassName("label");

function testarCampos(nomeCampo, campo) {
  if (nomeCampo.value == "") {
    obrigatorio[campo].classList.add("erro");
    nomeCampo.classList.add("invalid");
  } else {
    nomeCampo.classList.remove("invalid");
    obrigatorio[campo].classList.remove("erro");
    nomeCampo.classList.add("validado");
  }
}
function testarnumero(nomeCampo, campo) {
  if (nomeCampo.value.length < 13) {
    obrigatorio[campo].classList.add("erro");
    nomeCampo.classList.add("invalid");
  } else {
    nomeCampo.classList.remove("invalid");
    obrigatorio[campo].classList.remove("erro");
    nomeCampo.classList.add("validado");
  }
}
function testarEmail(nomeCampo, campo) {
  if (
    nomeCampo.value.indexOf("@") == -1 ||
    nomeCampo.value.indexOf(".com") == -1
  ) {
    obrigatorio[campo].classList.add("erro");
    nomeCampo.classList.add("invalid");
  } else {
    nomeCampo.classList.remove("invalid");
    obrigatorio[campo].classList.remove("erro");
    nomeCampo.classList.add("validado");
  }
}

enviar.addEventListener("click", () => {
  testarCampos(nome, 0);
  testarCampos(email, 1);
  testarCampos(telefone, 2);
  testarCampos(mensagem, 3);
  testarnumero(telefone, 2);
  testarEmail(email, 1);
});
