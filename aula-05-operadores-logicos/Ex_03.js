//  Instrução para poder rodar
// npm install prompt-sync

// importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar váriaveis
let esgotado = prompt("O produto está esgotado? (sim/não): ").toLowerCase();

 // Lógica de venda do produto 
if (esgotado === "sim") {
    console.log("Por favor, reabasteça o estoque");
} else {
    console.log("Produto disponível para venda");
    console.log("Código de venda executado");
}