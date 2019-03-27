import {Nave} from "../Nave";
import {Invasor} from "../Invasor";
import {Asteroide} from "../Asteroide";
import {expect} from 'chai';

describe('Chocar Asteroides contra nave/invasores', function(){
    it('Deberia ser igual a 68', function(){
        var invasor = new Invasor(100, 80);
        var asteroide = new Asteroide(80);
        asteroide.chocarInvasor(invasor);
        expect(invasor.getVida()).to.equal(68);
    });
    it('Deberia ser igual a 68', function(){
        var nave = new Nave(100, 80);
        var asteroide = new Asteroide(80);
        asteroide.chocarNave(nave);
        expect(nave.getVida()).to.equal(68);
    });
});