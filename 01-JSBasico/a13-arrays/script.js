// Arrays são simplesmente listas com qualquer tipo de dado dentro
// Eles também possuem índices
const alunos = ['João', 'Maria', 'Felipe'];
console.log(alunos[1]);

// Itens podem ser alterados
alunos[2] = 'José';
console.log(alunos);

// Adicionados ao final
alunos.push('Gabriela');
console.log(alunos);

// Adicionados ao inicio
alunos.unshift('Fábio');
console.log(alunos);

// Removidos no final = alunos.pop()

// Removidos do começo = alunos.shift()

// Removidos do meio = delete alunos[x]
