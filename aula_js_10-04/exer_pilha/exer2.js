/*
Simule as funcionalidades de "Desfazer" e "Refazer" de um editor de texto com
duas pilhas: uma para as ações feitas, outra para as ações desfeitas.
Exemplo: Digitar "A", "B", "C", desfazer duas vezes, refazer uma vez.
*/

const MinhaPilha = require('./exerPilha');

const pilha1 = new MinhaPilha();

pilha1.adicionar("A");
pilha1.adicionar("B");
pilha1.adicionar("C");
pilha1.adicionar("D");

const pilha2 = new MinhaPilha();

const read = require('readline-sync');
let opcao;

do {
    console.log("O que deseja fazer agora?");
    console.log("1 - Desfazer");
    console.log("2 - Refazer");
    console.log("0 - SAIR");
    opcao = parseInt(read.question("R: "));
    
    if(pilha1.tamanho == 0)
    {
        console.log("Naõ tem o que desfazer.")
    }
    else
    {
        if(opcao === 1)
        {
            valor = pilha1.topo();
            pilha2.adicionar(valor);
            console.log(pilha1.remover());
            console.log(pilha1.listar());
            let continuar = read.question("Pressione qualquer tecla para continuar.");
            console.log("");
        }
    }

    if(pilha2.tamanho == 0)
    {
        console.log("Não tem o que refazer.");
    }

    else
    {
        if (opcao === 2)
        {
            pilha1.adicionar(pilha2.topo());
            pilha2.remover();
            console.log(pilha1.listar());
            let continuar = read.question("Pressione qualquer tecla para continuar.");
            console.log("");
        }
    }

} while (opcao !== 0)
console.log("SAIDA");

/*
console.log(pilha1.remover());
console.log(pilha1.topo());

let valor = pilha1.topo();
console.log(pilha1.remover());

pilha1.adicionar(valor);
console.log(pilha1);
*/