import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { Credito } from "./Credito";
import { Debito } from "./Debito";

export class ContaCorrente extends Conta {

    private _limite: number;

    constructor (numero: string, limite: number, cliente: Cliente){
        super(numero,cliente);
        this._limite = limite;
    }

    calcularSaldo(): number {
        return this.totalCreditos() - this.totalDebitos();
    }

    transferir(valor: number, contaDestino: Conta): boolean {
        if (valor > 0 && valor <= this.calcularSaldo()){
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
        return false;
    }
}