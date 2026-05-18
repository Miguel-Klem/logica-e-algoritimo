//  Instrução para poder rodar
// npm install prompt-sync

// importar módulo
const prompt = require('prompt-sync')();

// Coletar dados e criar váriaveis
let valorCompra = parseFloat(prompt("Valor da compra: "));
let ehVip = prompt("É cliente VIP? (sim/não): ").toLowerCase();
let temCupom = prompt("Possui cupom? (sim/não): ").toLowerCase();
let parcelasAtrasadas = prompt("Tem parcelas atrasadas? (sim/não): ").toLowerCase();

let cenarioA = (ehVip === "sim" && valorCompra > 500);
let cenarioB = (temCupom === "sim" && parcelasAtrasadas === "não");

//Lógica para decidir se a pessoa ganha o super desconto ou não
if (cenarioA || cenarioB) {
    console.log("Super Desconto aplicado!");
} else {
    console.log("Desconto negado.");
}