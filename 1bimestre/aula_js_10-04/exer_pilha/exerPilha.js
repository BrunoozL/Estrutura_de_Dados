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
        return this.items;
    }
}

module.exports = MinhaPilha;