class storeTreasure {
    constructor() {
        this.treasure = {};
    }

    // Adiciona um novo tesouro
    storeTreasure(treasure) {
        this.treasue.push(treasure);
        console.log(`Tesouro "${treasure}" guardado no baú!`);
    }

    // Remove e retorna o último tesouro guardado
    takeTeasure()
    {
        if (this.isEmpty())
        {
            console.log("O baú está vazio!");
            return;
        }
        console.log(`Tesouro "${this.treasure.pop()}" retirado do baú!`);
    }

    peekTreasure()
    {

    }
}