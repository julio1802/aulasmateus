import promptSync from 'prompt-sync';
const prompt = promptSync();

let soma = 0;
let contador = 0;

console.log('Digite as idades:');

while (true) {
    const idade = Number(prompt(''));

    if (idade < 0) {
        if (contador === 0) {
            console.log('IMPOSSIVEL CALCULAR');
        }
        break;
    }

    soma += idade;
    contador++;
}

if (contador > 0) {
    const media = soma / contador;
    console.log('MEDIA = ' + media.toFixed(2));
}
