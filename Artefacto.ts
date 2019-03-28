

export class Artefacto{
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
}