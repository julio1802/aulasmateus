import PromptSync from "prompt-sync";
const prompt = PromptSync();

const preco = Number(prompt("valor do produto: "));
const qtd = Number(prompt("quantidade: "));
const vp = Number(prompt("Dinheiro recebido: "));
const vt = preco * qtd;
const troco = vp - vt;

console.log(`TROCO = ${troco}`);