function verificaCPF(numero) {
    const cpf = Array.from(numero.replace(/\D+/g, ''));
    const cpfParaCalculo = [...cpf];
    cpfParaCalculo.splice(-2, 2);

    const digito1 = calculaDigito(cpfParaCalculo);
    cpfParaCalculo.push(digito1);

    const digito2 = calculaDigito(cpfParaCalculo);
    cpfParaCalculo.push(digito2);

    if(cpf.join('') == cpfParaCalculo.join('')) {
        console.log(`O CPF ${numero} é válido`)
    } else {
        console.log(`O CPF ${numero} não é válido`)
    }

}

function calculaDigito(cpf) {
    const soma1 = cpf.reduce((acumulador, valor, indice) => {
        return Number(valor) * ((cpf.length + 1) - indice) + acumulador
    }, 0);
    let digito = 11 - (soma1 % 11);
    if (digito > 9) {
        digito = 0
    }
    return digito.toString();
}

verificaCPF('491.227.588-36');
verificaCPF('133.060.164-03');