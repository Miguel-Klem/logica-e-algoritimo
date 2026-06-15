// Importar o módulo (para rodar algoritmo no terminal)
const prompt = require('prompt-sync')();

let numeros = [];
for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(prompt(`Digite o número ${i + 1}: `));
}

let resultado = "Números na ordem inversa:\n";
for (let i = 4; i >= 0; i--) {
    resultado += `${numeros[i]}\n`;
}

// O alert foi removido pois causa erro no terminal (Node.js)
console.log(resultado);