/*
Implemente uma variação da fila onde clientes com mais de 60 anos passam na
frente. (Dica: fazer com duas filas e intercalar atendimento.)
*/

const Fila = require("./exerFila");
const fila1 = new Fila();
const fila2 = new Fila;

fila1.enqueue(68); // Idoso
fila1.enqueue(14); // Jovem
fila1.enqueue(22); // Jovem
fila1.enqueue(75); // Idoso
fila1.enqueue(17); // Jovem

while(!fila1.isEmpty())
{
    if(fila1.front() > 60)
    {
        console.log(`Idoso: ${fila1.dequeue()}`);
    }

    else
    {
        let jovem = fila1.front();
        fila2.enqueue(jovem);
        fila1.dequeue();
    }
}

while(!fila2.isEmpty())
{
    console.log(`Jovem: ${fila2.dequeue()}`);
}