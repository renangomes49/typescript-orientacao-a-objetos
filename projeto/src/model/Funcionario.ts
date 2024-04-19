import { IUsuario } from "../interfaces/IUsuario";
import { Cargo } from "./Cargo";
import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa implements IUsuario {

    private _salario: number;
    private _cargos: Cargo[];

    constructor (cpf: string, nome: string, telefone:string, salario: number){ 
        super(cpf,nome,telefone);
        this._salario = salario;
        this._cargos = [];
    }
    
    autenticar(): boolean {
        return true;
    }

    adicionarCargo(cargo: Cargo): void {
        this._cargos.push(cargo);
    }

    toString(): string {
        let cargos: string = "Nome: " + this.nome + ", CPF: " + this.cpf
            + ", Telefone: " + this.telefone + ", Salário: " + this._salario;
        cargos += "\nCargos do " + this.nome + ": [ ";
        
        this._cargos.forEach((cargo) => {
            cargos += cargo.nome + " "
        })

        cargos += "]\n"

        return cargos;
    }
}