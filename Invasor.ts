import {Nave} from "./Nave";
import { Personaje } from "./Personaje";

export class Invasor extends Personaje{
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


    chocarNave(nave: Nave){
        nave.setVida(0);
    }

    destruirNave(nave: Nave){
        var nuevoDanio = (this.getVelocidad() * 20 / 100) + this.getVelocidad();     
        var nuevaVida = nave.getVida() - nuevoDanio;
        nave.setVida(nuevaVida);       
    }
}