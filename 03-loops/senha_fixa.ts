import promptSync from 'prompt-sync';
const prompt = promptSync();

const senhaCorreta = 2002;
let senha: number;

while (true) {
    senha = Number(prompt('Digite a senha: '));
    if (senha === senhaCorreta) {
        console.log('Acesso permitido!');
        break;
    } else {
        console.log('Senha Invalida! Tente novamente:');
    }
}
