let amigos = [];

function adicionarAmigo() {
  let nome = document.querySelector('input').value;

  if (nome === '') {
    exibirNomesDeAmigos('ul', 'Por favor, insira um nome.');
  } else {
    amigos.push(nome);
    atualizarListaAmigos();
  };

  limparCampo();
}

function atualizarListaAmigos() {
    let listaAtualizada = exibirFormatoDeLista(amigos);
    exibirNomesDeAmigos('ul', listaAtualizada);
}

function exibirNomesDeAmigos(tag, mensagem) {
  let campoLista = document.querySelector(tag);
  campoLista.innerHTML = mensagem;
}

function exibirFormatoDeLista(lista) {
    lista.innerHTML = "";
    return lista.map(item => `<li>${item}</li>`).join('');
}

function limparCampo() {
  let nome = document.querySelector('input');
  nome.value = '';
}

function sortearAmigo() {

    if (amigos.length > 0) {
        let nomeEscolhido = amigos[Math.floor(Math.random() * amigos.length)];
        exibirNomesDeAmigos('ul', `O amigo sorteado foi: ${nomeEscolhido}`); 
    } else {
        exibirNomesDeAmigos('ul', 'Por favor, preencha os nomes para o sorteio começar.')
    }

}	
