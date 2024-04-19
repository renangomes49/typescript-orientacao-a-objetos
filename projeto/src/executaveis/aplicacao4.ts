import { Cliente } from "../model/Cliente";
import { ContaCorrente } from "../model/ContaCorrente";
import { ContaPoupanca } from "../model/ContaPoupanca";

const cliente: Cliente = new Cliente("000.000.000-00","Raimundo Costa","(00) 100000000",true);

const contaCorrente: ContaCorrente = new ContaCorrente("1234-5", 0, cliente);

cliente.adicionarConta(contaCorrente);

contaCorrente.depositar(1000);
console.log("Saldo Atual do cliente " +cliente.nome + ": " + contaCorrente.calcularSaldo()+"\n");

const clienteContaPoupanca: Cliente = new Cliente("111.111.111-11","Rafaela Sousa",
    "(11) 1 11111111", true);

const contaPoupanca: ContaPoupanca = new ContaPoupanca("9872-0", clienteContaPoupanca);

clienteContaPoupanca.adicionarConta(contaPoupanca);
contaPoupanca.depositar(1000);
console.log("Saldo Atual da cliente " +clienteContaPoupanca.nome + ": " + 
    contaPoupanca.calcularSaldo()+"\n");

contaCorrente.transferir(500,contaPoupanca);

console.log("Saldo Atual do cliente " +cliente.nome + ": " + contaCorrente.calcularSaldo()+"\n");
console.log("Saldo Atual da cliente " +clienteContaPoupanca.nome + ": " + 
    contaPoupanca.calcularSaldo()+"\n");