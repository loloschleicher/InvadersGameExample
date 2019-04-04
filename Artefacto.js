"use strict";
exports.__esModule = true;
var Artefacto = /** @class */ (function () {
    function Artefacto(velocidad) {
        this.setVelocidad(velocidad);
    }
    Artefacto.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Artefacto.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Artefacto.prototype.chocar = function (victima) {
    };
    Artefacto.prototype.chocate = function (danio) {
        throw new Error("Method not implemented.");
    };
    return Artefacto;
}());
exports.Artefacto = Artefacto;
