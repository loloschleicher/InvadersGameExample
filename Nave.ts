import { Invasor } from "./Invasor";
import { InvasorGhost } from "./InvasorGhost";
import { Artefacto } from "./Artefacto";

export class Nave extends Artefacto{
    vida: number;
    velocidad: number;

    constructor(vida: number, velocidad: number){
        super(velocidad);
        this.setVida(vida);
    }

    setVida(vida: number){
        this.vida = vida; 
    }

   

    getVida():number{
        return this.vida; 
    }


    destruir(invasor: Invasor){
        var vidaPerdida = (invasor.getVelocidad() * this.getVelocidad()) / 100;
        var nuevaVida = invasor.getVida() - vidaPerdida;
        invasor.setVida(nuevaVida); 
    }

    destruirGhost(invasorGhost: InvasorGhost){
        
    }


}