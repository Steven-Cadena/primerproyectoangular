import { Component,ViewChild,ElementRef } from "@angular/core";

@Component({
    selector:"app-tabla-multiplicar",
    templateUrl:"./tablamultiplicar.component.html",
})

export class TablaMultiplicar{
    @ViewChild("cajanumero") cajanumero!: ElementRef;
    public resultado !: Array<number>;
    public numero !: number;
    // con las ! no hace falta declararlo en el constructor
    constructor(){
        // this.resultado = new Array<number>();
        this.resultado = [];
        this.cajanumero = new ElementRef(0);
    }

    mostrarTabla(): void{
        this.resultado = [];
        for(var i = 1; i<=10; i++){
            this.numero = parseInt(this.cajanumero.nativeElement.value);
            var total = this.numero * i;
            this.resultado.push(total);
        }
    }
}