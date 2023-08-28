import { Bike } from "./bike";
import { Cliente } from "./cliente";

export class Aluguel {
    cliente;
    bike;
    hora_retirada : number = 0;
    hora_devolucao : number = 0;

    constructor(cliente : Cliente, bike : Bike) {
        this.cliente = cliente;
        this.bike = bike;
    }

    alugar(hora_retirada : number) {
        if (this.bike.disponivel == true) {
            this.bike.disponivel = false;
            this.hora_retirada = hora_retirada;
            console.log("Bike alugada com sucesso!");
        } else {
            console.log("A Bike ja esta alugada, " + this.cliente.nome + " tente novamente mais tarde!");
        }
    }

    devolver(hora_devolucao : number) {
        this.bike.disponivel = true;
        this.hora_devolucao = hora_devolucao;
        console.log("Bike devolvida com sucesso!");
        console.log("Valor do aluguel: R$" + this.calcularValor());
        this.bike.horasDeUso = this.bike.horasDeUso + (this.hora_devolucao - this.hora_retirada);
        console.log("Horas de uso da bike: " + this.bike.horasDeUso);
    }

    calcularValor() {
        let valor = (this.hora_devolucao - this.hora_retirada) * this.bike.valor_hora;
        return valor;
    }

}