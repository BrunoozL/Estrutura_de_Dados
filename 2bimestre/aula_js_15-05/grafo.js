class Grafo
{
    // Estrutura para armazenar os vértices e suas conexões
    constructor()
    {
        this.adjacencia = {};
        this.peso = 0;
    }

    // Adiciona um novo vértice ao grafo
    adicionarVertice(vertice)
    {
        if(!this.adjacencia[vertice])
        {
            this.adjacencia[vertice] = [];
        }
    }

    // Adiciona uma aresta entre dois vértices (não dirigido)
    adicionarAresta(vertice1, vertice2)
    {
        this.adicionarVertice(vertice1);
        this.adicionarVertice(vertice2);

        this.adjacencia[vertice1].push(vertice2);
        this.adjacencia[vertice2].push(vertice1);
    }

    // Remove uma aresta entre dois vértices
    removerAresta(vertice1, vertice2)
    {
        this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v !== vertice2);
        this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v !== vertice1);
    }

    // Remove um vértice e suas conexões
    removerVertice(vertice)
    {
        while(this.adjacencia[vertice]?.length)
        {
            const adjacente = this.adjacencia[vertice].pop();
            this.removerAresta(vertice, adjacente);
        }

        delete this.adjacencia[vertice];
    }

    adicinarPeso(vertice1, vertice2, peso)
    {
        this.adjacencia[vertice1];
        this.adjacencia[vertice2];
        let peso = Math.floor(Math.random() * 100);
    }

    // Exibe o grafo
    imprimirGrafo()
    {
        for(let vertice in this.adjacencia)
        {
            console.log(`${vertice} -> ${this.adjacencia[vertice].join(',  ')}`);
        }
    }
}

// Exemplo de uso:

const teste = new Grafo();

teste.adicionarVertice("Bruno");
teste.adicionarVertice("Maria");
teste.adicionarVertice("Roberto");
teste.adicionarVertice("Gabriel");
teste.adicionarVertice("Edineia");
teste.adicionarVertice("Emerson");
teste.adicionarVertice("Ana Julia");
teste.adicionarVertice("Luana");

teste.adicionarAresta("Bruno", "Maria");
teste.adicionarAresta("Bruno", "Roberto");
teste.adicionarAresta("Gabriel", "Edineia");
teste.adicionarAresta("Gabriel", "Emerson");
teste.adicionarAresta("Luana", "Bruno");
teste.adicionarAresta("Luana", "Ana Julia");
teste.adicionarAresta("oioioi", "tchauuuuu");

teste.imprimirGrafo();

module.exports = Grafo;