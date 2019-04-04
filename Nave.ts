import { Invasor } from "./Invasor";
import { InvasorGhost } from "./InvasorGhost";
import { Personaje } from "./Personaje";

export class Nave extends Personaje{
    vida: number;
    velocidad: number;

    constructor(vida: number, velocidad: number){
        super(vida, velocidad);
        
    }

    destruir(personaje: Personaje){
        personaje.destruitePorNave();       
    }


}