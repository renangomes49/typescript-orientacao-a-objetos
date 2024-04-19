"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const Conta_1 = require("./Conta");
class ContaPoupanca extends Conta_1.Conta {
    constructor(numero, cliente) {
        super(numero, cliente);
    }
}
exports.ContaPoupanca = ContaPoupanca;
