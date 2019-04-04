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
var InvasorGhost = /** @class */ (function (_super) {
    __extends(InvasorGhost, _super);
    function InvasorGhost(vida, velocidad) {
        return _super.call(this, vida, velocidad) || this;
    }
    InvasorGhost.prototype.chocar = function (nave) {
    };
    InvasorGhost.prototype.destruirNave = function (nave) {
        var nuevoDanio = (this.getVelocidad() * 20 / 100) + this.getVelocidad();
        var nuevaVida = nave.getVida() - nuevoDanio;
        nave.setVida(nuevaVida);
    };
    InvasorGhost.prototype.destruitePorNave = function () {
    };
    return InvasorGhost;
}(Personaje_1.Personaje));
exports.InvasorGhost = InvasorGhost;
