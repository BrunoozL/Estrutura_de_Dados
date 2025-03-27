class Node
{
    constructor(value)
    {
        this.value = value;
        this.next = null; // Próximo nó
        this.prev = null; // Nó anterior
    }
}

class DoublyLinkedList
{
    constructor()
    {
        this.head = null; // Primeiro nó (cabeça)
        this.tail = null; // Ultimo nó (cauda)
        this.length = 0; // Tamanho da lista
    }

    // Adicionar um nó ao final da fila
    append(value)
    {
        const newNode = new Node(value);
        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode;
        }
        else
        {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    // Adicionar um nó no ínicio da fila
    prepend(value)
    {
        const newNode = new Node(value);
        if(!this.head)
        {
            this.head = newNode;
            this.tail = newNode
        }
        else
        {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    // Remover o nó do final da fila
    removeLast()
    {
        if(!this.tail) return null;

        const removeNode = this.tail;
        if(this.tail === this.head)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return removeNode.value;
    }

    // Remover o nó do ínicio da fila
    removeFirst()
    {
        if(!this.head) return null;

        const removeNode = this.head;
        if(this.head === this.tail)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return removeNode.value;
    }

    // Percorrer a lista do ínicio ao fim
    transverse()
    {
        let current = this.head;
        while(current)
        {
            console.log(current.value);
            current = current.next;
        }
    }

    // Percorrer a lista do fim ao ínicio
    transverseReverse()
    {
        let current = this.tail;
        while(current)
        {
            console.log(current.value);
            current = current.prev;
        }
    }
}

// Exemplos de uso:
const list = new DoublyLinkedList();

list.append(10); // Adiciona 10 no fim
list.append(20); // Adiciona 20 no fim
list.append(30); // Adiciona 30 no fim

console.log("Percorrendo do início ao fim: ");
list.transverse();

list.prepend(5);

console.log("Percorrendo do início ao fim depois de adicionar o 5 no início: ");
list.transverse();

list.removeLast();
console.log("Percorrendo após remover o ultimo nó: ");
list.transverse();

list.removeFirst();
console.log("Percorrendo após remover o primeiro nó: ");
list.transverse();

console.log("Percorrendo em ordem inversa: ");
list.transverseReverse();