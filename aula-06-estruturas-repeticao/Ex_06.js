// Importar o módulo (para rodar algoritmo no terminal)
const prompt = require('prompt-sync')();

// Titulo
console.log('--- Tabuada ---')
console.log("")

// Pergunta (Qual tabuada gerar?)
let numero = Number(prompt("Digite um número para gerar a tabuada: "));

// Laço para gerar a tabuada
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}