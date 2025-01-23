// Uma função recursiva em JavaScript (ou qualquer outra linguagem de programação) é uma função que chama a si mesma dentro de sua definição. Ela é usada para resolver problemas que podem ser divididos em subproblemas menores do mesmo tipo, como cálculo de fatorial, sequência de Fibonacci, ou percorrer estruturas como árvores.

function recursiva(max) {
  console.log(max);
  if (max >= 100) return;
  max++;
  recursiva(max);
}

recursiva(0);