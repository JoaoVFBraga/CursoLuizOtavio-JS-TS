// Podemos usar o "arguements" para exibir todos os argumentos de uma função, porém, só funciona com funções declaradas com function

function conta(operador, acumulador, ...numeros) {
  console.log(arguments)
};
conta('+', 0, 10, 20, 30, 40, 50);

// Podemos utilizar o rest parameter (...) para se referir a todos os argumentos finais que estão depois dos já definidos nos parâmetros