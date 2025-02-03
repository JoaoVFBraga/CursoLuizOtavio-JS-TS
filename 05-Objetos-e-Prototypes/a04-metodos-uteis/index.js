// Object.assign(); Uma forma de copiar o objeto que pode ser usada no lugar no ...spread

const produto = {
    nome: 'Produto',
    preco: 1.8
}
const caneca = Object.assign({}, produto, {material: 'porcelana'});

console.log(caneca);

// Object.keys(); Exibe um array com as chaves do objeto
console.log(Object.keys(produto));

// Object.freeze(); Não permite que o objeto seja alterado

const meuNome = {
    nome: 'João',
    sobrenome: 'Braga'
}

Object.freeze(meuNome);

// Object.getOwnPropertyDescriptor(); Exibe a descrição de uma propriedade de algum objeto

console.log(Object.getOwnPropertyDescriptor(meuNome, 'nome'));

// Object.values(); Exibe um array com os valores do objeto

console.log(Object.values(produto));

// Object.entries(); Cria um array principal, que contém um array para cada chave e valor no objeto

console.log(Object.entries(produto));