/*
Crianças entram na fila da montanha-russa. Cada criança leva x segundos para
brincar. Simule a entrada (enqueue) e atendimento (dequeue), imprimindo quem
está sendo atendido e o tempo restante.
*/

const Fila = require("./exerFila")
const fila = new Fila();

const criancas = ["Enzo", "Noah", "Maria Clara", "Pedro"];

for (let crianca of criancas)
{
    fila.enqueue(crianca);
    console.log("Criança que está na fila: " + crianca);
}

while (!fila.isEmpty())
{
    let tempo = Math.floor(Math.random() * 60);
    console.log(`Atendendo: ${fila.dequeue()} por ${tempo} segundos`);           
}