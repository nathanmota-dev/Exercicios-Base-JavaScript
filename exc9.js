// Faça uma função para mostrar números primos

exibirNumerosPrimos(15);

function exibirNumerosPrimos(numero) {

    for (let i = 2; i <= numero; i++) {
        let ehPrimo = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) console.log(i);
    }
}
