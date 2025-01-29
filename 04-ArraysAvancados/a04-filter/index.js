const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor, indice, array) {}

const numerosFiltrados = numeros.filter((valor) => {
    return (valor > 10)
})

console.log(numerosFiltrados);

// Exercício

const pessoas = [
    {nome: 'Luiz', idade: 63},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

// Retorne pessoas que tem o nome com 5 letras ou mais
const cincoLetras = pessoas.filter((valor) => {
    return valor.nome.length >= 5
});

console.log(cincoLetras);

// Retorne pessoas com mais de 50 anos
const maisDe50 = pessoas.filter((valor) => {
    return valor.idade > 50
});

console.log(maisDe50);

// Retorne pessoas cujo nome termina com a
const finalA = pessoas.filter((valor) => {
    return valor.nome.split('').pop() == 'a';
});

console.log(finalA);