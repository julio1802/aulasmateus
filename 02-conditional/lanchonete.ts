
import promptSync from 'prompt-sync';
const prompt = promptSync();

const codigo = Number(prompt('Codigo do produto comprado: '));
const quantidade = Number(prompt('Quantidade comprada: '));

let preco = 0;

switch (codigo) {
    case 1:
        preco = 5.00;
        break;
    case 2:
        preco = 3.50;
        break;
    case 3:
        preco = 4.80;
        break;
    case 4:
        preco = 8.90;
        break;
    case 5:
        preco = 7.32;
        break;
    default:
        console.log('Codigo inválido');
        process.exit(1);
}

const valorAPagar = preco * quantidade;

console.log('Valor a pagar: R$ ' + valorAPagar.toFixed(2));
