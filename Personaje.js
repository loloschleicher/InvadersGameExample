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
var Personaje = /** @class */ (function (_super) {
    __extends(Personaje, _super);
    function Personaje(vida, velocidad) {
        var _this = _super.call(this, velocidad) || this;
        _this.setVida(vida);
        return _this;
    }
    Personaje.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Personaje.prototype.getVida = function () {
        return this.vida;
    };
    Personaje.prototype.destruitePorNave = function () {
        var vidaPerdida = (this.getVelocidad() * this.getVelocidad()) / 100;
        var nuevaVida = this.getVida() - vidaPerdida;
        this.setVida(nuevaVida);
    };
    return Personaje;
}(Artefacto_1.Artefacto));
exports.Personaje = Personaje;
