const mapa = new Map([
    ["chave1", "valor1"],
    ["chave2", "valor2"]
]);

// Iterando com FOR...OF
for(const [chave, valor] of mapa)
{
    console.log(`${chave}: ${valor}`);
}