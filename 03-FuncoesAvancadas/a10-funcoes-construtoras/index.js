function Pessoa(nome, sobrenome) {
  const ID = 12345;

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ': sou um método');
  };
}

const pessoa1 = new Pessoa('João', 'Braga')