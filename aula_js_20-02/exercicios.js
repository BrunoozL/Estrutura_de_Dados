function somaDosPares(array)
{
    let soma = 0;

    // Percorre o array
    array.forEach(num => {
        // Verifica se o número é par
        if (num % 2 === 0) {
            soma += num;
        }
    });

    return soma;
}

// Exemplo de uso
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(somaDosPares(numeros)); // Saída: 20 (2 + 4 + 6 + 8)