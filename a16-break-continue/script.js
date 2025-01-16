const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2) {
    console.log('Pulado');
    continue;
  }
  if (numero === 8) {
    console.log('Fechando o laço');
    break;
  }

  console.log(numero);
}