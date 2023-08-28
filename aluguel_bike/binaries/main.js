"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//crie um exemplo que utiliza todos os metodos e atributos das classes criadas
const bike_1 = require("./bike");
const cliente_1 = require("./cliente");
const aluguel_1 = require("./aluguel");
let bike1 = new bike_1.Bike("Caloi", 10, "Vermelha");
let cliente1 = new cliente_1.Cliente("João", 20, "123.456.789-10");
let cliente2 = new cliente_1.Cliente("Maria", 25, "987.654.321-10");
let aluguel1 = new aluguel_1.Aluguel(cliente1, bike1);
let aluguel2 = new aluguel_1.Aluguel(cliente2, bike1);
aluguel1.alugar(10);
aluguel2.alugar(11);
aluguel1.devolver(12);
aluguel1.alugar(14);
aluguel1.devolver(22);
