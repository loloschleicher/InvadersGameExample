import { Invasor } from "../Invasor";
import { InvasorGhost } from "../InvasorGhost";
import { Nave } from "../Nave";
import {expect} from "chai";

describe("Invasor Ghost , destruir y chocar nave", function(){
    it("Cuando choca debe dar igual a 0 la vida de la nave", function(){
        var nave = new Nave(100, 90);
        var invasorGhost = new InvasorGhost(100, 50);

        nave.destruirGhost(invasorGhost);

        expect(invasorGhost.getVida()).to.equal(100);

    })
    /*it("Cuando destruye debe dar 40 la vida de la nave", function(){

        var nave = new Nave(100, 90);
        var invasor = new Invasor(100, 50);

        invasorGhost.destruirNave(nave);

        expect(nave.getVida()).to.equal(40);

    })*/
})