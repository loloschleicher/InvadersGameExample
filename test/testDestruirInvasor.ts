import {Nave} from "../Nave";
import {expect} from 'chai';

describe('Destruir', function(){
    it('Deberia ser mayor a 0', function(){
        var Nave = new Nave(50, 70);
        var Invasor = new Invasor(30, 60);

        expect(Invasor.vida).to.greaterThan(0);
    });
});