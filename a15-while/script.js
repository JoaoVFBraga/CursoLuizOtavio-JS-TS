function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while(rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

// Usando o while, se o primeiro número for 10, o laço não será executado, pois while verifica a condição e depois executa o que é pedido

do {
  rand = random(min, max);
  console.log(rand);
} while(rand !== 10);

// Usando o do while isso não ocorre, pois primeiro ele executa a ação e depois verifica a condição