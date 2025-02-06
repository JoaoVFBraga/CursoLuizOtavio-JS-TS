class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }
}

const primeiraPessoa = new Pessoa('João', 'Braga');
primeiraPessoa.falar();