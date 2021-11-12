import { Component,ViewChild,ElementRef } from "@angular/core";

@Component({
    selector:"app-tabla-multiplicar",
    templateUrl:"./tablamultiplicar.component.html",
})

export class TablaMultiplicar{
    @ViewChild("cajanumero") cajanumero: ElementRef;
    public resultado : any;
    
    constructor(){
        this.resultado = [];
        this.cajanumero = new ElementRef(0);
    }

    mostrarTabla(): void{
        this.resultado = [];
        for(var i = 1; i<=10; i++){
            var num = this.cajanumero.nativeElement.value;
            var total = num * i;
            this.resultado.push(total);
        }
    }
}