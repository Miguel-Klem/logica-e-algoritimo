//  Instrução para poder rodar
// npm install prompt-sync

// importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar váriaveis
let salario = parseFloat (prompt ("Informe o seu Salário R$: "))
let temfiador = prompt("Você possui fiador? (sim/não): ") === "sim"
let nomeSujo = prompt("Seu nome está sujo no Serasa? (sim/não): " ) === "sim"  

//Lógica para decidir se pode pegar empréstimo ou não
if(!nomeSujo && (salario >2000 || temfiador)) {
    console.log("Empréstimo Aprovado!")
} else {
    console.log("Empréstimo Negado!")}