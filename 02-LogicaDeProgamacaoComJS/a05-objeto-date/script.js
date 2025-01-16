function formataData(data) {
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  const hora = data.getHours();
  const minuto = data.getMinutes();
  const segundos = data.getSeconds();

  return `${dia}/${mes}/${ano}T${hora}:${minuto}:${segundos}`
}

const data = new Date();
const dataFormatada = formataData(data);
console.log(dataFormatada);