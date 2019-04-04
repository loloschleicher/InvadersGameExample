import {Nave} from "../Nave";
import {Invasor} from "../Invasor";
import {Asteroide} from "../Asteroide";
import {expect} from 'chai';

describe('Asteroides contra nave/invasores', function(){
    it('contra invasores', function(){
        var invasor = new Invasor(100, 80);
        var asteroide = new Asteroide(80);
        asteroide.chocar(invasor);
        expect(invasor.getVida()).to.equal(68);
    });
    it('contra la nave', function(){
        var nave = new Nave(100, 80);
        var asteroide = new Asteroide(80);
        asteroide.chocar(nave);
        expect(nave.getVida()).to.equal(68);
    });
});