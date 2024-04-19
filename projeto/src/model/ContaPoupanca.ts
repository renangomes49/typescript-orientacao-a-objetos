import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    
    constructor (numero: string, cliente: Cliente){
        super(numero,cliente);
    }

     calcularSaldo(): number {
        return this.totalCreditos() - this.totalDebitos();
    }
}

