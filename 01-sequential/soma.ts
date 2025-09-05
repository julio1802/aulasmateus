import PromptSync from "prompt-sync";
const prompt = PromptSync();

const x = Number(prompt("valor de X: "));
const y = Number(prompt("Valor de Y: "));
const soma = x + y;

console.log(`SOMA = ${soma}`);