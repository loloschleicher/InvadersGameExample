import {Nave} from "./Nave";
import { Artefacto } from "./Artefacto";

export class InvasorGhost extends Artefacto{
    vida: number;
    velocidad: number;

    constructor(vida: number, velocidad: number){
        this.setVida(vida);
        super(velocidad);
    }

    setVida(vida: number){
        this.vida = vida; 
    }


    getVida():number{
        return this.vida; 
    }


    chocarNave(nave: Nave){
        
    }

    destruirNave(nave: Nave){
        var nuevoDanio = (this.getVelocidad() * 20 / 100) + this.getVelocidad();     
        var nuevaVida = nave.getVida() - nuevoDanio;
        nave.setVida(nuevaVida);       
    }
}