import * as readlineSync from 'readline-sync';

// Ler os valores de X e Y
let x: number = parseInt(readlineSync.question("Digite o valor de X: "));
let y: number = parseInt(readlineSync.question("Digite o valor de Y: "));

// Calcular a soma
let soma: number = x + y;

// Mostrar o resultado
console.log("SOMA = " + soma);
