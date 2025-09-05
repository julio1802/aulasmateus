import promptSync from 'prompt-sync';
const prompt = promptSync();

const X = Number(prompt('Digite o valor de X: '));

for (let i = 1; i <= X; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
