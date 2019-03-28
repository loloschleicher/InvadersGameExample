import { Artefacto } from "./Artefacto";

export class Personaje extends Artefacto{
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
}