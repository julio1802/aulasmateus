import promptSync from 'prompt-sync';
const prompt = promptSync();

const entrada = prompt('Digite dois numeros: ').split(' ');
const x = Number(entrada[0]);
const y = Number(entrada[1]);

const menor = Math.min(x, y);
const maior = Math.max(x, y);

let somaImpares = 0;

for (let i = menor + 1; i < maior; i++) {
    if (i % 2 !== 0) {
        somaImpares += i;
    }
}

console.log('SOMA DOS IMPARES = ' + somaImpares);
