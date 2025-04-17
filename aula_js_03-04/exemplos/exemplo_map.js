const mapa = new Map();

mapa.set("nome", "Bruno");
mapa.set(19, "Número");

// Acesso
console.log(mapa.get("nome")); // Saída: Bruno
console.log(mapa.get(19)); // Saída: Número

// Iteração
for (const [chave, valor] of mapa)
{
    console.log(`${chave}: ${valor}`);
}