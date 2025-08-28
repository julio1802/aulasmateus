import promptSync from 'prompt-sync';
const prompt = promptSync();

const base = Number(prompt("Base do retangulo: "));
const altura = Number(prompt("Altura do retangulo: "));

const area = base * altura;
const perimetro = 2 * (base + altura);
const diagonal = 
    Math.sqrt(Math.pow(base, 2) + Math.pow(altura , 2));

console.log(`AREA = ${area.toFixed(4)}`); 
console.log(`PERIMETRO = ${perimetro.toFixed(4)}`);
console.log(`DIAGONAL = ${diagonal.toFixed(4)}`);  