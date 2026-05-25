// Importar o módulo (para rodar algoritmo no terminal)
const prompt = require('prompt-sync')();

// Titulo
console.log('--- Soma até Valor Digitado ---')
console.log("")

// Pergunta (Até qual valor somar?)
let numero = Number(prompt("Digite um número inteiro positivo: "));

// Variáveis de controle do acumulador e do contador
let soma = 0;
let contador = 1;

// Laço enquanto para processar a soma acumulada
while (contador <= numero) {
    soma = soma + contador;
    contador++;
}

// Exibir o resultado final da soma
console.log(`A soma total de todos os números de 1 até ${numero} é: ${soma}`);