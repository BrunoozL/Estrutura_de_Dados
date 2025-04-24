/*
Usuário monta uma lista de compras com insertAtBeginning e insertAtEnd.
Permita remover itens com removeByValue e buscar com find. Imprima a lista em
cada etapa.
*/

const LinkedList = require("./exerLinkedList");
const lista_compras = new LinkedList();

lista_compras.insertAtBeginning("Shampoo");
lista_compras.insertAtBeginning("Condicionador");
lista_compras.insertAtEnd("Sabonete");
lista_compras.insertAtBeginning("Perfume");
lista_compras.insertAtEnd("Desodorante");
console.log("");
console.log("---------- LISTA DE COMPRAS ----------");
lista_compras.printList();

const read = require("readline-sync");
let opcao;
let itemRemover;
let itemBuscar;

do {
    console.log("");
    console.log("============== MENU ==============");
    console.log("1 - Remover item da lista");
    console.log("2 - Buscar item no carrinho");
    console.log("0 - Sair");
    opcao = parseInt(read.question("R: "));

    switch(opcao)
    {
        case 1:
            lista_compras.printList();
            console.log("");
            console.log("Qual item deseja remover?")
            itemRemover = read.question("R: ");

            lista_compras.removeByValue(itemRemover);
            console.log("Item removido com sucesso!");
            lista_compras.printList();
        break;

        case 2:
            itemBuscar = read.question("Digite o item que deseja buscar: ");
            let item = lista_compras.find(itemBuscar);
            console.log(item ? "Item encontrado!" : "Item não existe na lista!");
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