import promptSync from 'prompt-sync';
const prompt = promptSync();

const minutos = Number(prompt('Digite a quantidade de minutos: '));

const valorBase = 50.00;
const franquia = 100;
const custoExcedente = 2.00;

let valorAPagar = valorBase;

if (minutos > franquia) {
    const excedente = minutos - franquia;
    valorAPagar += excedente * custoExcedente;
}

console.log(`Valor a pagar: R$ ${valorAPagar.toFixed(2)}`);
