import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Quantos elementos vai ter o vetor? '));

const numeros: number[] = [];

for (let i = 0; i < N; i++) {
    const num = Number(prompt('Digite um numero: '));
    numeros.push(num);
}

const soma = numeros.reduce((acc, val) => acc + val, 0);
const media = soma / N;

console.log('MEDIA DO VETOR = ' + media.toFixed(3));

console.log('ELEMENTOS ABAIXO DA MEDIA:');
numeros.forEach(num => {
    if (num < media) {
        console.log(num.toFixed(1));
    }
});
