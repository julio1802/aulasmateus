import promptSync from 'prompt-sync';
const prompt = promptSync();

const precoUnitario = Number(prompt('Preço unitário do produto: '));
const quantidade = Number(prompt('Quantidade comprada: '));
const dinheiroRecebido = Number(prompt('Dinheiro recebido: '));

const total = precoUnitario * quantidade;

if (dinheiroRecebido >= total) {
    const troco = dinheiroRecebido - total;
    console.log('TROCO = ' + troco.toFixed(2));
} else {
    const falta = total - dinheiroRecebido;
    console.log('DINHEIRO INSUFICIENTE. FALTAM ' + falta.toFixed(2) + ' REAIS');
}
