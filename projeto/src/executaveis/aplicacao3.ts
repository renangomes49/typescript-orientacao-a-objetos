import { Cliente } from "../model/Cliente";
import { ContaCorrente } from "../model/ContaCorrente";

const cliente: Cliente = new Cliente("000.000.000-00","Raimundo Costa","(00) 100000000",true);

const contaCorrente: ContaCorrente = new ContaCorrente("1234-5", 0, cliente);

cliente.adicionarConta(contaCorrente);

contaCorrente.depositar(100);
contaCorrente.depositar(100);
contaCorrente.depositar(100);
console.log("Saldo Atual: ", contaCorrente.calcularSaldo());

contaCorrente.sacar(50);
console.log("Saldo Atual: ", contaCorrente.calcularSaldo());