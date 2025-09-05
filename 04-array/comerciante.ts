import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Serao digitados dados de quantos produtos? '));

let lucroMenor10 = 0;
let lucroEntre10e20 = 0;
let lucroMaior20 = 0;

let valorTotalCompra = 0;
let valorTotalVenda = 0;

for (let i = 1; i <= N; i++) {
    console.log(`Produto ${i}:`);
    const nome = prompt('Nome: ');
    const precoCompra = Number(prompt('Preco de compra: '));
    const precoVenda = Number(prompt('Preco de venda: '));

    valorTotalCompra += precoCompra;
    valorTotalVenda += precoVenda;

    const lucro = precoVenda - precoCompra;
    const percentualLucro = (lucro / precoCompra) * 100;

    if (percentualLucro < 10) {
        lucroMenor10++;
    } else if (percentualLucro <= 20) {
        lucroEntre10e20++;
    } else {
        lucroMaior20++;
    }
}

const lucroTotal = valorTotalVenda - valorTotalCompra;

console.log('RELATORIO:');
console.log('Lucro abaixo de 10%: ' + lucroMenor10);
console.log('Lucro entre 10% e 20%: ' + lucroEntre10e20);
console.log('Lucro acima de 20%: ' + lucroMaior20);
console.log('Valor total de compra: ' + valorTotalCompra.toFixed(2));
console.log('Valor total de venda: ' + valorTotalVenda.toFixed(2));
console.log('Lucro total: ' + lucroTotal.toFixed(2));
