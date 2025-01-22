// Funções de callback no JavaScript são funções que são passadas como argumento para outra função e são executadas posteriormente, geralmente após a conclusão de alguma operação. Elas permitem que você execute um código depois que algo específico aconteceu.

function saudacao(nome, callback) {
  console.log(`Olá, ${nome}!`);
  callback(); // Executa a função passada como callback
}

function despedida() {
  console.log("Tchau! Até a próxima!");
}

// Chamando a função com um callback
saudacao("João", despedida);
// Saída:
// Olá, João!
// Tchau! Até a próxima!