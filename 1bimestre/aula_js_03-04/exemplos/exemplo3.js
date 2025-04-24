const dicionario = {}

// Adicionando chaves e valores
dicionario["cor"] = "azul";
dicionario.tamanho = "grande";

console.log(dicionario); // Saída: {cor: 'azul', tamanho: 'grande'}

// Removendo uma chave
delete dicionario.cor;
console.log(dicionario); // Saída: {tamanho: 'grande'}