const linha1 = document.querySelector('p');

const data = new Date();

function dayOfWeek(number){
  switch(number){
    case 0:
      return 'Domingo'
    case 1:
      return 'Segunda-feira'
    case 2:
      return 'Terça-feira'
    case 3:
      return 'Quarta-feira'
    case 4:
      return 'Quinta-feira'
    case 5:
      return 'Sexta-feira'
    case 6:
      return 'Sábado'
  }
}

function monthOfYear(number){
  switch(number){
    case 0:
      return 'Janeiro'
    case 1:
      return 'Fevereiro'
    case 2:
      return 'Março'
    case 3:
      return 'Abril'
    case 4: 
      return 'Maio'
    case 5: 
      return 'Junho'
    case 6:
      return 'Julho'
    case 7:
      return 'Agosto'
    case 8:
      return 'Setembro'
    case 9:
      return 'Outubro'
    case 10:
      return 'Novembro'
    case 11:
      return 'Dezembro'
  }
}

function formataData(date){
  const dayWeek = dayOfWeek(date.getDay());
  const day = date.getDate();
  const month = monthOfYear(date.getMonth());
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${dayWeek}, ${day} de ${month} de ${year}\n${hour}:${minute}`
}

linha1.innerText = formataData(data);