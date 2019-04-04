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
var Personaje_1 = require("./Personaje");
var InvasorVikingo = /** @class */ (function (_super) {
    __extends(InvasorVikingo, _super);
    function InvasorVikingo(vida, velocidad) {
        return _super.call(this, vida, velocidad) || this;
    }
    InvasorVikingo.prototype.destruitePorNave = function () {
        var vida = this.getVida();
        var valor = (this.getVelocidad() * 10) / 100;
        var nuevaVida = vida - valor;
        this.setVida(nuevaVida);
    };
    InvasorVikingo.prototype.destruirNave = function (nave) {
        var danio = 90 * this.getVelocidad() / 100;
        var nuevaVida = nave.getVida() - danio;
        nave.setVida(nuevaVida);
    };
    InvasorVikingo.prototype.chocar = function (nave) {
        var danio = 90 * this.getVelocidad() / 100;
        var nuevaVida = nave.getVida() - danio;
        return nave.chocate(nuevaVida);
    };
    return InvasorVikingo;
}(Personaje_1.Personaje));
exports.InvasorVikingo = InvasorVikingo;
