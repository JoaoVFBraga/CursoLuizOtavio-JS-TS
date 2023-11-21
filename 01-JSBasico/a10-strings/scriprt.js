// O carácter de escape é a barra invertida (\)
let escape = 'Teste de \'escape\'';
console.log(escape);

// Índices            0123456789
const stringIndice = 'João Braga';
// Exibem o carácter do índice escolhido
console.log(stringIndice[2]);
console.log(stringIndice.charAt(6));
// Exibe o índice inicial da palavra escolhida
console.log(stringIndice.indexOf('Braga'));
// Exibe o índice da palavra escolhida após determinado índice
console.log(stringIndice.indexOf('a', 8));
// Exibe o índice da palavra escolhida, porém começa a busca de trás para frente
console.log(stringIndice.lastIndexOf('a'));
// Exibe a quantidade de carácteres da string
console.log(stringIndice.length);
// Corta uma parte da string
console.log(stringIndice.slice(0, 4));
// Divide a string a cada carácter determinado
console.log(stringIndice.split('a'));
// Transforma a string em maiúscula
console.log(stringIndice.toUpperCase());
// Transforma a string em minúscula
console.log(stringIndice.toLowerCase());

