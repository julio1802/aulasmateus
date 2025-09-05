import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Quantos numeros voce vai digitar? '));
const numeros: number[] = [];

for (let i = 0; i < N; i++) {
    const num = Number(prompt('Digite um numero: '));
    numeros.push(num);
}

const pares = numeros.filter(num => num % 2 === 0);

console.log('NUMEROS PARES: ' + pares.join(' '));
console.log('QUANTIDADE DE PARES = ' + pares.length);
