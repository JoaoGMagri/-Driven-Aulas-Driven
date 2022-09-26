const personagensCriados = [];

function criarPersonagem() {
  const nomeInput = document.querySelector(".codinome");
  const idSecretaInput = document.querySelector(".id-secreta");
  const poderInput = document.querySelector(".poder");
  const nacionalidadeInput = document.querySelector(".nacionalidade");

  const nome = nomeInput.value;
  const identidadeSecreta = idSecretaInput.value;
  const poder = poderInput.value;
  const nacionalidade = nacionalidadeInput.value;

  const heroi = {
    nomeHeroi: nome,
    identidadHeroi: identidadeSecreta,
    poderHeroi: poder,
    nacioHeroi: nacionalidade
  };

  personagensCriados.push(heroi);

  renderizarPersonagens();
}

function renderizarPersonagens() {
  const container = document.querySelector(".personagens-criados");
  container.innerHTML = "";

  for (let i = 0; i < personagensCriados.length; i++) {
    const personagem = personagensCriados[i];

    const li = `
      <li>
        Nome: ${personagem.nomeHeroi}<br>
        Identidade secreta: ${personagem.identidadHeroi}<br>
        Poder: ${personagem.poderHeroi}<br>
        Nacionalidade: ${personagem.nacioHeroi}<br><br>
      </li>
    `;

    container.innerHTML += li;
  }
}
