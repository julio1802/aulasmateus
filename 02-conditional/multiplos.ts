// Instale prompt-sync: npm install prompt-sync

import promptSync from 'prompt-sync';
const prompt = promptSync();

const num1 = Number(prompt('Digite dois numeros inteiros: '));
const num2 = Number(prompt(''));

if (num1 % num2 === 0 || num2 % num1 === 0) {
    console.log('Sao multiplos');
} else {
    console.log('Nao sao multiplos');
}
