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
var InvasorGhost = /** @class */ (function (_super) {
    __extends(InvasorGhost, _super);
    function InvasorGhost(vida, velocidad) {
        var _this = this;
        _this.setVida(vida);
        _this = _super.call(this, velocidad) || this;
        return _this;
    }
    InvasorGhost.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    InvasorGhost.prototype.getVida = function () {
        return this.vida;
    };
    InvasorGhost.prototype.chocarNave = function (nave) {
    };
    InvasorGhost.prototype.destruirNave = function (nave) {
        var nuevoDanio = (this.getVelocidad() * 20 / 100) + this.getVelocidad();
        var nuevaVida = nave.getVida() - nuevoDanio;
        nave.setVida(nuevaVida);
    };
    return InvasorGhost;
}(Artefacto_1.Artefacto));
exports.InvasorGhost = InvasorGhost;
