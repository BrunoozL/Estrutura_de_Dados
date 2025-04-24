/*
Um mágico embaralha 5 cartas com os valores A, B, C, D, E e as empilha. Peça aos
alunos para simular o processo de colocar as cartas na pilha (push) e depois revelar
a ordem em que saem (pop), mostrando que o último a entrar é o primeiro a sair
(LIFO).
Desafio extra: inverter a ordem da pilha usando uma segunda pilha.
*/

const MinhaPilha = require('./exerPilha');

const cartas = new MinhaPilha();

cartas.adicionar("B"); // Primeiro que foi adicionado na pilha --> Ultima posição a sair
cartas.adicionar("C");
cartas.adicionar("E");
cartas.adicionar("A");
cartas.adicionar("D"); // Ultimo que foi adicionado na pilha --> Primeiro a sair

console.log(cartas.listar());

console.log(cartas.remover()); // Saída: D