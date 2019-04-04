import { Invasor } from "../Invasor";
import { Nave } from "../Nave";
import {expect} from "chai";

describe("Invasor contra nave", function(){
    it("Cuando choca contra la nave", function(){
        var nave = new Nave(100, 90);
        var invasor = new Invasor(100, 50);

        invasor.chocar(nave);

        expect(nave.getVida()).to.equal(0);

    })
    it("Cuando destruye la nave", function(){

        var nave = new Nave(100, 90);
        var invasor = new Invasor(100, 50);

        invasor.destruirNave(nave);

        expect(nave.getVida()).to.equal(40);

    })
})