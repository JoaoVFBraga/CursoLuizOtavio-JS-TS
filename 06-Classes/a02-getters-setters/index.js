const _velocidade = Symbol();

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    // É usado para quando é necessário alterar o valor de alguma chave

    get velocidade() {
        return this[_velocidade];
    }
    // É usado para quando é necessário retornar o valor de alguma chave

    acelerar() {
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if(this[_velocidade] <= 0 ) return;
        this[_velocidade]--;
    }
}