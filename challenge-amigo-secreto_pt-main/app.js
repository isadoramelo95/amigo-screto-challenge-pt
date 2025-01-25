let listaDeNomes = [];

function adicionarAmigo() {
  let nome = document.querySelector("input").value;

  if (nome === '') {
    exibirListaNaTela('ul', 'Preencha com seu nome no campo.');
  } else {
    listaDeNomes.push(nome);
    exibirListaNaTela('ul', `${listaDeNomes}`);
  }

  limparCampo();
}

function exibirListaNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function limparCampo() {
  let nome = document.querySelector("input");
  nome.value = "";
}

function sortearAmigo() {
    let nomeEscolhido = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)];
    exibirListaNaTela('ul', `O amigo sorteado foi: ${nomeEscolhido}`); 
}	
