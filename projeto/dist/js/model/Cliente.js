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
    listaEnderecos() {
        let enderecos = "";
        this._enderecos.forEach((endereco) => {
            enderecos += "[Nome do Cliente: " + this.nome
                + ", Cep: " + endereco.cep + ", Logradouro: " + endereco.logradouro
                + ", Numero: " + endereco.numero + ", Complemento: " + endereco.complemento
                + ", Cidade: " + endereco.cidade + ", Estado: " + endereco.uf + "]\n";
        });
        return enderecos;
    }
    adicionarEndereco(endereco) {
        this._enderecos.push(endereco);
    }
    adicionarConta(conta) {
        this._contas.push(conta);
    }
}
exports.Cliente = Cliente;
