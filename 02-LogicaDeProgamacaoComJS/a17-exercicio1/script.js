// Escreva uma função que receba dois números e retorne o maior deles

function retortaMaior(num1, num2) {
  if (num1 > num2) {
    return num1
  } else if (num1 < num2) {
    return num2
  } else {
    return 'Os números são iguais'
  }
}

console.log(retortaMaior(30, 30));