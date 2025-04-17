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

    insertAt(value, pos) {
        if (pos < 0 || pos > this.length) {
            console.log("Posição inválida.");
            return;
        }

        const newNode = new Node(value);

        if (this.length === 0) {
            this.head = this.tail = this.cursor = newNode;
        } else if (pos === 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else if (pos === this.length) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            let current = this.head;
            let i = 0;
            while (i < pos) {
                current = current.next;
                i++;
            }

            newNode.prev = current.prev;
            newNode.next = current;

            if (current.prev) current.prev.next = newNode;
            current.prev = newNode;
        }

        this.length++;
    }

    removeAt(pos) {
        if (pos < 0 || pos >= this.length) {
            console.log("Posição inválida.");
            return;
        }

        let current = this.head;
        let i = 0;

        while (i < pos) {
            current = current.next;
            i++;
        }

        if (current === this.head) {
            this.head = current.next;
            if (this.head) this.head.prev = null;
        } else if (current === this.tail) {
            this.tail = current.prev;
            if (this.tail) this.tail.next = null;
        } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        if (this.cursor === current) {
            this.cursor = current.next || current.prev;
        }

        this.length--;
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
    traverse()
    {
        let current = this.head;
        while(current)
        {
            console.log(current.value);
            current = current.next;
        }
    }

    // Percorrer a lista do fim ao ínicio
    traverseReverse()
    {
        let current = this.tail;
        while(current)
        {
            console.log(current.value);
            current = current.prev;
        }
    }

    find(value)
    {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
}

module.exports = DoublyLinkedList;