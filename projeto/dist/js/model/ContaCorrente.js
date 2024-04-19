"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const Conta_1 = require("./Conta");
class ContaCorrente extends Conta_1.Conta {
    constructor(numero, limite, cliente) {
        super(numero, cliente);
        this._limite = limite;
    }
    get limite() {
        return this._limite;
    }
    set limite(limite) {
        this._limite = limite;
    }
    calcularSaldo() {
        return this.totalCreditos() - this.totalDebitos();
    }
    transferir(valor, contaDestino) {
        if (valor > 0 && valor <= this.calcularSaldo()) {
            this.sacar(valor);
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
}
exports.ContaCorrente = ContaCorrente;
