// Importar o módulo (para rodar algoritmo no terminal)
const prompt = require('prompt-sync')();

let pratos = [];
let precos = [];

// 1. Primeiro loop: apenas para ler os dados (roda 4 vezes)
for (let i = 0; i < 4; i++) {
    pratos[i] = prompt(`Digite o nome do prato ${i + 1}: `);
    precos[i] = parseFloat(prompt(`Digite o preço do prato ${i + 1}: `));
}

// 2. Montar o texto do cardápio (fora de qualquer prompt)
let cardapio = "--- Cardápio ---\n";
for (let i = 0; i < 4; i++) {
    cardapio += `${i + 1}. ${pratos[i]} - R$ ${precos[i].toFixed(2)}\n`;
}

// 3. Mostrar o cardápio e pedir a opção UMA ÚNICA VEZ
let opcao = parseInt(prompt(cardapio + "\nEscolha um prato (1 a 4): "));

// 4. Verificar a opção escolhida
if (opcao >= 1 && opcao <= 4) {
    let resultado = `Você escolheu: ${pratos[opcao - 1]}\n` +
                    `Preço: R$ ${precos[opcao - 1].toFixed(2)}`;
    console.log(resultado);
} else {
    console.log("Opção inválida!");
}