//Igualdade de Objetos - comparando propriedades e endereço de memória

function Endereco(rua, cidade, cep) {
    this.rua = rua,
        this.cidade = cidade,
        this.cep = cep;
};

const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');
const endereco3 = endereco1;

//compara se as propriedas são iguais
function saoIguais(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.cep === endereco2.cep
}

console.log(saoIguais(endereco1, endereco2))

//compara se os endereços de memória são iguais
function temEnderecoMemoriaIguais(endereco1, endereco2) {
    return endereco1 === endereco2;
    //endereco1 === endereco3; dessa forma os endereços seriam iguais
    //ponteiro = a variavel aponta para o endereco da outra
}

console.log(temEnderecoMemoriaIguais(endereco1, endereco2)); 