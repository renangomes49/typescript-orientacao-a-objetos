import { Cliente } from "../model/Cliente";
import { Endereco } from "../model/Endereco";

const cliente: Cliente = new Cliente("000.000.000-00", "Maria Pereira", "(00) 0 0000 0000",true);

const endereco1: Endereco = new Endereco("16015244","Rua Cristiano Olsen", "100",
    "Sem Complemento","Araçatuba","SP", cliente);

const endereco2: Endereco = new Endereco("80520560","Rua Carlos Augusto Cornelsen", "200",
    "Sem Complemento","Curitiba","PR", cliente);

const endereco3: Endereco = new Endereco("66055260","Avenida Governador José Malcher", "2020",
    "Sem Complemento","Belém","PA", cliente);

cliente.adicionarEndereco(endereco1);
cliente.adicionarEndereco(endereco2);
cliente.adicionarEndereco(endereco3);

const enderecos: string = cliente.listaEnderecos();
console.log(enderecos);
