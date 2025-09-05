import promptSync from 'prompt-sync';
const prompt = promptSync();

const num1 = Number(prompt('Primeiro valor: '));
const num2 = Number(prompt('Segundo valor: '));
const num3 = Number(prompt('Terceiro valor: '));

const menor = Math.min(num1, num2, num3);

console.log('MENOR = ' + menor);
