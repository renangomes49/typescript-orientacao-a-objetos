"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("../model/Cliente");
const ContaCorrente_1 = require("../model/ContaCorrente");
const ContaPoupanca_1 = require("../model/ContaPoupanca");
const cliente = new Cliente_1.Cliente("000.000.000-00", "Raimundo Costa", "(00) 100000000", true);
const contaCorrente = new ContaCorrente_1.ContaCorrente("1234-5", 0, cliente);
cliente.adicionarConta(contaCorrente);
contaCorrente.depositar(1000);
console.log("Saldo Atual do cliente " + cliente.nome + ": " + contaCorrente.calcularSaldo() + "\n");
const clienteContaPoupanca = new Cliente_1.Cliente("111.111.111-11", "Rafaela Sousa", "(11) 1 11111111", true);
const contaPoupanca = new ContaPoupanca_1.ContaPoupanca("9872-0", clienteContaPoupanca);
clienteContaPoupanca.adicionarConta(contaPoupanca);
contaPoupanca.depositar(1000);
console.log("Saldo Atual da cliente " + clienteContaPoupanca.nome + ": " +
    contaPoupanca.calcularSaldo() + "\n");
contaCorrente.transferir(500, contaPoupanca);
console.log("Saldo Atual do cliente " + cliente.nome + ": " + contaCorrente.calcularSaldo() + "\n");
console.log("Saldo Atual da cliente " + clienteContaPoupanca.nome + ": " +
    contaPoupanca.calcularSaldo() + "\n");
