import { Cliente } from "./Cliente";
import { Credito } from "./Credito";
import { Debito } from "./Debito";

export abstract class Conta {

    private _numero: string;
    private _cliente: Cliente;
    private _debitos: Debito[];
    private _creditos: Credito[];

    constructor (numero: string, cliente: Cliente){
        this._numero = numero;
        this._cliente = cliente;
        this._debitos = [];
        this._creditos = [];
     }
    
}