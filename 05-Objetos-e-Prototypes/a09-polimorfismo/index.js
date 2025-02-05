/*
O polimorfismo é um conceito fundamental da programação orientada a objetos (OOP) que permite que objetos de diferentes classes sejam tratados como se fossem da mesma classe, desde que compartilhem uma interface comum (como métodos ou propriedades). Em outras palavras, o polimorfismo permite que um mesmo método ou operação se comporte de maneiras diferentes dependendo do objeto que o invoca.

Em JavaScript, o polimorfismo é implementado principalmente por meio de herança e sobrescrita de métodos.
*/

function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
  }
  
  Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }
  
    this.saldo -= valor;
    this.verSaldo();
  };
  
  Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
  };
  
  Conta.prototype.verSaldo = function() {
    console.log(
      `Ag/c: ${this.agencia}/${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)}`
    );
  };
  
  function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
  }
  CC.prototype = Object.create(Conta.prototype);
  CC.prototype.constructor = CC;
  
  CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
      console.log(`Saldo insuficiente: ${this.saldo}`);
      return;
    }
  
    this.saldo -= valor;
    this.verSaldo();
  };
  
  function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
  }
  CP.prototype = Object.create(Conta.prototype);
  CP.prototype.constructor = CP;
  
  const cc = new CC(11, 22, 0, 100);
  cc.depositar(10);
  cc.sacar(110);
  cc.sacar(1);
  
  console.log();
  
  const cp = new CP(12, 33, 0);
  cp.depositar(10);
  cp.sacar(10);
  cp.sacar(1);
  