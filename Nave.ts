import { Invasor } from "./Invasor";
import { InvasorGhost } from "./InvasorGhost";
import { Personaje } from "./Personaje";

export class Nave extends Personaje{
    vida: number;
    velocidad: number;

    constructor(vida: number, velocidad: number){
        super(vida, velocidad);
        
    }

    destruir(personaje: any){
        console.log(personaje instanceof Invasor);
        if(personaje instanceof Invasor){
            var vidaPerdida = (personaje.getVelocidad() * this.getVelocidad()) / 100;
            var nuevaVida = personaje.getVida() - vidaPerdida;
            personaje.setVida(nuevaVida); 
        }
        
    }

    

}