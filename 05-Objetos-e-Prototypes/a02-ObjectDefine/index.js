// defineProperty

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave mesmo se não for definida
        value: estoque, // Define o valor da chave
        writable: false, // Impossobilita a mudança do valor
        configurable: true // Perfite reconfigurar a chave
    });

    // Object.defineProperties(this, {
    //     nome: {
    //     enumerable: true,
    //     value: nome,
    //     writable: false,
    //     configurable: true
    //     },
    //     preco: {
    //     enumerable: true,
    //     value: preco,
    //     writable: false,
    //     configurable: true
    //     }
    // })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

console.log(Object.keys(p1));