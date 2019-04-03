import {Nave} from "./Nave";
import { Artefacto } from "./Artefacto";
import { Personaje } from "./Personaje";

export class InvasorGhost extends Personaje{
    vida: number;
    velocidad: number;

    constructor(vida: number, velocidad: number){  
        super(vida, velocidad);
    }


    chocarNave(nave: Nave){
        
    }

    destruirNave(nave: Nave){
        var nuevoDanio = (this.getVelocidad() * 20 / 100) + this.getVelocidad();     
        var nuevaVida = nave.getVida() - nuevoDanio;
        nave.setVida(nuevaVida);       
    }

    destruitePorNave(this){
            
    }

   
}