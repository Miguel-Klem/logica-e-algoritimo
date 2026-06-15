// Importar o módulo (para rodar algoritmo no terminal)
const prompt = require('prompt-sync')();

let produtos = [];
for (let i = 0; i < 5; i++) {
    produtos[i] = prompt(`Digite o nome do produto ${i + 1}: `);
}

let resultado = "Lista de Compras:\n";
for (let i = 0; i < 5; i++) {
    resultado += `${i + 1}. ${produtos[i]}\n`;
}

// O alert foi removido pois não funciona no terminal (Node.js)
console.log(resultado);