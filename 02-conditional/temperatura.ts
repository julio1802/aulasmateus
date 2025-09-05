import promptSync from 'prompt-sync';
const prompt = promptSync();

const escala = prompt('Voce vai digitar a temperatura em qual escala (C/F)? ').toUpperCase();

if (escala === 'C') {
    const tempC = Number(prompt('Digite a temperatura em Celsius: '));
    const tempF = (tempC * 9/5) + 32;
    console.log('Temperatura equivalente em Fahrenheit: ' + tempF.toFixed(2));
} else if (escala === 'F') {
    const tempF = Number(prompt('Digite a temperatura em Fahrenheit: '));
    const tempC = (tempF - 32) * 5/9;
    console.log('Temperatura equivalente em Celsius: ' + tempC.toFixed(2));
} else {
    console.log('Escala inválida. Por favor, digite C ou F.');
}
