//crie a classe cliente com os seguintes atributos e um contrutrutor para inicializar os atributos: nome, idade, cpf, sexo, telefone, email
export class Cliente {
    nome: string;
    idade: number;
    cpf: string;

    constructor(nome:string, idade:number, cpf:string) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
}