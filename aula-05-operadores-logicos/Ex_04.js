//  Instrução para poder rodar
// npm install prompt-sync

// importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar váriaveis
let idadeCandidato = parseInt(prompt("Informe sua idade: "));
let sabeJS = prompt("Sabe JavaScript? (sim/não): ").toLowerCase();
let sabePython = prompt("Sabe Python? (sim/não): ").toLowerCase();

//Lógica para decidir se a pessoa pode ser contratada ou não
if (idadeCandidato >= 18 && (sabeJS === "sim" || sabePython === "sim")) {
    console.log("Currículo aceito.");
} else {
    console.log("Currículo recusado.");
}