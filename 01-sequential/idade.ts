import promptSync from 'prompt-sync';
const prompt = promptSync();

const IdadePrimeira = Number(prompt("Idade da primeira pessoa: "));
const NomePrimeira = String(prompt("Nome da primeira pessoa: "));
const IdadeSegunda = Number(prompt("Idade da segunda pessoa: "));
const NomeSegunda = String(prompt("Nome da segunda pessoa: "));

const mediaIdade = (IdadePrimeira + IdadeSegunda / 2);

console.log(`Dados da primeira pessoa:\nNome: ${NomePrimeira}\nIdade: ${IdadePrimeira}\nDados da segunda pessoa:\nNome: ${NomeSegunda}\nIdade: ${IdadeSegunda}\nA idade média de ${NomePrimeira} e ${NomeSegunda} é de ${mediaIdade.toFixed(2)}`);
