// Para usar o equivalente ao leia, vc precisa instalar o pcote "readline-sync"
// Para isso, abra o termina e digite:
// npm install readline-sync
// Quando for executar, use o terminal e digite:
// node nome_arquivo.js
const read = require('readline-sync');

let nome = read.question("Qual seu nome?");
console.log(nome);

let n1 = read.question("Digite um numero: ");
let n2 = read.question("Digite outro numero: ");
let resultado = parseInt(n1) + parseInt(n2);
console.log(resultado);

// Tudo que o usuário digita vem como STRING
// Por isso precisamos converter para número usando parseInt

// TESTE MÉDIA NOTAS
let nota1 = parseFloat(read.question("Digite a primeira nota: "));
let nota2 = parseFloat(read.question("Digite a segunda nota: "));
let media = (nota1 + nota2) / 2;
console.log(media);