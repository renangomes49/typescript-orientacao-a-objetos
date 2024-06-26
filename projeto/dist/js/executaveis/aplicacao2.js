"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("../model/Cliente");
const Endereco_1 = require("../model/Endereco");
const cliente = new Cliente_1.Cliente("000.000.000-00", "Maria Pereira", "(00) 0 0000 0000", true);
const endereco1 = new Endereco_1.Endereco("16015244", "Rua Cristiano Olsen", "100", "Sem Complemento", "Araçatuba", "SP", cliente);
const endereco2 = new Endereco_1.Endereco("80520560", "Rua Carlos Augusto Cornelsen", "200", "Sem Complemento", "Curitiba", "PR", cliente);
const endereco3 = new Endereco_1.Endereco("66055260", "Avenida Governador José Malcher", "2020", "Sem Complemento", "Belém", "PA", cliente);
cliente.adicionarEndereco(endereco1);
cliente.adicionarEndereco(endereco2);
cliente.adicionarEndereco(endereco3);
const enderecos = cliente.listaEnderecos();
console.log(enderecos);
