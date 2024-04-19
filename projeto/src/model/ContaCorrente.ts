import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta {

    private _limite: number;

    constructor (numero: string, limite: number, cliente: Cliente){
        super(numero,cliente);
        this._limite = limite;
     }
}