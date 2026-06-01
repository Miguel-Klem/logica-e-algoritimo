// Importar o módulo (para rodar algoritmo no terminal)
const prompt = require('prompt-sync')();

console.log('--- Vetores com loop ---');
console.log('Digite o nome de 5 filmes abaixo: ');
console.log('');

// Criando um vetor para guardar os valores
const filmes = [];

// Estrutura de repetição para coletar os nomes dos 5 filmes
for (let i = 0; i < 5; i++) {
    filmes[i] = prompt(`Digite o nome do filme ${i + 1}° filme: `);
}

// Exibindo o nome dos filmes digitados
console.log('_______________');
console.log('');

// Laço para exibir os nomes coletados
for (let i = 0; i < filmes.length; i++) {
    console.log(`Nome do ${i + 1}° filme digitado: ${filmes[i]}`);
}   



