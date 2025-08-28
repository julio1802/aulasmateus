import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Deseja a tabuada para qual valor? "));

for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`)
}