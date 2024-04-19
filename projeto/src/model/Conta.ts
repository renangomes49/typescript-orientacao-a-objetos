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
     
     depositar(valor: number): boolean {
        if (valor > 0){
            const credito: Credito = new Credito(valor, new Date);
            this._creditos.push(credito);
            return true;
        }
        return false;
     }

     private totalCreditos(): number {
        let total: number = 0;
        this._creditos.forEach((c) => {
            total += c.valor;
        });
        return total;
     }

     private totalDebitos(): number {
        let total: number = 0;
        this._debitos.forEach((d) => {
            total += d.valor;
        });
        return total;
     }

     sacar(valor: number): boolean {
        if (valor > 0 && valor <= (this.totalCreditos() - this.totalDebitos())){
            const debito: Debito = new Debito(valor, new Date);
            this._debitos.push(debito);
            return true;
        }
        return false;
     }
}