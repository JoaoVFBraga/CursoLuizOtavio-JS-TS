// Para alterar o tipo de um number para string utiliza-se .toString(). Utilizando o "2" dentro de .toString(2), o resultado será o número informado em número binário.
const num1 = 1;
const num2 = 2.5;
console.log(num1.toString() + num2);

// .toFixed serve para arredondarmos um número em quantas casas decimais quisermos
console.log(15.23242123.toFixed(3));

// Number.isInterger(numeroAqui) verifica se o número é inteiro e retorna um valor boolean
console.log(Number.isInteger(25.67));

// Number.isNaN(numeroAqui) verifica se o número é um NaN e retorna um valor boolean
console.log(Number.isNaN(25.67));
