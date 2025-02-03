// Object.setPrototypeOf(); É usado para modificar o prototype de algum objeto

function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const caneca = {
    nome: 'Caneca',
    preco: 15,
};

Object.setPrototypeOf(caneca, Produto.prototype);
caneca.aumento(10);

console.log(caneca);

// Object.create(); É possível criar um objeto e já setar o prototype dele

const copo = Object.create(Produto.prototype);
copo.preco = 5;
copo.aumento(50);
console.log(copo)
