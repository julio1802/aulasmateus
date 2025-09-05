import promptSync from 'prompt-sync';
const prompt = promptSync();

const x = Number(prompt('Valor de X: '));
const y = Number(prompt('Valor de Y: '));

if (x === 0 && y === 0) {
    console.log('Origem');
} else if (x === 0) {
    console.log('Eixo Y');
} else if (y === 0) {
    console.log('Eixo X');
} else if (x > 0 && y > 0) {
    console.log('Q1');
} else if (x < 0 && y > 0) {
    console.log('Q2');
} else if (x < 0 && y < 0) {
    console.log('Q3');
} else {
    console.log('Q4');
}
