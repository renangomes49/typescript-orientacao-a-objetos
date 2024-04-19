import { Funcionario } from "./Funcionario";

export class Cargo {

    private _nome: string;
    private _funcionarios: Funcionario[];

    constructor (nome: string){
        this._nome = nome;
        this._funcionarios = [];
    }

    get nome(): string {
        return this._nome;
    }

    adicionarFuncionario(funcionario: Funcionario): void {
        this._funcionarios.push(funcionario);
    }

    toString(): string {
        let funcionarios: string = "Cargo: " + this.nome;

        funcionarios += ", Funcionários desse cargo: [ ";
        
        this._funcionarios.forEach((funcionario) => {
            funcionarios += funcionario.nome + " ";
        })

        funcionarios += "]\n"

        return funcionarios;
    }
}