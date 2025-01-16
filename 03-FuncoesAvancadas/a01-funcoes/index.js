// Declaração de função (Funtion hoisting)
// A engine eleva as funcões para o topo do código ao executá-lo

function falaOi() {
  console.log('Oi')
};
falaOi();

// Function Express

const souUmDado = function () {
  console.log('Sou um dado');
}
souUmDado();

// Arrow Function

const funcaoArrow = () => {
  console.log('Sou uma arrow function');
}