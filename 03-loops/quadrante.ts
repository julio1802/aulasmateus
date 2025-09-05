import promptSync from 'prompt-sync';
const prompt = promptSync();

while (true) {
    const entrada = prompt('Digite os valores das coordenadas X e Y: ');
    const [xStr, yStr] = entrada.trim().split(' ');
    const x = Number(xStr);
    const y = Number(yStr);

    if (x === 0 || y === 0) {
        break;
    }

    if (x > 0 && y > 0) {
        console.log('QUADRANTE Q1');
    } else if (x < 0 && y > 0) {
        console.log('QUADRANTE Q2');
    } else if (x < 0 && y < 0) {
        console.log('QUADRANTE Q3');
    } else {
        console.log('QUADRANTE Q4');
    }
}
