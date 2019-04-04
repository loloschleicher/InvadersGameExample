import {Nave} from "./Nave";
import {Invasor} from "./Invasor";
import { Artefacto } from "./Artefacto";
import { Personaje } from "./Personaje";

export class Asteroide extends Artefacto{
    velocidad: number;

    constructor(velocidad:number){
        super(velocidad);
    }


    /*chocarNave(nave: Nave){
        var vidaPerdida = (nave.getVelocidad() * this.getVelocidad()) / 200;
        var nuevaVida = nave.getVida() - vidaPerdida;
        nave.setVida(nuevaVida); 
    }

    chocarInvasor(invasor: Invasor){
        var vidaPerdida = (invasor.getVelocidad() * this.getVelocidad()) / 200;
        var nuevaVida = invasor.getVida() - vidaPerdida;
        invasor.setVida(nuevaVida); 
        
    }*/

    chocar(personaje: Personaje){
        var vidaPerdida = (personaje.getVelocidad() * this.getVelocidad()) / 200;
        var nuevaVida = personaje.getVida() - vidaPerdida;
        return personaje.chocate(nuevaVida);
    }
}