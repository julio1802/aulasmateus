import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Digite dois numeros: ");
let x = Number(prompt(''));
let y = Number(prompt(''));

while (x != y) {
    if (x > y) {
        console.log("DECRESCENTE!")
    }
    else {
        console.log("CRESCENTE!")
    }
    console.log("Digite outros dois numeros: ");
    x = Number(prompt(''));
    y = Number(prompt(''));
}