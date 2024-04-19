import { Cliente } from "./Cliente";

export class Endereco {

    private _cep: string;
    private _logradouro: string;
    private _numero: string;
    private _complemento: string
    private _cidade: string;
    private _uf: string;
    private _cliente: Cliente;

    constructor (cep: string, logradouro: string, numero: string, complemento: string,
        cidade: string, uf: string, cliente: Cliente
    ){ 
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
        this._cliente = cliente;
    }
}