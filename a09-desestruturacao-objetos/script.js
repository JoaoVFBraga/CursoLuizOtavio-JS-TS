const pessoa = {
  nome: 'João',
  sobrenome: 'Braga',
  idade: 21,
  endereco: {
    rua: 'Prof Dulcina',
    numero: 129
  }
}

const { nome, endereco: {rua: r, numero}} = pessoa;
console.log(nome, r, numero)