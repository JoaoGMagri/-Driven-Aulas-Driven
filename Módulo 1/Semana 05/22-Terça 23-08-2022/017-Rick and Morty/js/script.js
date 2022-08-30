function buscarDados() {
  const pedido = axios.get("https://rickandmortyapi.com/api/character/118");
  pedido.then(dadosChegaram);
}
buscarDados();

function dadosChegaram(resposta) {
  renderizarPersonagem(resposta.data);
}

function renderizarPersonagem(personagem) {
  var elementoImagem = document.querySelector(".imagem-do-personagem");
  var elementoNome = document.querySelector(".nome");
  var elementoEspecie = document.querySelector(".especie");

  elementoImagem.src = personagem.image;
  elementoNome.innerHTML = personagem.name;
  elementoEspecie.innerHTML = personagem.species;
}
