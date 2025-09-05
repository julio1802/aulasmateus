import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Quantos elementos vai ter o vetor? '));
const numeros: number[] = [];

for (let i = 0; i < N; i++) {
    const num = Number(prompt('Digite um numero: '));
    numeros.push(num);
}

const pares = numeros.filter(num => num % 2 === 0);

if (pares.length === 0) {
    console.log('NENHUM NUMERO PAR');
} else {
    const soma = pares.reduce((acc, val) => acc + val, 0);
    const media = soma / pares.length;
    console.log('MEDIA DOS PARES = ' + media.toFixed(1));
}
