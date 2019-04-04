import { Artefacto } from "./Artefacto";
import { IChocable } from "./Ichocable";

export class Personaje extends Artefacto implements IChocable{
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
    

    destruitePorNave(this){
              
    }

   /* chocar(victima: IChocable){

    }*/

    chocate(nuevaVida: number){
        this.setVida(nuevaVida);
    }


    
}