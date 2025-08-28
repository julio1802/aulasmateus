import promptSync from 'prompt-sync';
const prompt = promptSync();

const n1 = Number(prompt("Digite a primeira nota: "));  
const n2 = Number(prompt("Digite a segunda nota: "));  

const notaFinal = n1 + n2;

console.log(`NOTA FINAL = ${notaFinal.toFixed(1)}`);

if (notaFinal < 60.0) {
    console.log("REPROVADO ");   
}
