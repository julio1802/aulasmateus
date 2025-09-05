import promptSync from 'prompt-sync';
const prompt = promptSync();

const r = Number(prompt('Digite o valor do raio do circulo: '));

const area = Math.PI * r * r;

console.log('AREA = ' + area.toFixed(3));
