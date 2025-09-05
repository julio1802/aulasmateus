import promptSync from 'prompt-sync';
const prompt = promptSync();

const horaInicio = Number(prompt('Hora inicial: '));
const horaFim = Number(prompt('Hora final: '));

let duracao;

if (horaFim > horaInicio) {
    duracao = horaFim - horaInicio;
} else if (horaFim === horaInicio) {
    duracao = 24;
} else {
    duracao = 24 - (horaInicio - horaFim);
}

console.log('O JOGO DUROU ' + duracao + ' HORA(S)');
