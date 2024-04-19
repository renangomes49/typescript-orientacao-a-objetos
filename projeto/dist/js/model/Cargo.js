"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargo = void 0;
class Cargo {
    constructor(nome) {
        this._nome = nome;
        this._funcionarios = [];
    }
    get nome() {
        return this._nome;
    }
    adicionarFuncionario(funcionario) {
        this._funcionarios.push(funcionario);
    }
    toString() {
        let funcionarios = "Cargo: " + this.nome;
        funcionarios += ", Funcionários desse cargo: [ ";
        this._funcionarios.forEach((funcionario) => {
            funcionarios += funcionario.nome + " ";
        });
        funcionarios += "]\n";
        return funcionarios;
    }
}
exports.Cargo = Cargo;
