/*
Crie um objeto para armazenar informações de produtos de uma
loja. As chaves devem ser os códigos dos produtos, e os
valores, objetos contendo nome e preço. Itere sobre o dicionário
e exiba os produtos com preços acima de R$ 50.
*/

const produtos = {
    P001: {
        nome: "Camiseta",
        preco: 19.99
    },

    P002: {
        nome: "Calça",
        preco: 39.99
    },

    P003: {
        nome: "Blusa",
        preco: 54.99
    }
}

for(const codigo in produtos)
{
    if(produtos[codigo].preco > 50)
    {
        console.log(`${codigo}: ${produtos[codigo].nome} -> ${produtos[codigo].preco}`);
    }
    else
        console.log("ERRO: Produto menor que 50 reais.");
}