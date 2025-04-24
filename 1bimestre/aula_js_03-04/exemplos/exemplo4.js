const dicionario = {
    fruta: "Maça",
    cor: "Vermelho",
    preco: 5
};

// Iterando sobre um dicionario usando o FOR...IN
for (const chave in dicionario)
{
    console.log(`${chave}: ${dicionario[chave]}`); // INTERPOLAÇÃO ${}
}