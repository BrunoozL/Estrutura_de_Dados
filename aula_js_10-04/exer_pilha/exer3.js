/*
Módulos espaciais pousam um sobre o outro. O último a pousar é o primeiro a sair
da base. Simule essa sequência com uma pilha e peça para exibir a ordem de
retorno à nave.
*/

const modulos = [];

modulos.push("Aurora")
modulos.push("Celleste")
modulos.push("Lactea");

for (let modulo of modulos)
{
    console.log("Módulo da " + modulo + " pousando.")
}

while (modulos.length > 0)
{
    console.log("Módulo saindo: " + modulos.pop());
}