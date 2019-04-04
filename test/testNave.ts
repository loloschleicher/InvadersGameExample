import {Nave} from "../Nave";
import {Invasor} from "../Invasor";
import {InvasorVikingo} from "../InvasorVikingo";
import {InvasorGhost} from "../InvasorGhost";
import {expect} from 'chai';

describe('Nave Destruye invasores', function(){
    it('Nave destruye ghost', function(){
        var nave = new Nave(100, 50);
        var invasorGhost = new InvasorGhost(100, 50);      
        nave.destruir(invasorGhost);   
        expect(invasorGhost.getVida()).to.equal(75);
    });
    it('Nave destruye invasor', function(){
        var nave = new Nave(100, 50);
        var invasor = new Invasor(100, 50);
             
        nave.destruir(invasor);

        expect(invasor.getVida()).to.equal(100);
    });
    it('Nave destruye invasor vikingo', function(){
        var nave = new Nave(100, 50);
        var invasorVikingo = new InvasorVikingo(100, 50);
             
        nave.destruir(invasorVikingo);

        expect(invasorVikingo.getVida()).to.equal(100);
    });
});