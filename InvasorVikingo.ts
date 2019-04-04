import {Nave} from "./Nave";
import { Personaje } from "./Personaje";


export class InvasorVikingo extends Personaje{
    vida: number;
    velocidad: number;

    constructor(vida: number, velocidad: number){
        super(vida, velocidad);
    }


    destruitePorNave(this){
        var vida = this.getVida();
        var valor = (this.getVelocidad()*10)/100;
        var nuevaVida = vida - valor;
        this.setVida(nuevaVida);
    }

    destruirNave(nave: Nave){
        var danio = 90 * this.getVelocidad() / 100;
        var nuevaVida = nave.getVida() - danio;
        nave.setVida(nuevaVida);
    }

    chocar(nave: Nave){
        var danio = 90 * this.getVelocidad() / 100;
        var nuevaVida = nave.getVida() - danio;
        return nave.chocate(nuevaVida);
    }
   
}