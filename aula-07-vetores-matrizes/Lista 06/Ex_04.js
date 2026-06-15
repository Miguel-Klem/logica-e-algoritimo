// Importar o módulo (para rodar algoritmo no terminal)
const prompt = require('prompt-sync')();

let gols = [];
let maisDeTres = 0;
let tresOuMenos = 0;

for (let i = 0; i < 5; i++) {
    gols[i] = parseInt(prompt(`Digite os gols do time ${i + 1}: `));
}

for (let i = 0; i < 5; i++) {
    if (gols[i] > 3) {
        maisDeTres++;
    } else {
        tresOuMenos++;
    }
}

let resultado = `Times com mais de 3 gols: ${maisDeTres}\n`;
resultado += `Times com 3 gols ou menos: ${tresOuMenos}`;

// O alert foi removido pois causa erro no terminal (Node.js)
console.log(resultado);