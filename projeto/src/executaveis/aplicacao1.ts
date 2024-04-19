import { Cargo } from "../model/Cargo";
import { Funcionario } from "../model/Funcionario";

const cargoGerente: Cargo = new Cargo("Gerente");
const cargoAtendente: Cargo = new Cargo("Atendente");

const gerente: Funcionario = new Funcionario("000.000.000-00", "Miguel dos Santos",
    "(00) 0 0000 000000", 5000);
const atendente: Funcionario = new Funcionario("123.000.000-00", "José dos Santos",
"(00) 0 0000 000000", 10000);


gerente.adicionarCargo(cargoGerente);
cargoGerente.adicionarFuncionario(gerente);

atendente.adicionarCargo(cargoAtendente);
cargoAtendente.adicionarFuncionario(atendente);

console.log("Funcionário Gerente:");
console.log(gerente.toString());

console.log("Funcionário Atendente:");
console.log(atendente.toString());

console.log("Funcionarios do Cargo Atendente:")
console.log(cargoAtendente.toString());

console.log("Funcionarios do Cargo Gerente:")
console.log(cargoGerente.toString());