import promptSync from 'prompt-sync';
const prompt = promptSync();

const distancia = Number(prompt('Distancia percorrida: ')); 
const combustivel = Number(prompt('Combustível gasto: ')); 

const consumoMedio = distancia / combustivel; 

console.log('Consumo medio = ' + consumoMedio.toFixed(3));
