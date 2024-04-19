"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const Credito_1 = require("./Credito");
const Debito_1 = require("./Debito");
class Conta {
    constructor(numero, cliente) {
        this._numero = numero;
        this._cliente = cliente;
        this._debitos = [];
        this._creditos = [];
    }
    get debitos() {
        return this._debitos;
    }
    get creditos() {
        return this._creditos;
    }
    depositar(valor) {
        if (valor > 0) {
            const credito = new Credito_1.Credito(valor, new Date);
            this._creditos.push(credito);
            return true;
        }
        return false;
    }
    totalCreditos() {
        let total = 0;
        this._creditos.forEach((c) => {
            total += c.valor;
        });
        return total;
    }
    totalDebitos() {
        let total = 0;
        this._debitos.forEach((d) => {
            total += d.valor;
        });
        return total;
    }
    sacar(valor) {
        if (valor > 0 && valor <= (this.totalCreditos() - this.totalDebitos())) {
            const debito = new Debito_1.Debito(valor, new Date);
            this._debitos.push(debito);
            return true;
        }
        return false;
    }
}
exports.Conta = Conta;
