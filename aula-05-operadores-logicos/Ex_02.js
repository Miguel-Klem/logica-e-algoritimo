//  Instrução para poder rodar
// npm install prompt-sync

// importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar váriaveis
let idade = parseInt(prompt("Escreva a sua idade: "));

//Lógica para decidir se o aluno foi aprovado ou reprovado
if (idade < 5 || idade >= 65) {
    console.log("Não é necessario o pagamento do ingresso.");
} else {
    console.log("Necessário o pagamento do ingresso.");
}