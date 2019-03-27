import {Nave} from "./Nave";
export class Invasor{
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

    chocarNave(nave: Nave){
        nave.setVida(0);
    }

    destruirNave(nave: Nave){
        var nuevoDanio = (this.getVelocidad() * 20 / 100) + this.getVelocidad();     
        var nuevaVida = nave.getVida() - nuevoDanio;
        nave.setVida(nuevaVida);       
    }
}