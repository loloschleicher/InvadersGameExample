import {Nave} from "../Nave";
import {Invasor} from "../Invasor";
import {expect} from 'chai';

describe('Destruir invasores', function(){
    it('Deberia ser igual a 75', function(){
        var nave = new Nave(100, 50);
        var invasor = new Invasor(100, 50);
        
        nave.destruir(invasor);

        expect(invasor.getVida()).to.equal(75);
    });
});