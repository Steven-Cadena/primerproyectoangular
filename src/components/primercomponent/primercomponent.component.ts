import { Component } from '@angular/core';

@Component({
    //INDICAMOS EL NOMBRE DE NUESTRO COMPONENT PARA TRABAJAR 
    selector: "primer-component",
    templateUrl: "./primercomponent.component.html",
    styleUrls: ['./primercomponent.component.css']
})

export class PrimerComponent{
    public titulo : string;
    public descripcion : string;
     public anyo : number;

     //INICIALIZAMOS LAS PROPIEDADES EN EL CONSTRUCTOR
     constructor(){
         this.titulo = "Hoy es jueves de angular";
         this.descripcion = "Aprendiendo Angular a tope";
         this.anyo = 2021;
     }
     
}