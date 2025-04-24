/*
Crie um objeto para armazenar informações de alunos, onde a
chave é o número de matrícula e o valor é o nome do aluno.
Adicione pelo menos 3 alunos ao dicionário e exiba os nomes
iterando sobre as chaves.
*/

const alunos = {
    M123: "Bruno",
    M456: "Gabriel",
    M789: "Weverton"
}

for(let chave in alunos){
    console.log(`${chave}: ${alunos[chave]}`);
}
