const tarefas = [
    'Adicione uma tarefa no botão acima ☝️',
    'Passe o mouse na tarefa para ver o botão excluir 🗑️',
    'Clique na tarefa para marca-la como feita ✔️'
];

let contador = 3;
atualizaContador()

function adicionaTarefasNoDOM() {
    
    const lista = document.querySelector('ul');

    lista.innerHTML = '';

    for (let i = 0; tarefas.length > i; i++) {
        let item = `
            <li>
                <div onclick="excluir(this)" class="btn-delete">
                    <ion-icon name="trash-outline" role="img" class="md hydrated" aria-label="trash outline"></ion-icon>
                </div>
                <span onclick="finalizarTarefa(this)">${tarefas[i]}</span>
            </li>
        `;

        lista.innerHTML += item;
    }

}
adicionaTarefasNoDOM();

function finalizarTarefa(item){

    const liPai = item.parentNode;

    // se a tarefa estiver finalizada
    if ( liPai.classList.contains('finalizada')){        
        liPai.classList.remove('finalizada');
        contador++;       
        atualizaContador(); 
    }else{        
        liPai.classList.add('finalizada');
        contador--;
        atualizaContador();
    }
}

function finalizaTodasTarefas() {
    const itens = document.querySelectorAll('li');
    const qtde = itens.length;
    let i = 0;

    while ( qtde > i ) {
        itens[i].classList.add('finalizada');
        i++;
    }

    contador = 0;
    atualizaContador();
}

function adicionarTarefa() {

    const tarefaDigitada = document.querySelector('input').value;
    
    tarefas.push(tarefaDigitada);

    contador++;
    adicionaTarefasNoDOM();
    atualizaContador();

}

function excluir(elemento) {

    const exclui = prompt("Deseja mesmo excluir a tarefa??");

    if (exclui === 'sim') {
        const li = elemento.parentNode;
        li.remove();
        contador--;

        atualizaContador();
    }

}

function atualizaContador() {

    const elemento = document.querySelector('.header span');

    elemento.innerHTML = contador;

}