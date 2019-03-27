"use strict";
exports.__esModule = true;
var Nave = /** @class */ (function () {
    function Nave(vida, velocidad) {
        this.setVida(vida);
        this.setVelocidad(velocidad);
    }
    Nave.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Nave.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Nave.prototype.getVida = function () {
        return this.vida;
    };
    Nave.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Nave.prototype.destruir = function (invasor) {
        var vidaPerdida = (invasor.getVelocidad() * this.getVelocidad()) / 100;
        var nuevaVida = invasor.getVida() - vidaPerdida;
        invasor.setVida(nuevaVida);
    };
    return Nave;
}());
exports.Nave = Nave;
