"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
//crie a classe cliente com os seguintes atributos e um contrutrutor para inicializar os atributos: nome, idade, cpf, sexo, telefone, email
class Cliente {
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
}
exports.Cliente = Cliente;
