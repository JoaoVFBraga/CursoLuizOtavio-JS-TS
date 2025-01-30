// Get: Obtém o valor
// Set: Define o valor

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoqurPrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            estoqurPrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);