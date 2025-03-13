class storeTreasure {

    constructor() {
        this.treasures = [];
    }

    // Adiciona um novo tesouro
    addTreasure(treasure) {
        this.treasures.push(treasure);
        console.log(`Tesouro "${treasure}" guardado no baú!`);
    }

    // Remove e retorna o último tesouro guardado (o que está no topo)
    removeTreasure()
    {
        if (this.isEmpty())
        {
            console.log("O baú está vazio!");
            return;
        }
        console.log(`Tesouro "${this.treasures.pop()}" retirado do baú!`);
    }

    // Mostra o tesouro do topo sem removê-lo
    peekTreasure()
    {
        if (this.isEmpty())
        {
            console.log("O baú está vazio!");
            return;
        }
        console.log(`Tesouro no topo: "${this.treasures[this.treasures.length - 1]}"`);
    }

    // Método para definir que está vazio, e atribuindo ele nos outros métodos para verificação
    isEmpty()
    {
        return this.treasures.length === 0;
    }
}

// Exemplo de uso:
const trunk = new storeTreasure();
trunk.addTreasure("Colar de diamante"); // Colocado em 1°, ESTAVA NO TOPO
trunk.addTreasure("Pulseira de ouro"); // Colocado em 2°, ESTAVA NO TOPO
trunk.addTreasure("Aliança de esmeralda"); // Colocado em 3°, ESTÁ NO TOPO
trunk.peekTreasure(); // Saída: "Aliança de esmeralda", pois ele foi o ultimo a ser colocado, logo é o que está no topo
trunk.removeTreasure(); // Remove: "Aliança de esmeralda" por estar no topo
trunk.removeTreasure(); // Remove: "Pulseira de outro"
trunk.removeTreasure(); // Remove: "Colar de diamante"
trunk.removeTreasure(); // Nenhum tesouro removido, pos está vazio o baú!