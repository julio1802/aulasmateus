import PromptSync from "prompt-sync";
const prompt = PromptSync();

const valores: number[] = [];
let soma = 0;
let media = 0;

const qtdnNum = Number(prompt("Quantos números você vai digitar? "));

for (let i = 0; i < qtdnNum; i++) {
    const n = Number(prompt("Digite um número: "));
    valores.push(n);
    soma+=n;
}

console.log("VALORES = " + valores.join(" "));

media = soma / qtdnNum;

console.log("SOMA = " + soma.toFixed(2));
console.log("MEDIA = " + media.toFixed(2));