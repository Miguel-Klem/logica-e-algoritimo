// Importar o módulo (para rodar algoritmo no terminal)
const prompt = require('prompt-sync')();

let precos = [];
for (let i = 0; i < 6; i++) {
    precos[i] = parseFloat(prompt(`Digite o preço do produto ${i + 1}: `));
}

let maior = precos[0];
let menor = precos[0];

for (let i = 1; i < 6; i++) {
    if (precos[i] > maior) {
        maior = precos[i];
    }

    if (precos[i] < menor) {
        menor = precos[i];
    }
}

let resultado = `Maior preço: R$ ${maior.toFixed(2)}\n`;
resultado += `Menor preço: R$ ${menor.toFixed(2)}`;

// O alert foi removido pois causa erro no terminal (Node.js)
console.log(resultado);