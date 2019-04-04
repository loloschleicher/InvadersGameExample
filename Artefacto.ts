import { IChocable } from "./IChocable";

export class Artefacto implements IChocable{
   
    
    velocidad: number;

    constructor(velocidad: number){
        this.setVelocidad(velocidad);
    }

    setVelocidad(velocidad: number){
        this.velocidad = velocidad; 
    }


    getVelocidad():number{
        return this.velocidad; 
    }

    chocar(victima: IChocable){
        
    }

    chocate(danio: any) {
        throw new Error("Method not implemented.");
    }
}