let listPokemons = [];
let lista = [];

function carregarPokemons(resposta) {
  listPokemons = resposta.data;
  console.log(resposta.data);
  renderizarPokemons(listPokemons);
  filtrarPokemonsFogo();
  aumentarHealthPokemons();
}

function tratarErro(erro) {
  console.log(erro.response);
}

const promessa = axios.get("https://driven-pokemons.herokuapp.com/pokemons");

promessa.then(carregarPokemons);
promessa.catch(tratarErro);

function PokemonDiv(pokemon) {
  return `
    <div class="pokemon">  
      <img class="profile" src="${pokemon.img}">
      <span class="${pokemon.type}">${pokemon.name}</span>
      <div class="health">
        <img src="https://w7.pngwing.com/pngs/537/105/png-transparent-8-bit-color-heart-tar-miscellaneous-heart-poster.png">
        <span>${pokemon.health}</span>
        </div>
    </div>
  `;
}

function renderizarPokemons(pokemons) {
  let app = document.querySelector(".app");
  app.innerHTML = "";

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    app.innerHTML += PokemonDiv(pokemon);
  }
}
function eFogo(pokemon) {
  if (pokemon.type === "fire") {
    return true;
  } else {
    return false;
  }
}

function filtrarPokemonsFogo() {
  lista = listPokemons.filter(eFogo);
  console.log(lista);
  renderizarPokemons(lista);
}

function aumentaSaude(pokemon) {
  const novo = {
    name: pokemon.name,
    type: pokemon.type,
    img: pokemon.img,
    health: pokemon.health + 20
  };

  return novo;
}

function aumentarHealthPokemons() {
  const maisSaudaveis = lista.map(aumentaSaude);
  console.log(maisSaudaveis);
  renderizarPokemons(maisSaudaveis);
}

// tire os comentários para testar
//filtrarPokemonsFogo();
//aumentarHealthPokemons();
