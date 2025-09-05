import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Quantas pessoas serao digitadas? '));

let maiorAltura = 0;
let menorAltura = Number.MAX_VALUE;
let somaAlturaMulheres = 0;
let contadorMulheres = 0;
let contadorHomens = 0;

for (let i = 0; i < N; i++) {
    const altura = Number(prompt(`Altura da ${i + 1}a pessoa: `));
    const genero = prompt(`Genero da ${i + 1}a pessoa: `).toUpperCase();

    if (altura > maiorAltura) {
        maiorAltura = altura;
    }
    if (altura < menorAltura) {
        menorAltura = altura;
    }

    if (genero === 'F') {
        somaAlturaMulheres += altura;
        contadorMulheres++;
    } else if (genero === 'M') {
        contadorHomens++;
    }
}

const mediaAlturaMulheres = contadorMulheres > 0 ? (somaAlturaMulheres / contadorMulheres) : 0;

console.log('Menor altura = ' + menorAltura.toFixed(2));
console.log('Maior altura = ' + maiorAltura.toFixed(2));
console.log('Media das alturas das mulheres = ' + mediaAlturaMulheres.toFixed(2));
console.log('Numero de homens = ' + contadorHomens);
