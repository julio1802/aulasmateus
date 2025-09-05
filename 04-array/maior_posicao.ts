// Instale prompt-sync: npm install prompt-sync

import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Quanto numeros voce vai digitar? '));
const numeros: number[] = [];

for (let i = 0; i < N; i++) {
    const num = Number(prompt('Digite um numero: '));
    numeros.push(num);
}

let maiorValor = numeros[0];
let posicaoMaior = 0;

for (let i = 1; i < N; i++) {
    if (numeros[i]! > maiorValor) {
    maiorValor = numeros[i]!;
    posicaoMaior = i;
    }

}

console.log('MAIOR VALOR = ' + maiorValor);
console.log('POSICAO DO MAIOR VALOR = ' + posicaoMaior);
