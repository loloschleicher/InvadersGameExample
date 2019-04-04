import {Nave} from "./Nave";
import { Personaje } from "./Personaje";



export class Invasor extends Personaje{
    vida: number;
    velocidad: number;

    constructor(vida: number, velocidad: number){
        super(vida, velocidad);
    }

    setVida(vida: number){
        this.vida = vida; 
    }

   
    getVida():number{
        return this.vida; 
    }


    chocar(nave: Nave){
      var nuevaVida = 0;  
      return nave.chocate(nuevaVida); 
    }

    destruirNave(nave: Nave){
        var nuevoDanio = (this.getVelocidad() * 20 / 100) + this.getVelocidad();     
        var nuevaVida = nave.getVida() - nuevoDanio;
        nave.setVida(nuevaVida);       
    }

    destruitePorNave(this){
        var vidaPerdida = (this.getVelocidad() * this.getVelocidad()) / 100;
        var nuevaVida = this.getVida() - vidaPerdida;
        this.setVida(nuevaVida);       
    }

   
}