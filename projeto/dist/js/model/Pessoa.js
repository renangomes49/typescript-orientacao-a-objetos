"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(cpf, nome, telefone) {
        this._cpf = cpf;
        this._nome = nome;
        this._telefone = telefone;
    }
    get cpf() {
        return this._cpf;
    }
    get nome() {
        return this._nome;
    }
    get telefone() {
        return this._telefone;
    }
}
exports.Pessoa = Pessoa;
