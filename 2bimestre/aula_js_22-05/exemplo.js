// Exemplo de uso:
const GrafoPonderado = require("./grafo_ponderado");
const grafo = new GrafoPonderado();

grafo.adicionarAresta('Riberitão Preto', 'Araraquara', 90);
grafo.adicionarAresta('Araraquara', 'São Carlos', 40);
grafo.adicionarAresta('São Carlos', 'Jaú', 89);
grafo.adicionarAresta('Jaú', 'Araraquara', 70);

grafo.imprimirGrafo();
grafo.imprimirMatrizAdjacencia();
grafo.DFS('A');
grafo.BFS('A');
grafo.dijkstra('A');