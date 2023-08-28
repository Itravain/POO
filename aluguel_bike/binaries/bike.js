"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = void 0;
//crie uma classe com o nome Bike com os atributos abaixo: marca, ano, horas de uso, valor e cor
class Bike {
    constructor(marca, valor_hora, cor) {
        this.horasDeUso = 0;
        this.disponivel = true;
        this.marca = marca;
        this.valor_hora = valor_hora;
        this.cor = cor;
    }
}
exports.Bike = Bike;
