export class Bike {
    marca: string;
    horasDeUso: number = 0;
    valor_hora: number;
    cor: string;
    disponivel: boolean = true;

    constructor(marca:string, valor_hora:number , cor:string) {
        this.marca = marca;
        this.valor_hora = valor_hora;
        this.cor = cor;
    }

}
