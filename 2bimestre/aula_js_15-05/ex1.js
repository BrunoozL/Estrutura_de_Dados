/*
1) Crie um grafo com os vértices 1, 2, 3, 4 e as arestas 1-2, 1-3, 2-4.
– Imprima o grafo.
– Remova o vértice 2 e imprima o grafo novamente. 
*/

const Grafo = require("./grafo.js");
const numeros = new Grafo();

numeros.adicionarVertice(1);
numeros.adicionarVertice(2);
numeros.adicionarVertice(3);
numeros.adicionarVertice(4);

numeros.adicionarAresta(1, 2);
numeros.adicionarAresta(1, 3);
numeros.adicionarAresta(2, 4);

console.log("====================");
numeros.imprimirGrafo();

numeros.removerVertice(2);

console.log("====================");
numeros.imprimirGrafo();