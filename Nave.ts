import { Invasor } from "./Invasor";
import { InvasorGhost } from "./InvasorGhost";

export class Nave{
    vida: number;
    velocidad: number;

    constructor(vida: number, velocidad: number){
        this.setVida(vida);
        this.setVelocidad(velocidad);
    }

    setVida(vida: number){
        this.vida = vida; 
    }

    setVelocidad(velocidad: number){
        this.velocidad = velocidad; 
    }

    getVida():number{
        return this.vida; 
    }

    getVelocidad():number{
        return this.velocidad; 
    }

    destruir(invasor: Invasor){
        var vidaPerdida = (invasor.getVelocidad() * this.getVelocidad()) / 100;
        var nuevaVida = invasor.getVida() - vidaPerdida;
        invasor.setVida(nuevaVida); 
    }

    destruirGhost(invasorGhost: InvasorGhost){
        
    }


}