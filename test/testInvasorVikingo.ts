import { Invasor } from "../Invasor";
import { InvasorVikingo } from "../InvasorVikingo";
import { Nave } from "../Nave";
import {expect} from "chai";

describe("destruir y chocar nave", function(){
    it("Cuando choca debe dar igual a 0 la vida de la nave", function(){
        var nave = new Nave(100, 90);
        var invasor = new Invasor(100, 50);

        invasor.chocarNave(nave);

        expect(nave.getVida()).to.equal(0);

    })
    it("Cuando destruye debe dar 40 la vida de la nave", function(){

        var nave = new Nave(100, 90);
        var invasorVikingo = new InvasorVikingo(100, 50);

        nave.destruir(invasorVikingo);

        expect(nave.getVida()).to.equal(40);

    })
})