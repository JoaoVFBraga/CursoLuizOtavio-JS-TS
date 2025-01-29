const meuNome = {
    nome: 'João Victor',
    sobrenome: 'Furlan Braga'
}

delete meuNome.nome;

console.log(meuNome);

const pessoa1 = {
    nome: 'João',
    sobrenome: 'Braga',
    falarNome: function() {
        console.log(`${this.nome} está falando seu nome.`);
    }
}

pessoa1.falarNome();