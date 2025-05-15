/*
2) Adicione pesos às arestas no grafo.
– Implemente o algoritmo de busca em largura (BFS).
– Crie um grafo ponderado e calcule o menor caminho entre dois vértices.
*/

const Grafo = require("./grafo.js");
const caminhos = new Grafo();

caminhos.adicionarVertice("A");
caminhos.adicionarVertice("B");
caminhos.adicionarVertice("C");
caminhos.adicionarVertice("D");
caminhos.adicionarVertice("E");
caminhos.adicionarVertice("F");