"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numero, cliente) {
        this._numero = numero;
        this._cliente = cliente;
        this._debitos = [];
        this._creditos = [];
    }
}
exports.Conta = Conta;
