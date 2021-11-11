import { Component } from "@angular/core";

@Component({
    selector:"app-deportes",
    templateUrl:"./deportes.component.html",
    styleUrls:["./deportes.component.css"]
})

export class Deportes {
    public sports : Array<string>;
    public numeros : Array<number>;
    constructor(){
        this.sports = ["Petanca","Curling","Canicas","Fútbol","Tenis","Basket","Padel"];
        this.numeros = [5,8,9,8,2,5,89,56,23];
    }
}