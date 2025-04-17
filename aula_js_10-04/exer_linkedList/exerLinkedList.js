// Classe Node para estruturar a nossa LinkedList
class Node {
    
    constructor(value)
    {
        this.value = value; // 
        this.next = null; // Ponteiro para o próximo nó
    }
}

class LinkedList {

    constructor()
    {
        this.head = null; // A lista começa vazia
        this.current = null;
    }

    // Inserir no ínicio da fila
    insertAtBeginning(value)
    {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Inserir no fim da fila
    insertAtEnd(value)
    {
        let newNode = new Node(value);

        if(this.head === null)
        {
            this.head = newNode;
            this.current = newNode;
            return;
        }

        let current = this.head;
        while(current.next !== null)
        {
            current = current.next;
        }

        current.next = newNode;
    }

    // Remover um nó por valor
    removeByValue(value)
    {
        if (this.head === null)
        {
            return;
        }

        // Se o nó a ser removido ser o primeiro
        if(this.head.value === value)
        {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while(current.next !== null && current.next.value !== value)
        {
            current = current.next;
        }

        if(current.next !== null)
        {
            current.next = current.next.next;
        }
    }

    // Buscar um nó por valor
    find(value)
    {
        let current = this.head;

        while(current !== null)
        {
            if(current.value === value)
            {
                return current;
            }

            current = current.next;
        }

        return null; // Retorna null se o valor não for encontrado
    }

    // Exibir a lista (opcional, para facilitar a vizualização)
    printList()
    {
        let current = this.head;
        let list = '';

        while(current !== null)
        {
            list = list + current.value + ' -> ';
            current = current.next;
        }

        console.log(list + 'null');
    }


    playNext()
    {
        if (this.current && this.current.next)
        {
            this.current = this.current.next;
            console.log("Tocando próxima música:", this.current.value);
        } 
        else if (this.current)
        {
            console.log("Última música da playlist. Não há próxima.");
        }
        else
        {
            console.log("A playlist está vazia.");
        }
    }
}

module.exports = LinkedList;