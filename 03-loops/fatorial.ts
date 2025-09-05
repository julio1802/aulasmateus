import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Digite o valor de N: '));

let fatorial = 1;

for (let i = 2; i <= N; i++) {
    fatorial *= i;
}

console.log('FATORIAL = ' + fatorial);
