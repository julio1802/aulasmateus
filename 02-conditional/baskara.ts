import promptSync from 'prompt-sync';
const prompt = promptSync();

const a = Number(prompt('Coeficiente a: '));
const b = Number(prompt('Coeficiente b: '));
const c = Number(prompt('Coeficiente c: '));

const delta = b * b - 4 * a * c;

if (delta < 0) {
    console.log('Esta equacao nao possui raizes reais');
} else {
    const raizDelta = Math.sqrt(delta);
    const x1 = (-b + raizDelta) / (2 * a);
    const x2 = (-b - raizDelta) / (2 * a);

    console.log('X1 = ' + x1.toFixed(4));
    console.log('X2 = ' + x2.toFixed(4));
}
