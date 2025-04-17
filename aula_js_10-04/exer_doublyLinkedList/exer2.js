/*
Cada letra digitada é um nó. O cursor pode ir para frente e para trás (simulando o
next e prev). Permita inserções e remoções em qualquer posição (insertAt,
removeAt).
*/

const DoublyLinkedList = require("./exerDoublyLinkedList");
const letra_digitada = new DoublyLinkedList();

letra_digitada.insertAt("H", 0);
letra_digitada.insertAt("e", 1);
letra_digitada.insertAt("l", 2);
letra_digitada.insertAt("l", 3);
letra_digitada.insertAt("o", 4);
letra_digitada.traverse(); // Hello
letra_digitada.removeAt(1); // Remove o 'e'
letra_digitada.traverse(); // Hllo
