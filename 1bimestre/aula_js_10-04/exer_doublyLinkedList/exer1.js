/*
Cada vagão é um nó. Simule adicionar vagões à frente e atrás. Mostre a composição
do trem indo e voltando com traverse e traverseReverse.
*/

const DoublyLinkedList = require("./exerDoublyLinkedList");
const vagao = new DoublyLinkedList();

vagao.append("3° vagão");
vagao.append("4° vagão");
vagao.prepend("2° vagão");
vagao.prepend("1° vagão");

console.log("Indo do 1° vagão até o 4° vagão!");
vagao.traverse();
console.log("=========================");

console.log("Indo do 4° vagão até o 1° vagão!");
vagao.traverseReverse();