// Crie uma função que retorne a soma de todos
// os multiplos de 3 e 5 dentre um intervalo

somaNumeros(10);

function somaNumeros(intervalo) {
    let soma = 0;
    for (i = 0; i < intervalo; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            soma = i + soma;
        }
    }
    console.log('A soma e:' + ' ' + soma);
}