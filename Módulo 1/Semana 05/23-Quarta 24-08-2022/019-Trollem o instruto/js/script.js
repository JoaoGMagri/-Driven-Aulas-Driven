function inserirReceita() {
  const titulo = document.querySelector(".titulo-receita").value;
  const ingredientes = document.querySelector(".ingredientes-receita").value;
  const preparo = document.querySelector(".preparo-receita").value;

  const promessa = axios.post(
    "https://mock-api.driven.com.br/api/v2/tastecamp/receitas",
    {
      titulo: titulo,
      ingredientes: ingredientes,
      preparo: preparo
    }
  );

  promessa.then(receitaCadastradaComSucesso);
  promessa.catch(deuErro);
}

function receitaCadastradaComSucesso() {
  alert("Receita cadastrada com sucesso!");
  const divErro = document.querySelector(".imagem-erro");
  divErro.innerHTML = "";
}

function deuErro(erro) {
  const divErro = document.querySelector(".imagem-erro");
  divErro.innerHTML = `<img src="./img/${erro.response.status}.jpg">`;
}
