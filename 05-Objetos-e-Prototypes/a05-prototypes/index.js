/*
JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definição de Protótipo:
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Quando você tenta acessar uma propriedade ou método em um objeto, e essa propriedade não existe no próprio objeto, o JavaScript automaticamente procura no prototype dele, e assim por diante, até encontrar ou chegar ao fim da cadeia (que é null).
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}