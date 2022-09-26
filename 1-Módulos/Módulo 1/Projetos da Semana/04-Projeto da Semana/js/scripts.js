let receitas = []; 

// para pegar as receitas no servidor, preciso de 4 etapas
// etapa 1 - Preciso da biblioteca axios
// etapa 2: preciso pegar as receitas no servidor ( enviar a cartinha ) 
// etapa 3: receber a resposta (cartinha) do servidor 
// etapa 4: processar a resposta e mostrar na tela ( renderizar ) as receitas

function pergarDados(){ // funcao que irá enviar a cartinha pedido as receitas

    // etapa 2: preciso pegar as receitas no servidor ( enviar a cartinha ) 
    const promessa = axios.get('https://mock-api.driven.com.br/api/v2/tastecamp/receitas');
    promessa.then( dadosChegaram ); // agenda a execucao de uma funcao quando a resposta chegar
    
}
pergarDados();

// etapa 3: receber a resposta (cartinha) do servidor    
function dadosChegaram(resposta){ // funcao que será executada quando os dados chegarem do servidor

    console.log(resposta);
    // pegar a resposta com as minhas receitas
    console.log(resposta.data);
    
    // etapa 4: processar a resposta e mostrar na tela ( renderizar ) as receitas
    receitas = resposta.data;

    renderizarReceitas();
}


/* [
    {titulo:'Bolo de Chocolate', ingredientes:'ingredientes do bolo de chocolate', preparo:'preparo do bolo'},
    {titulo:'Pudim de leite condensado', ingredientes:'ingredientes do pudim', preparo:'preparo do púdim'},
    {titulo:'Brigadieiro', ingredientes:'ingredientes do brigadeiro', preparo:'preparo do brigadeiro'},    
];
 */

function renderizarReceitas(){
    // popular a lista de receitas no sidebar
    const ul = document.querySelector('.receitas');

    ul.innerHTML = '';

    for(let i = 0; i < receitas.length; i++){

        ul.innerHTML = ul.innerHTML + `
            <li>
                <ion-icon name="fast-food-outline"></ion-icon>
                ${receitas[i].titulo}
            </li>
        `;
    }
}

renderizarReceitas();

function adicionarReceita(){

    // pegar os dados preenchidos nos inputs
    const elementoTitulo = document.querySelector('.nome-receita');
    const elementIngredientes = document.querySelector('.ingredientes-receita');
    const elementoModoPreparo = document.querySelector('.modo-preparo-receita');

    // criar uma nova receita
    const novaReceita = {
        titulo: elementoTitulo.value,
        ingredientes: elementIngredientes.value,
        preparo: elementoModoPreparo.value
    }; 

    // enviar a receita (cartinha) para ser salva no servidor
    const promessa = axios.post('https://mock-api.driven.com.br/api/v2/tastecamp/receitas', novaReceita); 
    promessa.then( pergarDados ); // se der certo
    promessa.catch( deuErro ); // se der erro

    // adicionar essa receita na minha lista
    //receitas.push(novaReceita);

    // exibir ( renderizar ) a nova receita na tela ( html )
    renderizarReceitas();
}

function deuErro(erro){
    console.log(erro.response.status);
        
    if ( erro.response.status === 404) {
        alert('Recurso não encontrado!');
    }
    if ( erro.response.status === 409) {
        alert('Essa receita já existe! Escolha um outro nome');
    }
    if ( erro.response.status === 422) {
        alert(' O título da receita precisa ter pelo menos 3 caracteres e os demais campos precisa de no menos 10 caracteres');
    }

}