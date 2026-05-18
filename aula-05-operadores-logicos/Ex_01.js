//  Instrução para poder rodar
// npm install prompt-sync

// importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar váriaveis
let nota = parseFloat(prompt("Informe a sua nota (0-10): "));
let frequencia = parseFloat(prompt("Informe a sua frequência (0-100(%)): "));

//Lógica para decidir se o aluno foi aprovado ou reprovado
if (nota >= 7.0 && frequencia >= 75) {
    console.log("Aprovado!");
} else {
    console.log("Reprovado.");
}