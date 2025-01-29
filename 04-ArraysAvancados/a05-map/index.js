// O map usa o array original para criar um novo array alterado

// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map((valor) => {
    return valor * 2;
});

console.log(numerosDobrados);


// Para cada elemento:

const pessoas = [
    {nome: 'Luiz', idade: 63},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// Retorne apenas uma string com o nome da pessoa
const apenasNomes = pessoas.map(obj => obj.nome);

console.log(apenasNomes);

// Remova apenas a chave "nome" do objeto
const apenasIdade = pessoas.map((obj) => {
    return {idade: obj.idade}
});

console.log(apenasIdade);

// Adicione uma chave id em cada objeto
const chaveId = pessoas.map((obj, indice) => {
    return {...obj, id: indice}
})

console.log(chaveId)

