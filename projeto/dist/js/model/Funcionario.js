"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_1 = require("./Pessoa");
class Funcionario extends Pessoa_1.Pessoa {
    constructor(cpf, nome, telefone, salario) {
        super(cpf, nome, telefone);
        this._salario = salario;
        this._cargos = [];
    }
    autenticar() {
        return true;
    }
    adicionarCargo(cargo) {
        this._cargos.push(cargo);
    }
    toString() {
        let cargos = "Nome: " + this.nome + ", CPF: " + this.cpf
            + ", Telefone: " + this.telefone + ", Salário: " + this._salario;
        cargos += "\nCargos do " + this.nome + ": [ ";
        this._cargos.forEach((cargo) => {
            cargos += cargo.nome + " ";
        });
        cargos += "]\n";
        return cargos;
    }
}
exports.Funcionario = Funcionario;
