/*
Clientes fazem pedidos num drive-thru. Crie uma fila que registra os pedidos por
nome e imprima a sequência de atendimento.
Extra: calcule tempo total de espera se cada atendimento dura 2 minutos.
*/

const Fila = require("./exerFila")
const fila = new Fila();

const read = require("readline-sync");
let opcao;
let nome;
let tempo = 0;

do {
    console.log("========== MENU ==========");
    console.log("1 - Registrar pedido");
    console.log("2 - Atendender pedidos");
    console.log("0 - Sair do sistema");
    opcao = parseInt(read.question("R: "));
    
    switch(opcao)
    {
        case 1:
            console.log("")
            console.log("Insira o nome do cliente");
            nome = read.question("R: ");
            fila.enqueue(nome);
        break;

        case 2:
            console.log("");
            while(!fila.isEmpty())
            {
                console.log(`Atendendo o(a) cliente: ${fila.dequeue()}`);
                tempo = tempo + 2;
            }
            console.log(`Tempo total dos atendimentos: ${tempo} minutos`);
            tempo = 0;
        break;
    
        default:
            if(opcao !== 0)
            {
                console.log("Opção inválida.");
            }
        break;
    }
} while (opcao !== 0)
console.log("SAÍDA");