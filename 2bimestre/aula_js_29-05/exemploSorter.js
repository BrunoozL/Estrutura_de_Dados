const Sorter = require("./sorter");
const lista = [7, 2, 5, 1, 9];

console.log("Lista desordenada: ", lista);
console.log("=====================");
console.log("Bubble Sort: ", Sorter.bubbleSort(lista));
console.log("Quick Sort: ", Sorter.quickSort(lista));
console.log("Merge Sort: ", Sorter.mergeSort(lista));