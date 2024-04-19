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
}