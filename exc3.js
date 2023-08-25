// Medidor de velocidade - Máximo: 70km
// A cada 5km/h a mais o motorista ganha 1 ponto na carteira
// Caso os pontos forem maiores que 12 a carteira é suspensa

const resultado = verificarVelocidade(81);
console.log(resultado);

function verificarVelocidade(velocidade) {
    if (velocidade <= 70) {
        return 'Ok';
    } else if (velocidade > 70 && velocidade <= 130) {
        let res = Math.floor((70 - velocidade) / 5) * -1;
        // a funcao Math.floor aredonda o numero para seu mais proximo
        // ex: 81 - arredonda para 80, para nao retornar numero quebrado
        return 'O motorista ganhou ' + res + ' pontos';
    } else {
        return 'A carteira foi suspensa';
    }
}