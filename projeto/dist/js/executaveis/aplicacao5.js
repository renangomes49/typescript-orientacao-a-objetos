"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("../model/Cliente");
const ContaCorrente_1 = require("../model/ContaCorrente");
const cliente = new Cliente_1.Cliente("000.000.000-00", "Raimundo Costa", "(00) 100000000", true);
const contaCorrente = new ContaCorrente_1.ContaCorrente("1234-5", 0, cliente);
cliente.adicionarConta(contaCorrente);
contaCorrente.depositar(300);
contaCorrente.limite = 100;
const cliente2 = new Cliente_1.Cliente("000.000.000-11", "Raisson Costa", "(99) 120000000", true);
const contaCorrente2 = new ContaCorrente_1.ContaCorrente("1234-5", 0, cliente2);
cliente2.adicionarConta(contaCorrente2);
contaCorrente2.depositar(100);
if (contaCorrente.transferir(1000, contaCorrente2)) {
    console.log("Transferência realizada com sucesso!");
}
else {
    console.log("Saldo Insuficiente!");
}
