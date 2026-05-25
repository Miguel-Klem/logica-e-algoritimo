// Importar o módulo (para rodar algoritmo no terminal)
const prompt = require('prompt-sync')();

// Titulo
console.log('--- Média de Vários Alunos ---')
console.log("")

let soma = 0;
let contador = 0;

// Primeira pergunta para iniciar a validação do laço
let nota = Number(prompt("Digite a nota do aluno (ou -1 para finalizar): "));

// Laço enquanto que roda até o usuário digitar o valor sentinela (-1)
while (nota !== -1) {
    soma = soma + nota;
    contador++;
    
    // Solicita a próxima nota interna
    nota = Number(prompt("Digite a próxima nota (ou -1 para finalizar): "));
}

// Validação de segurança para evitar erro de divisão por zero
if (contador > 0) {
    let media = soma / contador;
    console.log(`A média das ${contador} notas informadas é: ${media.toFixed(2)}`);
} else {
    console.log("Nenhuma nota válida foi inserida.");
}
