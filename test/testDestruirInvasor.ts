import {Nave} from "../Nave";
import {expect} from 'chai';

describe('Destruir', function(){
    it('Deberia ser igual a 0', function(){
        var Nave = new Nave(100, 70);
        //var Invasor = new Invasor(100, 60);
        
        Nave.destruir("invasor");

        expect(Nave.vida).to.equal(0);
    });
});