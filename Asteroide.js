"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Artefacto_1 = require("./Artefacto");
var Asteroide = /** @class */ (function (_super) {
    __extends(Asteroide, _super);
    function Asteroide(velocidad) {
        return _super.call(this, velocidad) || this;
    }
    /*chocarNave(nave: Nave){
        var vidaPerdida = (nave.getVelocidad() * this.getVelocidad()) / 200;
        var nuevaVida = nave.getVida() - vidaPerdida;
        nave.setVida(nuevaVida);
    }

    chocarInvasor(invasor: Invasor){
        var vidaPerdida = (invasor.getVelocidad() * this.getVelocidad()) / 200;
        var nuevaVida = invasor.getVida() - vidaPerdida;
        invasor.setVida(nuevaVida);
        
    }*/
    Asteroide.prototype.chocar = function (personaje) {
        var vidaPerdida = (personaje.getVelocidad() * this.getVelocidad()) / 200;
        var nuevaVida = personaje.getVida() - vidaPerdida;
        return personaje.chocate(nuevaVida);
    };
    return Asteroide;
}(Artefacto_1.Artefacto));
exports.Asteroide = Asteroide;
