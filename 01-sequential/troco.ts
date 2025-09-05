import readlineSync from "readline-sync";

// Entrada de dados
let preco: number = parseFloat(readlineSync.question("Preco unitario do produto: "));
let quantidade: number = parseInt(readlineSync.question("Quantidade comprada: "));
let dinheiroRecebido: number = parseFloat(readlineSync.question("Dinheiro recebido: "));

// Calcular total e troco
let total: number = preco * quantidade;
let troco: number = dinheiroRecebido - total;

// Saída
console.log("TROCO = " + troco.toFixed(2));
