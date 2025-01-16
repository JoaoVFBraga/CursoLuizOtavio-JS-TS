function criaLista(nomelista, sobrenomelista, idadelista) {
    return {
        nome: nomelista,
        sobrenome: sobrenomelista,
        idade: idadelista
    };
}
console.log(criaLista('João', 'Braga', 21));