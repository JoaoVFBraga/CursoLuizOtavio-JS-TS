const frutas = ['Uva', 'Banana', 'Melão'];

for (let i in frutas) {
  console.log(`Index ${i}: ${frutas[i]}`);
}


const pessoa = {
  nome: 'João',
  sobrenome: 'Braga',
  idade: 21
}

for (let key in pessoa) {
  console.log(`Chave ${key}: ${pessoa[key]}`);
}