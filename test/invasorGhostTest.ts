
import { InvasorGhost } from "../InvasorGhost";
import { Nave } from "../Nave";
import {expect} from "chai";

describe("Invasor Ghost , destruir y chocar nave", function(){
    it("Cuando ghost choca contra la nave", function(){

        var nave = new Nave(100, 90);
        var invasorGhost = new InvasorGhost(100, 50);

        invasorGhost.chocarNave(nave);

        expect(nave.getVida()).to.equal(100);

    })

    it("Cuando ghost destruye la nave deberia dar 55", function(){

        var nave = new Nave(100, 90);
        var invasorGhost = new InvasorGhost(100, 50);

        invasorGhost.destruirNave(nave);

        expect(nave.getVida()).to.equal(55);

    })
})