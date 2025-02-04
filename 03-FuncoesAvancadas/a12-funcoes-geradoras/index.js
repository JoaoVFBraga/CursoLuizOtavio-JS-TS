// Funções geradoras em JavaScript são um tipo especial de função que pode pausar sua execução e posteriormente retomá-la. Elas são criadas com a palavra-chave function* e utilizam a instrução yield para pausar e retornar valores intermediários. O objetivo principal das funções geradoras é produzir uma sequência de valores sob demanda, ao invés de calcular todos os valores de uma vez.

function* minhaGeradora() {
  yield 1; // Pausa e retorna 1
  yield 2; // Pausa e retorna 2
  yield 3; // Pausa e retorna 3
}

const gen = minhaGeradora();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }