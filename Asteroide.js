"use strict";
exports.__esModule = true;
var Asteroide = /** @class */ (function () {
    function Asteroide(velocidad) {
        this.setVelocidad(velocidad);
    }
    Asteroide.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Asteroide.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Asteroide.prototype.chocarNave = function (nave) {
        var vidaPerdida = (nave.getVelocidad() * this.getVelocidad()) / 200;
        var nuevaVida = nave.getVida() - vidaPerdida;
        nave.setVida(nuevaVida);
    };
    Asteroide.prototype.chocarInvasor = function (invasor) {
        var vidaPerdida = (invasor.getVelocidad() * this.getVelocidad()) / 200;
        var nuevaVida = invasor.getVida() - vidaPerdida;
        invasor.setVida(nuevaVida);
    };
    return Asteroide;
}());
exports.Asteroide = Asteroide;
