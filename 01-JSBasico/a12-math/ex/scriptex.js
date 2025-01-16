const numeroDoUsuario = Number(prompt("Escolha seu número:"));

const numerojs = document.getElementById('numero');
numerojs.innerHTML = numeroDoUsuario; 

const raizjs = document.getElementById('raiz');
raizjs.innerHTML = (Math.sqrt(numeroDoUsuario));

const inteirojs = document.getElementById('inteiro');
inteirojs.innerHTML = numeroDoUsuario;

const respostaInteirojs = document.getElementById('respostaInteiro');
respostaInteirojs.innerHTML = Number.isInteger(numeroDoUsuario);

const nanjs = document.getElementById('nan');
nanjs.innerHTML = Number.isNaN(numeroDoUsuario);

const baixojs = document.getElementById('baixo');
baixojs.innerHTML = Math.floor(numeroDoUsuario);

const cimajs = document.getElementById('cima');
cimajs.innerHTML = Math.ceil(numeroDoUsuario);

const decimaljs = document.getElementById('decimal');
decimaljs.innerHTML = numeroDoUsuario.toFixed(2);
