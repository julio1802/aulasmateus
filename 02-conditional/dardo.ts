import promptSync from 'prompt-sync';
const prompt = promptSync();

const dist1 = Number(prompt('Digite a distancia 1: '));
const dist2 = Number(prompt('Digite a distancia 2: '));
const dist3 = Number(prompt('Digite a distancia 3: '));

const maiorDistancia = Math.max(dist1, dist2, dist3);

console.log('MAIOR DISTANCIA = ' + maiorDistancia.toFixed(2));
