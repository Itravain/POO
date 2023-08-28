import { Bike } from "./bike";
import { Cliente } from "./cliente";
import { Aluguel } from "./aluguel";


let bike1 = new Bike("Caloi", 10, "Vermelha");
let cliente1 = new Cliente("João", 20, "123.456.789-10");
let cliente2 = new Cliente("Maria", 25, "987.654.321-10");

let aluguel1 = new Aluguel(cliente1, bike1);
let aluguel2 = new Aluguel(cliente2, bike1);

aluguel1.alugar(10);
aluguel2.alugar(11);
aluguel1.devolver(12);


aluguel1.alugar(14);

aluguel1.devolver(22);

