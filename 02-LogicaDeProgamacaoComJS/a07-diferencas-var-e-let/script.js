// Let possui escopo de bloco
// Var possui apenas escopo de função

const verdadeira = true;

let nome = 'João';
var nome2 = 'João';

if (verdadeira) {
  console.log(nome);
  if (verdadeira) {
    let nome = 'Maria';
    var nome2 = 'Clara'
    console.log(nome, nome2);
  }
}

console.log(nome, nome2);


function falaOi() {
  var nome3 = 'Braga';
}

// console.log(nome3); retorna erro

console.log(nome4); // Nào retorna erro como em let, mas retorna undefined
var nome4 = 'Furlan';