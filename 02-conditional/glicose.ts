import promptSync from 'prompt-sync';
const prompt = promptSync();

const glicose = Number(prompt('Digite a medida da glicose: '));

let classificacao: string;

if (glicose <= 100) {
    classificacao = 'normal';
} else if (glicose > 100 && glicose <= 140) {
    classificacao = 'elevado';
} else {
    classificacao = 'diabetes';
}

console.log('Classificacao: ' + classificacao);
