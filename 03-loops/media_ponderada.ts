import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Quantos casos voce vai digitar? '));

for (let i = 0; i < N; i++) {
    const entrada = prompt('Digite tres numeros: ').split(' ');
    const a = Number(entrada[0]);
    const b = Number(entrada[1]);
    const c = Number(entrada[2]);

    const media = (a * 2 + b * 3 + c * 5) / 10;

    console.log('MEDIA = ' + media.toFixed(1));
}
