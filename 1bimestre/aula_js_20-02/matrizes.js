const read = require('readline-sync');

//Declaração da matriz
let nomes = [];
nomes[0] = "Bruno";
nomes[1] = "Cainã lixo";
nomes[2] = "Weverton but";

// Acessando cada posição do vetor utilizando o PARA
for(let i = 0; i < 3; i++)
{
    console.log(nomes[i]);
}

// Matriz multidimensional

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// O primeiro é LINHA e o segundo é COLUNA
console.log(matriz[0][1]); // Saída: 2