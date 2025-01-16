const paragrafos = document.querySelector('.div-paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const bgColorBody = estilosBody.backgroundColor;

for (let p of ps) {
  p.style.color = 'white';
  p.style.backgroundColor = bgColorBody;
}