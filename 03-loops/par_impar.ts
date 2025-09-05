import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Quantos numeros voce vai digitar? '));

for (let i = 0; i < N; i++) {
    const num = Number(prompt('Digite um numero: '));

    if (num === 0) {
        console.log('NULO');
    } else {
        const paridade = num % 2 === 0 ? 'PAR' : 'IMPAR';
        const sinal = num > 0 ? 'POSITIVO' : 'NEGATIVO';
        console.log(paridade + ' ' + sinal);
    }
}
