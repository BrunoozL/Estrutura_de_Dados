class Fila
{
    constructor()
    {
        this.items = {};
        this.inicio = 0;
        this.fim = 0;
    }

    // Adiciona
    enqueue(elemento)
    {
        this.items[this.fim] = elemento;
        this.fim++;
    }

    // Remove e retorna o primeiro elemento da fila (dequeue)
    dequeue()
    {
        if(this.isEmpty())
        {
            return undefined; // Se a fila estiver vazia, retorna undefined
        }

        const item = this.items[this.inicio]; // Obtém o primeiro elemento e guardamos na CONST 'item'
        delete this.items[this.inicio]; // Remove o item do inicio da fila
        this.inicio++; // Move o índice do inicio para o próximo item

        // Quando o inicio e o fim estiverem alinhados, redefine a fila
        if(this.inicio === this.fim)
        {
            this.inicio = 0;
            this.fim = 0;
        }

        return item; // Retorna o item removido
    }

    // Retorna o primeiro elemento da fila sem removê-lo (peek)
    front()
    {
        if(this.isEmpty())
        {
            return undefined; // Se a fila estiver vazia, retorna undefined
        }
        return this.items[this.inicio]; // Retorna o primeiro elemento
    }

    // Verifica se a fila está vazia
    isEmpty()
    {
        return this.fim === this.inicio; // Verifica se os índices estão iguais 
    }

    // Retorna o tamanho da fila
    size()
    {
        return this.fim - this.inicio; // Calcula a diferenã entre fim e inicio
    }

    // Limpa a fila
    clear()
    {
        this.items = {};    //
        this.inicio = 0;    // Resetando tudo para limpar a fila
        this.fim = 0        //
    }
}

module.exports = Fila;