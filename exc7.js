// Nota escolar, Obter a média a partir de um array
// Retornar o enquadramento da nota conforme abaixo:
// 00-59: E
// 60-69: D
// 70:79: C
// 80:89: B
// 90:100: A

const notas = [70, 70, 80];

console.log(mediaDoAluno(notas));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if (media < 59) return 'E';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
};

function calcularMedia(notas) {
    let soma = 0;
    for (let i of notas) {
        soma += i;
    }
    return soma / (notas.length);
}