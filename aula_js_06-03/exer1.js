class SpellStack {

    constructor() {
        this.spells = [];
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

    // Mostra  o feitiço do topo sem removê-lo
    peekSpell()
    {
        if(this.isEmpty())
        {
            console.log("Nenhum feitiço na pilha!");
            return;
        }
        console.log(`Feitiço no topo: "${this.spells[this.spells.length - 1]}"`);
    }

    // Método para definir que está vazio, e atribuindo ele nos outros métodos para verificação
    isEmpty()
    {
        return this.spells.length === 0;
    }
}

// Exemplo de uso:
const tower = new SpellStack();
tower.addSpell("Chamas do dragão"); // Colocado em 1°, ESTAVA NO TOPO
tower.addSpell("Arcano de gelo"); // Colocado em 2°, ESTÁ NO TOPO
tower.peekSpell(); // Saída: "Arcano de gelo", pois ele foi o ultimo a ser colocado, logo é o que está no topo
tower.removeSpell(); // Remove: "Arcano de gelo" por estar no topo
tower.removeSpell(); // Remove: "Chamas do dragão"
tower.removeSpell(); // Nenhum feitiço na torre!