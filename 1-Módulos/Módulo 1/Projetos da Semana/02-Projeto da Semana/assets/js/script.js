let jogo;
let qtedeJogadores;

function perguntarIdade() {
    
    const ano = Number(prompt("Ano de nascimento"));

    const anoAtual = 2022;
    const idade = anoAtual - ano;
  
    if ( idade > 17 ) {
        const painel = document.querySelector('.selecionar-jogo');
        painel.classList.remove('escondido');
    }else{
        const paragrafo = document.querySelector('.aviso');
        paragrafo.innerHTML = `Opa! Foi mal! Você tem ${idade} ano e por isso não tem idade para jogar`
    }

}
  
function selecionarJogo(classBotao) {
    
    const botaoSelecionado = document.querySelector('.jogo .selecionado');
    
    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
    }

    const seletor = '.'+classBotao;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado');

    jogo = botao.innerHTML;
}

function selecionarQtdeJogadores(botao) {
    
    const botaoSelecionado = document.querySelector('.qtd-jogadores .selecionado');
    
    if (botaoSelecionado !== null){
        botaoSelecionado.classList.remove('selecionado');
    }

    botao.classList.add('selecionado');

    qtedeJogadores = botao.innerHTML; 
}

function jogar() {
    
    const painel = document.querySelector('.selecionar-jogo');
    painel.classList.add('escondido');

    
    const painelIniciarJogo = document.querySelector('.loading-overlay');
    painelIniciarJogo.classList.remove('escondido')
    
    const paragrafo = document.querySelector('.mensagem-iniciando')
    paragrafo.innerHTML = `INCIANDO POKER 100  com o jogo ${jogo} e quantidade de jogadores ${qtedeJogadores}`;

    
}