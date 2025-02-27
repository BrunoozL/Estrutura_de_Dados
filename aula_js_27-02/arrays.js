class MeuArray {

    constructor()
    {
        this.items = {}; // Usamos um objeto para armazenar os itens do array
        this.tamanho = 0; // Mantemos o controle do tamanho do array

    }

    // Adiciona um elemento no final do array
    adicionar(elemento)
    {
        this.items[this.tamanho] = elemento; // Insere o elemento na posição atual do tamanho
        this.tamanho++; // Incrementa o tamanho
    }

    // Remove o último elemento do array
    remover()
    {
        if (this.tamanho === 0)
        {
            return undefined; // Se o array estiver vazio, não há o que remover
        }

        const ultimoItem = this.items[this.tamanho - 1]; // Armazena o último item
        delete this.items[this.tamanho - 1]; // Remove o último item do array
        this.tamanho--; // Decrementa o tamanho

        return ultimoItem; // Retorna o item removido
    }

    // Acessa o elemento em um índice específico
    obterElemento(indice)
    {
        if(indice < 0 || indice >= this.tamanho)
        {
            return undefined; // Se o índice estiver fora do alcance, retorna undefined
        }
        return this.items[indice]; // Retorna o item no índice solicitado
    }

    // Retorna o tamanho do array
    tamanhoArray()
    {
        return this.tamanho; // Retorna o valor do tamanho atual do array
    }

    // Remove todos os elementos do array
    limpar()
    {
        this.items = {}; // Limpa o objeto
        this.tamanho = 0; // Reinicializa o tamanho
    }
}

// ------------------------------------------------------------------

// Exemplo de uso
let minha_variavel = new MeuArray();

minha_variavel.adicionar(10); // Posicão 0
minha_variavel.adicionar(20); // Posição 1
minha_variavel.adicionar(30); // Posição 2

console.log(minha_variavel.obterElemento(1)); // Saída: 20 - pois a posição 1 não é o primeiro elemento
console.log(minha_variavel.tamanhoArray()); // Saída: 3

console.log(minha_variavel.remover()); // Saída: 30 - pois remove o último elemento
console.log(minha_variavel.tamanhoArray()); // Saída: 2