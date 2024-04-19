import { Funcionario } from "./Funcionario";

export class Cargo {

    private _nome: string;
    private _funcionarios: Funcionario[];

    constructor (nome: string){
        this._nome = nome;
        this._funcionarios = [];
     }
}