// Importar o módulo (para rodar algoritmo no terminal)
const prompt = require('prompt-sync')();

// Titulo
console.log('--- Validação de Senha ---')
console.log("")

let senha;

// Laço repita...até que para validação de segurança
do {
    senha = prompt("Digite a senha de acesso: ");
} while (senha !== "1234");

// Mensagem exibida somente quando sair do laço (senha correta)
console.log("Acesso permitido!");
