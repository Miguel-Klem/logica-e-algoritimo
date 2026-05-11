//  Instrução para poder rodar
// npm install prompt-sync

// importar módulo
const prompt = require('prompt-sync')();

// Lógica 
let nomeUsuario = prompt("Informe o nome de usuário: ");
let senha = prompt("Informe a sua senha: ");
console.log(""); // Linha em branco

// Referência
let loginBanco = "Klem"
let senhaBanco = "Kbide"

// Condicional SE + E
if (nomeUsuario === loginBanco && senha === senhaBanco) {
    console.log("Acesso autorizado!");
} else {
    console.log("Acesso negado!")
}