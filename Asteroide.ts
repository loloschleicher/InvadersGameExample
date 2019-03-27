import {Nave} from "./Nave";
import {Invasor} from "./Invasor";

export class Asteroide{
    velocidad: number;

    constructor(velocidad:number){
        this.setVelocidad(velocidad);
    }


    setVelocidad(velocidad: number){
        this.velocidad = velocidad;
    }


    getVelocidad(){
        return this.velocidad;
    }

    chocarNave(nave: Nave){
        var vidaPerdida = (nave.getVelocidad() * this.getVelocidad()) / 200;
        var nuevaVida = nave.getVida() - vidaPerdida;
        nave.setVida(nuevaVida); 
    }

    chocarInvasor(invasor: Invasor){
        var vidaPerdida = (invasor.getVelocidad() * this.getVelocidad()) / 200;
        var nuevaVida = invasor.getVida() - vidaPerdida;
        invasor.setVida(nuevaVida); 
    }
}