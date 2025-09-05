import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Quantas pessoas serao digitadas? '));

type Pessoa = {
    nome: string;
    idade: number;
    altura: number;
};

const pessoas: Pessoa[] = [];

for (let i = 0; i < N; i++) {
    console.log(`Dados da ${i + 1}a pessoa:`);
    const nome = prompt('Nome: ');
    const idade = Number(prompt('Idade: '));
    const altura = Number(prompt('Altura: '));
    pessoas.push({ nome, idade, altura });
}

const somaAlturas = pessoas.reduce((acc, pessoa) => acc + pessoa.altura, 0);
const alturaMedia = somaAlturas / N;

const menoresDe16 = pessoas.filter(p => p.idade < 16);
const percentualMenores = (menoresDe16.length / N) * 100;

console.log(`Altura média: ${alturaMedia.toFixed(2)}`);
console.log(`Pessoas com menos de 16 anos: ${percentualMenores.toFixed(1)}%`);
menoresDe16.forEach(p => console.log(p.nome));
