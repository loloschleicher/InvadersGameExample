import { Invasor } from "./Invasor";
import { InvasorGhost } from "./InvasorGhost";
import { Artefacto } from "./Artefacto";
import { Personaje } from "./Personaje";

export class Nave extends Personaje{
    vida: number;
    velocidad: number;

    constructor(vida: number, velocidad: number){
        super(vida, velocidad);
        
    }

    destruir(invasor: Invasor){
        var vidaPerdida = (invasor.getVelocidad() * this.getVelocidad()) / 100;
        var nuevaVida = invasor.getVida() - vidaPerdida;
        invasor.setVida(nuevaVida); 
    }

    destruirGhost(invasorGhost: InvasorGhost){
        
    }


}