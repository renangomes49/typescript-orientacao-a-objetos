"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const Pessoa_1 = require("./Pessoa");
class Cliente extends Pessoa_1.Pessoa {
    constructor(cpf, nome, telefone, vip) {
        super(cpf, nome, telefone);
        this._vip = vip;
        this._enderecos = [];
        this._contas = [];
    }
    autenticar() {
        return true;
    }
}
exports.Cliente = Cliente;
