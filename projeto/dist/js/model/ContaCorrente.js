"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const Conta_1 = require("./Conta");
class ContaCorrente extends Conta_1.Conta {
    constructor(numero, limite, cliente) {
        super(numero, cliente);
        this._limite = limite;
    }
}
exports.ContaCorrente = ContaCorrente;
