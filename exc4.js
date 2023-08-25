//Funcao recebe uma quantidade de números para avaliar se é par ou impar e exibe

exibirTipo(10); //exemplo: 10 valores

function exibirTipo(max){
    for(let i=0; i<max; i++){
        if(i % 2 == 0){
            console.log(i, 'PAR');
        } else{
            console.log(i, 'IMPAR');
        }
    }
}