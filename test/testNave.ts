import {Nave} from "../Nave";
import {Invasor} from "../Invasor";
import {InvasorGhost} from "../InvasorGhost";
import {expect} from 'chai';

describe('Destruir invasores', function(){
    it('Deberia ser igual a 7', function(){
        var nave = new Nave(100, 50);
        var invasor = new Invasor(100, 50);
        
        
        nave.destruir(invasor);
    
        expect(invasor.getVida()).to.equal(75);
    });
    it('no deberia destruir al ghost', function(){
        var nave = new Nave(100, 50);
        var invasorGhost = new InvasorGhost(100, 50);
      
        
        
        nave.destruir(invasorGhost);

        expect(invasorGhost.getVida()).to.equal(100);
    });
});