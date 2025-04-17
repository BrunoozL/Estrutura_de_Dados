/*
Cada nó é uma música de uma playlist. Insira músicas no fim, remova uma
específica e permita busca por nome.
Desafio extra: Adicionar opção de "tocar próxima" (avançar no ponteiro).
*/

const LinkedList = require("./exerLinkedList");
const musicas = new LinkedList();
const read = require("readline-sync");
let opcao;
let inserirMusica;
let removerMusica;
let buscarMusica;

do {
    console.log("======== MENU ========");
    console.log("1 - Inserir música");
    console.log("2 - Remover música");
    console.log("3 - Buscar por nome");
    console.log("4 - Tocar próxima");
    console.log("0 - Sair");
    opcao = parseInt(read.question("R: "));

    switch(opcao)
    {
        case 1:
            console.log("Digite o nome da música que deseja inserir");
            inserirMusica = read.question("R: ");
            musicas.insertAtEnd(inserirMusica);

            console.log("Música adicionada com sucesso!");
            musicas.printList();
            console.log("");
        break;

        case 2:
            console.log("Digite o nome da música que deseja remover");
            removerMusica = read.question("R: ");
            let musica_existe_remover = musicas.find(removerMusica);
            musicas.removeByValue(removerMusica);

            console.log(musica_existe_remover ? "Música removida com sucesso!" : "Música não existe na playlist!");
            musicas.printList();
            console.log("");
        break;

        case 3:
            console.log("Digite o nome da música que deseja buscar");
            buscarMusica = read.question("R: ");
            let musica_existe_buscar = musicas.find(buscarMusica);

            console.log(musica_existe_buscar ? "Música encontrada!" : "Música não existe na playlist!");
            console.log("");
        break;

        case 4:
            musicas.playNext();
            console.log("");
        break;

        default:
            if(opcao !== 0)
            {
                console.log("Opção inválida.")
                console.log("");
            }
        break;
    }


} while (opcao !== 0)
console.log("SAÍDA");