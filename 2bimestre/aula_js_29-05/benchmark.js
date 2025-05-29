const Buscas = require("./buscas");
const Sorter = require("./sorter");

const lista = Array.from({length: 50000}, () => Math.floor(Math.random() * 50000));

console.log("======== TEMPO DE BUSCAS EM TIPOS DE LISTAS ORDENADAS ========");
console.log("");

console.log("-------- BUBBLE SORT --------");
console.time("BubbleSort | Sequencial");
Buscas.sequencial(Sorter.bubbleSort(lista), 25000);
console.timeEnd("BubbleSort | Sequencial");

console.time("BubbleSort | Binária");
Buscas.binaria(Sorter.bubbleSort(lista), 25000);
console.timeEnd("BubbleSort | Binária");

console.time("BubbleSort | Interpolação");
Buscas.interpolacao(Sorter.bubbleSort(lista), 25000);
console.timeEnd("BubbleSort | Interpolação");

console.log("");

console.log("-------- QUICK SORT --------");
console.time("QuickSort | Sequencial");
Buscas.sequencial(Sorter.quickSort(lista), 25000);
console.timeEnd("QuickSort | Sequencial");

console.time("QuickSort | Binária");
Buscas.binaria(Sorter.quickSort(lista), 25000);
console.timeEnd("QuickSort | Binária");

console.time("QuickSort | Interpolação");
Buscas.interpolacao(Sorter.quickSort(lista), 25000);
console.timeEnd("QuickSort | Interpolação");

console.log("");

console.log("-------- MERGE SORT --------");
console.time("MergeSort | Sequencial");
Buscas.sequencial(Sorter.mergeSort(lista), 25000);
console.timeEnd("MergeSort | Sequencial");

console.time("MergeSort | Binária");
Buscas.binaria(Sorter.mergeSort(lista), 25000);
console.timeEnd("MergeSort | Binária");

console.time("MergeSort | Interpolação");
Buscas.interpolacao(Sorter.mergeSort(lista), 25000);
console.timeEnd("MergeSort | Interpolação");