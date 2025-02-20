// ESTRUTURAS DE REPETICÃO


// PARA
console.log("---------- PARA ----------");

for(let i = 0; i < 10; i++)
{
    console.log("O valor de i é: " + i);
}

// ENQUANTO
console.log("---------- ENQUANTO ----------");

let x = 0;
while(x < 10)
{
    console.log("O valor de x é: " + x);
    x = x + 1; // x++ 
}

// REPITA
console.log("---------- REPITA ----------");

const read = require('readline-sync');
let parar = "n";
do {
    console.log("Repetiu");
    parar = read.question("Parar de repetir? S/n");
    console.log(parar);
} while (parar == "N" || parar == "n");


// REPITA DNV

console.log("---------- REPITA ----------");

let resposta = 0;
do {
    console.log("Repetiuu");
    console.log("Gostaria de parar?");
    console.log("1 - SIM");
    console.log("0 - NÃO");
    resposta = read.question("R: ");
    console.log(resposta);
} while (resposta == 0);