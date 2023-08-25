//Faça uma função que receba dois números e retorne o maior sobre eles

function retornaMaior(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};

console.log(retornaMaior(15, 7));

//outra forma de resolver

function retornaMaior2(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(retornaMaior(3, 22));