const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const relogio = document.querySelector('.relogio');


function retornaHora(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

let timer;
let segundos = 0;
function iniciaRelogio() {
  timer = setInterval(() => {
    segundos++;
    relogio.innerHTML = retornaHora(segundos);
  }, 1000);
  relogio.classList.remove('pausado');
}

iniciar.addEventListener('click', () => {
  clearInterval(timer);
  iniciaRelogio();
})

pausar.addEventListener('click', () => {
  clearInterval(timer);
  relogio.classList.add('pausado');
})

zerar.addEventListener('click', () => {
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  segundos = 0;
})