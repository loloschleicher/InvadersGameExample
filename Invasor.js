"use strict";
exports.__esModule = true;
var Invasor = /** @class */ (function () {
    function Invasor(vida, velocidad) {
        this.setVida(vida);
        this.setVelocidad(velocidad);
    }
    Invasor.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Invasor.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Invasor.prototype.getVida = function () {
        return this.vida;
    };
    Invasor.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Invasor.prototype.chocarNave = function (nave) {
        nave.setVida(0);
    };
    Invasor.prototype.destruirNave = function (nave) {
        var nuevoDanio = (this.getVelocidad() * 20 / 100) + this.getVelocidad();
        var nuevaVida = nave.getVida() - nuevoDanio;
        nave.setVida(nuevaVida);
    };
    return Invasor;
}());
exports.Invasor = Invasor;
