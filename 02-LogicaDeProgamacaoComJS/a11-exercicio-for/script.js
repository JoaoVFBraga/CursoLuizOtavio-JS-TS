const elementos = [
  {tag: 'p', texto: 'Este é um parágrafo'},
  {tag: 'div', texto: 'Esta é uma div'},
  {tag: 'footer', texto: 'Este é um footer'},
  {tag: 'section', texto: 'Esta é uma section'},
];

const secao = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++){
  let {tag, texto} = elementos[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerText = texto;
  div.appendChild(tagCriada);
}

secao.appendChild(div);
