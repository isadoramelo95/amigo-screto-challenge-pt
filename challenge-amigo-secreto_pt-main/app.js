let listaDeNomes = [];

function adicionarAmigo() {
  let nome = document.querySelector("input").value;

  if (nome === "") {
    exibirListaNaTela("ul", "Preencha com seu nome no campo.");
  } else {
    listaDeNomes.push(nome);
    exibirNomesEMensagem();
  }

  limparCampo();
}

function exibirListaNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirNomesEMensagem() {
  exibirListaNaTela("ul", `${listaDeNomes}`);
}

function limparCampo() {
  let nome = document.querySelector("input");
  nome.value = "";
}
