import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Dados da primeira pessoa: ");
const nome1 = prompt("Nome: ");
const idade1 = Number(prompt("Idade: "));  

console.log("Dados da segunda pessoa: ");
const nome2 = prompt("Nome: ");  
const idade2 = Number(prompt("Idade: "));  

const media = (idade1 + idade2) / 2;

console.log(`A idade média de ${nome1} e ${nome2} é de ${media.toFixed(1)} anos`);