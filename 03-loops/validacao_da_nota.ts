import promptSync from 'prompt-sync';
const prompt = promptSync();

function lerNota(mensagem: string): number {
    let nota: number;
    while (true) {
        nota = Number(prompt(mensagem));
        if (nota >= 0 && nota <= 10) {
            break;
        } else {
            mensagem = 'Valor invalido! Tente novamente: ';
        }
    }
    return nota;
}

const nota1 = lerNota('Digite a primeira nota: ');
const nota2 = lerNota('Digite a segunda nota: ');

const media = (nota1 + nota2) / 2;

console.log('MEDIA = ' + media.toFixed(2));
