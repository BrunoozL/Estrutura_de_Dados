const dicionario = {};
dicionario.nome = "Bruno";
dicionario[19] = "Número";

// Acesso
console.log(dicionario.nome); // Saída: Bruno
console.log(dicionario["19"]); // Saída: Número (Chaves numéricas convertidas para string)
console.log(dicionario[19]); // Saída: Número

// Iteração 1
Object.entries(dicionario).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

// Iteração 2
console.log("=================");
for (const chave in dicionario)
{
    console.log(`${chave}: ${dicionario[chave]}`); // INTERPOLAÇÃO ${}
}