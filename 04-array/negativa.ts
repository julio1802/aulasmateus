import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n = Number(prompt(`Quantos numeros você vai digitar?`));

const numeros: number[] = [];

for (let i = 0; i < n; i++) {
    const valor = Number(prompt(`Digite um número`));
    numeros.push(valor);
}

console.log("Numeros Negativos: ");

numeros.forEach(num => {
    if (num < 0) {
        console.log(num);
    }
})