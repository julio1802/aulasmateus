import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Quantos numeros voce vai digitar? '));

let dentro = 0;
let fora = 0;

for (let i = 0; i < N; i++) {
    const num = Number(prompt('Digite um numero: '));
    if (num >= 10 && num <= 20) {
        dentro++;
    } else {
        fora++;
    }
}

console.log(dentro + ' DENTRO');
console.log(fora + ' FORA');
