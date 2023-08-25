// Criar uma função que exiba a quantidade de *
// que que aquela linha possui

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    for (let i = 1; i <= linhas; i++) {
        let n = '';
        for (let j = 0; j < i; j++) {
            n += '*';
        }
        console.log(n);
    }
}
