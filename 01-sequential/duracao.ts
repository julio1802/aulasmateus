import promptSync from 'prompt-sync';
const prompt = promptSync();

const duracaoSegundos = Number(prompt("Digite a duracao em segundos: "));

const horas = Math.floor(duracaoSegundos / 3600);
const minutos = Math.floor((duracaoSegundos % 3600) / 60);
const segundos = duracaoSegundos % 60;

console.log(`${horas}:${minutos}:${segundos}`);