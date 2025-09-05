import promptSync from 'prompt-sync';
const prompt = promptSync();

const casos = Number(prompt('Quantos casos voce vai digitar? '));

for (let i = 0; i < casos; i++) {
    const numerador = Number(prompt('Entre com o numerador: '));
    const denominador = Number(prompt('Entre com o denominador: '));

    if (denominador === 0) {
        console.log('DIVISAO IMPOSSIVEL');
    } else {
        const resultado = numerador / denominador;
        console.log('DIVISAO = ' + resultado.toFixed(2));
    }
}
