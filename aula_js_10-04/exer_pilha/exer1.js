/*
Um mágico embaralha 5 cartas com os valores A, B, C, D, E e as empilha. Peça aos
alunos para simular o processo de colocar as cartas na pilha (push) e depois revelar
a ordem em que saem (pop), mostrando que o último a entrar é o primeiro a sair
(LIFO).
Desafio extra: inverter a ordem da pilha usando uma segunda pilha.
*/

const pilha = [];
const cartas = ["A", "B", "C", "D", "E"];

for (let valor of cartas)
{
    pilha.push(valor);
}
console.log(pilha);

while (pilha.length > 0)
{
    console.log("Retirando carta da pilha: " + pilha.pop());
}