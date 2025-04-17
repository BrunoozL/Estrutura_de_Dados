const mapa = new Map();

// Adicionando pares chave-valor
mapa.set("nome", "Bruno");
mapa.set("idade", 19);

// Obtendo valores
console.log(mapa.get("nome")); // Saída: Bruno

// Verificando se uma chave existe
console.log(mapa.has("idade")); // Saída: true

// Removendo uma chave
mapa.delete("idade");
console.log(mapa.has("idade")); // Saída: false