// Operadores aritméticos

// Adição
const adicao = 5 + 10;
console.log(adicao);

// Subtração 
const subtracao = 10 - 5;
console.log(subtracao);

// Divisão
const divisao = 10 / 2;
console.log(divisao);

// Multiplicação
const multiplicacao = 5 * 10;
console.log(multiplicacao);

// Potenciação
const potencicao = 2 * 10;
console.log(potencicao);

// Resto da divisão
const restoDaDivisao = 10 % 3;
console.log(restoDaDivisao);

// Precedência

/*
   1 - ( )
   2 - **
   3 - *, /, %
   4 - +, -
*/

// Operador de incremento
/* 
   Serve para acrescentar 1 ao valor da variável, pode ser utilizado tanto no pré (acrescenta 1 ao valor da variável e depois é exibido o valor já acrescentado, quanto no pós (exibe o valor não acrescentado e depois o valor é acrescentado) 
*/
let contador1 = 1;
contador1++;
contador1++;
console.log(contador1);

// Operador de decremento
/*
   Funciona da mesma maneira que o opearador de incremento, porém decresce 1 ao valor da variável
*/
let contador2 = 1;
contador2--;
contador2--;
console.log(contador2);

// Outra maneira
/*
   Podemos fazer um incremento ou decremento com valores diferentes de 1, e até mesmo com operadores diferentes.
*/
let contador3 = 1;
contador3 += 2;
contador3 += 2;
contador3 += 2;
console.log(contador3);

let contador4 = 1;
contador4 *= 2;
contador4 *= 2;
contador4 *= 2;
console.log(contador4);

// NaN - Not a Number
/*
   Representa algum erro durante a execução da conta
*/

// parseInt
/*
   Retorna o valor como um número inteiro
*/
const num1 = 10;
const num2 = parseInt('5.2');
const soma1 = num1 + num2;
console.log(typeof num2);
console.log(soma1);

// parseFloat
/*
   Retorna o valor como um número de ponto flutuante
*/
const num3 = 10;
const num4 = parseFloat('5.2');
const soma2 = num3 + num4;
console.log(typeof num4);
console.log(soma2);

// Number
/*
   Retorna o valor como um número
*/
const num5 = 10;
const num6 = Number('5.2');
const soma3 = num5 + num6;
console.log(typeof num6);
console.log(soma3);