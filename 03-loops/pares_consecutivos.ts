import promptSync from 'prompt-sync';
const prompt = promptSync();

while (true) {
    const x = Number(prompt('Digite um numero inteiro: '));
    if (x === 0) break;

    let primeiroPar = x % 2 === 0 ? x : x + 1;
    let soma = 0;

    for (let i = 0; i < 5; i++) {
        soma += primeiroPar + i * 2;
    }

    console.log('SOMA = ' + soma);
}
