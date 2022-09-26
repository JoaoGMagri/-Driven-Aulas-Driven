const personagens = [
    { nome: "Irmão do Jorel", idade: 8, raca: "humano" },
    { nome: "Jorel", idade: 16, raca: "humano" },
    { nome: "Nico", idade: 12, raca: "humano" },
    { nome: "Lara", idade: 8, raca: "humano", falar: function () { console.log("Você chama alguém de mulherzinha quando a pessoa é incrível!") } },
    { nome: "Vovo Juju", idade: undefined, raca: "Vovo", falar: function () { console.log("Abacate faz bem pro cabelo...") } },
    { nome: "Gesonel", idade: 2, raca: "pato" },
    { nome: "Fabrício", idade: 2, raca: "pato" },
    { nome: "Danúbio", idade: 2, raca: "pato" }
]

//1. Retorne apenas os `patos`
function Retorna_Patos() {
    let patos = personagens.filter(item => item.raca === "pato");
    console.log("1. Todos os patos são: ", patos);
}
Retorna_Patos();

//2. Retorne apenas os personagens com a função falar
function Retorna_FunFalar() {
    let comFalas = personagens.filter(item => item.falar);
    console.log("2. Esses personagens tem fala:", comFalas);
}
Retorna_FunFalar();

//3. Retorne apenas os personagens com idade maior que 4
function Retorna_IdadeMaiorQue4() {
    let IdadeMaior = personagens.filter(item => item.idade >= 4);
    console.log("3. Esses personagens tem idade maior que 4:", IdadeMaior);
}
Retorna_IdadeMaiorQue4();

//4. Retorne um novo array apenas com os nomes dos personagens 
function nomes() {
    let nomes = personagens.map(item => item.nome);
    console.log("4. O nome de todos os personagens:", nomes);
}
nomes();

//5. Retorne em um novo array as idades dos personagens incrementada em 1. Para personagens sem idade definida retorne a idade como undefined.
function idades() {
    let idades = personagens.map(item => item.idade === undefined ? item.idade : item.idade + 1);
    console.log("5. A idade de todos os personagens + 1:", idades);
}
idades();

//6. Retorne um novo array apenas com os nomes de todos os personagens humanos.
function nomeDosHumanos() {
    let nomes = personagens.filter(item => item.raca === "humano").map(item => item.nome);
    console.log("6. Os nomes dos personagens humanos:", nomes);
}
nomeDosHumanos();

//7. Execute todas as funções falar - Atenção, sem gerar erros.
function executarFalas() {
    let falas = personagens.filter(item => item.falar).map(item => item.falar);
    console.log("7. As Falas são:");
    falas.forEach(item => item());
}
executarFalas();

//8. Retorne um novo array de objetos com todos os personagens, porém cada objeto deve ter apenas os atributos nome e idade.
function nomesEIdades() {
    let nomes_Idades = [];

    personagens.forEach( item => {
        let novoPersonagem = {
            nome: item.nome,
            idade: item.idade
        }
        nomes_Idades.push(novoPersonagem)}
    );
    console.log("8. Array de nome e idade:", nomes_Idades);
}
nomesEIdades();

//9. Retorne um novo array de objetos apenas com os personagens que possuem a função falar, cada objeto deve ter apenas nome e falar. Porém a função falar deve ser reescrita para exibir no console a mensagem “Oi meu nome é ” NOME_DO_PERSONAGEM. Por fim, execute a nova função falar.
function  falas() {
    let personagem = [];

    personagens.filter(item => item.falar).forEach( item => {
        let novoPersonagem = {
            nome: item.nome,
            falar: function () { console.log("Oi meu nome é", item.nome) }
        }
        personagem.push(novoPersonagem)}
    );
    console.log("9. Array de nome e idade:", personagem);
    personagem.forEach(item => item.falar());

}
falas()