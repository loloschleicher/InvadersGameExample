import { Invasor } from "../Invasor";
import { InvasorVikingo } from "../InvasorVikingo";
import { Nave } from "../Nave";
import {expect} from "chai";

describe("invasor vikingo contra nave", function(){
    it("Cuando choca la nave", function(){
        var nave = new Nave(100, 90);
        var invasorVikingo = new InvasorVikingo(100, 50);

        invasorVikingo.chocar(nave);

        expect(nave.getVida()).to.equal(55);

    })
    it("Cuando destruye la nave", function(){

        var nave = new Nave(100, 90);
        var invasorVikingo = new InvasorVikingo(100, 50);

        invasorVikingo.destruirNave(nave);

        expect(nave.getVida()).to.equal(55);

    })
})