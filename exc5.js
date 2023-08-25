//Crie uma funcao para ler as propriedades de um objeto e 
//exibir somente as propriedades do tipo string desse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
};

exibirString(filme);

function exibirString(obj) {
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop, obj[prop]);    
        }
    }
}