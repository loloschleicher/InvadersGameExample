import {Nave} from "./Nave";
import { Personaje } from "./Personaje";

export class InvasorVikingo extends Personaje{
    vida: number;
    velocidad: number;

    constructor(vida: number, velocidad: number){
        super(vida, velocidad);
    }

    setVida(vida: number){
        this.vida = vida; 
    }

   
    getVida():number{
        return this.vida; 
    }

    destruitePorNave(this){
        var vida = this.getVida();
        var valor = (this.getVelocidad()*10)/100;
        var nuevaVida = vida - valor;
        this.setVida(nuevaVida);
    }

    destruirNave(nave: Nave){
        //falta agregar
    }

    chocarNave(nave: Nave){
        //falta agregar
    }

   
}