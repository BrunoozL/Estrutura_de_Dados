/*
Cada nó representa um corredor. Simule a passagem do bastão com insertAtEnd
e remova um corredor machucado com removeByValue. Mostre a lista após cada
modificação.
*/

const LinkedList = require("./exerLinkedList");
const lista_encadeada = new LinkedList();

lista_encadeada.insertAtEnd("Bruno");
lista_encadeada.insertAtEnd("João");
lista_encadeada.insertAtEnd("Gabriel");

console.log("Passagem do bastão!");
lista_encadeada.printList();

console.log("Corredor João machucou!");
lista_encadeada.removeByValue("João");
lista_encadeada.printList();