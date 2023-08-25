// FizzBuzz - O algoritimo funciona assim:
// Divísivel por 3 => Retorna Fizz
// Divísivel por 5 => Retorna Buzz
// Divísivel por 3 e 5 => Retorna FizzBuzz
// Não é divísivel por 3 e 5 => Retorna a entrada
// Não é um número => Retorna 'Não é um número'

const resultado = fizzBuzz(7);
console.log(resultado);

function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 > 0) {
        return 'Fizz';
    } else if (num % 5 == 0 && num % 3 > 0) {
        return 'Buzz';
    } else if (num % 3 == 0 && num % 5 == 0) {
        return 'FizzBuzz';
    } else if (num % 3 > 0 && num % 5 > 0) {
        return 'O número ' + num + ' não dívisivel por 3 e 5';
    } else {
        return 'Não é um número';
        //if(typeof num !== 'number');
    }
};