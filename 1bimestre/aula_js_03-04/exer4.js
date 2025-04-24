/*
Crie uma função que receba um dicionário e remova todas as
chaves cujo valor seja null ou undefined
*/

function removerChaves(dicionario)
{
    for(let chave in dicionario)
    {
        if(dicionario[chave] == null || dicionario[chave] == undefined)
        {
            delete dicionario[chave];
        }
    }
    return dicionario;
}

console.log(removerChaves({a: null, b: undefined, c: "OIII", d: "OKQOJJWQD"}));