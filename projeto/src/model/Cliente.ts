import { IUsuario } from "../interfaces/IUsuario";
import { Conta } from "./Conta";
import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa implements IUsuario {

    private _vip: boolean;
    private _enderecos: Endereco[];
    private _contas: Conta[];

    constructor (cpf: string, nome: string, telefone: string, vip: boolean){ 
        super(cpf,nome,telefone);
        this._vip = vip;
        this._enderecos = [];
        this._contas = [];
    }

    autenticar(): boolean {
        return true;
    }

    public listaEnderecos(): string {
        let enderecos: string = "";
        this._enderecos.forEach((endereco) => {
            enderecos += "[Nome do Cliente: " + this.nome
                + ", Cep: " + endereco.cep + ", Logradouro: " + endereco.logradouro
                + ", Numero: " + endereco.numero + ", Complemento: " + endereco.complemento
                + ", Cidade: " + endereco.cidade + ", Estado: " + endereco.uf + "]\n"
        })
        return enderecos;
    }

    public adicionarEndereco(endereco: Endereco): void {
        this._enderecos.push(endereco);
    }
    
    public adicionarConta(conta: Conta): void {
        this._contas.push(conta);
    }
}