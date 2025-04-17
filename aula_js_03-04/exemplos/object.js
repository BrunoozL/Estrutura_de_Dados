// dicionário é uma váriavel que contém chaves e valores
const dicionario = {
    nome: "Bruno Righi",
    idade: 19,
    cidade: "Jaú - SP",
    namoro: true
};

// Mostrando as chaves do dicionario. Saída: nome, idade, cidade, namoro.
console.log(Object.keys(dicionario));

// Mostrando os valores de cada chave do dicionario. Saída: "Bruno Righi", 19, "Jaú - SP", true.
console.log(Object.values(dicionario));

// Obter pares chave-valor usando entries do Object
Object.entries(dicionario).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

// Obter pares chave-valor usando FOR IN
console.log("=================");
for (const chave in dicionario)
{
    console.log(`${chave}: ${dicionario[chave]}`); // INTERPOLAÇÃO ${}
}