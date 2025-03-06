// Uma classe possui métodos
class MinhaPilha {

    constructor() {
        this.items = []; // Usamos um objeto para armazenar os itens do array
        this.tamanho = 0; // Mantemos o controle do tamnho do array
    }

    // Adiciona um elemento no topo da pilha
    adicionar(elemento) {
        this.items[this.tamanho] = elemento; // Insere o elemento na posição atual do tamanho
        this.tamanho++; // Incrementa o tamanho
    }

    // Remove e retorna o elemento do topo da pilha
    remover() {
        if (this.tamanho === 0) {
            return undefined; // Se a pilha  estiver vazia, não tem o que retorna
        }

        const ultimoItem = this.items[this.tamanho - 1]; // Armazena o último item
        delete this.items[this.tamanho - 1]; // Remove o ultimo item da pilha
        this.tamanho--; // Decrementa o tamanho

        return ultimoItem; // Retorna o item removido
    }

    // Retorna o elemento no topo da pilha sem removê-lá
    topo() {
        if (this.tamanho === 0) {
            return undefined; // Se a pilha estiver vazia, não tem o que retorna
        }
        return this.items[this.tamanho - 1]; // Retorna o elemento no topo da pilha
    }

    // Mostra se a pilha está vazia
    estaVazia() {
        return this.tamanho === 0; // Se estiver vazia, retorna TRUE, se tiver algum elemento, retorna FALSE
    }

    // Mostra o tamanho atual da pilha (quantidade de elementos)
    tamanhoPilha() {
        return this.tamanho; // Retorna o tamanho da pilha
    }

    // Limpa a pilha
    limpar() {
        this.items = {}; // Reseta os items
        this.tamanho = 0; // Reinicializa o tamanho
    }

    listar() {
        if (this.tamanho === 0) {
            return undefined; // Se a pilha estiver vazia, não tem o que retorna
        }
        return this.ites;
    }
}

// Exemplos de uso
let minha_variavel = new MinhaPilha();

minha_variavel.adicionar(10);
minha_variavel.adicionar(20);
minha_variavel.adicionar(30);

console.log(minha_variavel.topo()); // Saída: 30 (Elemento no topo, o último q foi colocado
console.log(minha_variavel.remover()); // Saída: 30 (Remove o elemento do topo)
console.log(minha_variavel.topo()); // Saída: 20 (Agora o topo é 20)

console.log(minha_variavel.tamanhoPilha()); // Saída: 2 (Dois elementos restantes)


// -----------------------------------------------------------------------------------------


// Exercício do feitiçeiro Eldrin
let var_feitico = new MinhaPilha();

// Adicionar um novo feitiço no topo da pilha
var_feitico.adicionar("kwnfieife");
var_feitico.adicionar("enfiergburgn");
console.log("ITEM ADICIONADO: " + var_feitico.topo());

// Remover o feitiço do topo da pilha
console.log("ITEM REMOVIDO: " + var_feitico.remover());

// Ver qual feitiço está no topo da pilha sem removelo
console.log("FEITICO NO TOPO DA PILHA: " + var_feitico.topo());

// Verificar se não há mais feitiços na pilha
console.log("ESTÁ VAZIA? " + var_feitico.estaVazia());



// Exercício utilizando o DO WHILE (REPITA) para menu, e o SWITCH CASE (ESCOLHA CASO) para navegação do menu
let feitico_livro = new MinhaPilha();

const read = require('readline-sync');
let opcao;

do {
    console.log("=== BEM VINDO AO SPELLSTACK ===");
    console.log("| 1 - Adicionar um novo feitiço no topo da pilha")
    console.log("| 2 - Remover o feitiço do topo da pilha");
    console.log("| 3 - Ver qual feitiço está no topo da pilha sem removê-lo");
    console.log("| 4 - Verificar se não há mais feitiços na pilha");
    console.log("| 0 - Sair")
    opcao = parseInt(read.question("R: "));

    console.log(opcao);

    switch (opcao) {

        case 1:
            console.log("Qual feitiço deseja adicionar?");
            feitico_livro.adicionar(read.question("R: "));
        break;

        case 2:
            feitico_livro.remover();
            console.log("Feitiço removido do topo da pilha!");
        break;

        case 3:
            console.log("ITEM NO TOPO DA PILHA - " + feitico_livro.topo());
        break;

        case 4:
            console.log("PILHA ESTÁ VAZIA? - " + feitico_livro.estaVazia());
        break;

        case 0:
            console.log("ADEUS");
        break;

        default:
            console.log("Opção Inválida");
        break;
    }

} while (opcao != 0)