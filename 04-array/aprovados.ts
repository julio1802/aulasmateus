import promptSync from 'prompt-sync';
const prompt = promptSync();

const N = Number(prompt('Quantos alunos serao digitados? '));

const nomes: string[] = [];
const notas1: number[] = [];
const notas2: number[] = [];

for (let i = 0; i < N; i++) {
    const linha = prompt(`Digite nome, primeira e segunda nota do ${i + 1}o aluno: `);
    const partes = linha.trim().split(' ');
    const nota2 = parseFloat(partes.pop()!);
    const nota1 = parseFloat(partes.pop()!);
    const nome = partes.join(' ');
    nomes.push(nome);
    notas1.push(nota1);
    notas2.push(nota2);
}

console.log('Alunos aprovados:');
for (let i = 0; i < N; i++) {
    const media = (notas1[i] + notas2[i]) / 2;
    if (media >= 6.0) {
        console.log(nomes[i]);
    }
}
