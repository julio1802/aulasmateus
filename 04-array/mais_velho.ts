// Instale prompt-sync: npm install prompt-sync

import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Quantas pessoas voce vai digitar? '));

const nomes: string[] = [];
const idades: number[] = [];

for (let i = 0; i < N; i++) {
    console.log(`Dados da ${i + 1}a pessoa:`);
    const nome = prompt('Nome: ');
    const idade = Number(prompt('Idade: '));
    nomes.push(nome);
    idades.push(idade);
}

let maiorIdade = idades[0];
let indiceMaisVelho = 0;

for (let i = 1; i < N; i++) {
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        indiceMaisVelho = i;
    }
}

console.log('PESSOA MAIS VELHA: ' + nomes[indiceMaisVelho]);
