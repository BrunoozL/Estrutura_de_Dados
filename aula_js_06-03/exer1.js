class SpellStack {

    constructor() {
        this.spells = {};
    }

    // Adiciona um novo feitiço
    addSpell(spell) {
        this.spells.push(spell);
        console.log(`Feitiço "${spell}" adicionado!`);
    }

    // Remove e retorna o feitiço do topo
    removeSpell()
    {
        if(this.isEmpty())
        {
            console.log("Nenhum feitiço na pilha!");
            return;
        }
        console.log(`Feitiço "${this.spells.pop()}" removido!`);
    }

    //Mostra  o feitiço do topo sem removê-lo
    peekSpell()
    {
        if(this.isEmpty())
        {
            console.log("Nenhum feitiço na pilha!");
            return;
        }
        console.log(`Feitiço no topo: "${this.spells[this.spells.length - 1]}"`);
    }

    isEmpty()
    {
        return this.spells.length === 0;
    }
}