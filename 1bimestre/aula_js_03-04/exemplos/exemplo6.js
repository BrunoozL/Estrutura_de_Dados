// Validando e trabalhando com chaves
const dicionario = {fruta: "Maçã"};

if("fruta" in dicionario)
{
    console.log("Chave encontrada!");
}
else
{
    console.log("Chave não encontrada!");
}

const dados = {nome: "Bruno"};

if(!(dados.idade in dados))
{
    dados.idade = 19;
}

console.log(dados); // Saída: {nome: Bruno, idade: 18}