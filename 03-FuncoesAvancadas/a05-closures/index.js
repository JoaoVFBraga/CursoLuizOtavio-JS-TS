function saudacao(nome) {
  const mensagem = `Olá, ${nome}!`;

  return function () {
    console.log(mensagem);
  };
}

const saudarPedro = saudacao("Pedro");
saudarPedro(); // "Olá, Pedro!"

// O conceito de closure em JavaScript refere-se a uma função que "lembra" do ambiente no qual foi criada, mesmo após esse ambiente ter sido encerrado. Ele ocorre quando uma função interna tem acesso às variáveis de uma função externa, mesmo depois que essa função externa já foi executada.