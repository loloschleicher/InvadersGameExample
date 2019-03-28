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
var Nave = /** @class */ (function (_super) {
    __extends(Nave, _super);
    function Nave(vida, velocidad) {
        var _this = this;
        _this.setVida(vida);
        _this = _super.call(this, velocidad) || this;
        return _this;
    }
    Nave.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Nave.prototype.getVida = function () {
        return this.vida;
    };
    Nave.prototype.destruir = function (invasor) {
        var vidaPerdida = (invasor.getVelocidad() * this.getVelocidad()) / 100;
        var nuevaVida = invasor.getVida() - vidaPerdida;
        invasor.setVida(nuevaVida);
    };
    Nave.prototype.destruirGhost = function (invasorGhost) {
    };
    return Nave;
}(Artefacto_1.Artefacto));
exports.Nave = Nave;
