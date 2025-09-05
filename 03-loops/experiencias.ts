import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Quantos casos de teste serao digitados? '));

let totalCobaias = 0;
let coelhos = 0;
let ratos = 0;
let sapos = 0;

for (let i = 0; i < N; i++) {
    const qtd = Number(prompt('Quantidade de cobaias: '));
    const tipo = prompt('Tipo de cobaia: ').toUpperCase();

    totalCobaias += qtd;

    if (tipo === 'C') {
        coelhos += qtd;
    } else if (tipo === 'R') {
        ratos += qtd;
    } else if (tipo === 'S') {
        sapos += qtd;
    }
}

const percCoelhos = (coelhos / totalCobaias) * 100;
const percRatos = (ratos / totalCobaias) * 100;
const percSapos = (sapos / totalCobaias) * 100;

console.log('RELATORIO FINAL:');
console.log('Total: ' + totalCobaias + ' cobaias');
console.log('Total de coelhos: ' + coelhos);
console.log('Total de ratos: ' + ratos);
console.log('Total de sapos: ' + sapos);
console.log('Percentual de coelhos: ' + percCoelhos.toFixed(2));
console.log('Percentual de ratos: ' + percRatos.toFixed(2));
console.log('Percentual de sapos: ' + percSapos.toFixed(2));
