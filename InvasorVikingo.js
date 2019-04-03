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
var Invasor = /** @class */ (function (_super) {
    __extends(Invasor, _super);
    function Invasor(vida, velocidad) {
        return _super.call(this, vida, velocidad) || this;
    }
    Invasor.prototype.setVida = function (vida) {
        this.vida = vida;
    };
    Invasor.prototype.getVida = function () {
        return this.vida;
    };
    Invasor.prototype.chocarNave = function (nave) {
    };
    return Invasor;
}(Personaje_1.Personaje));
exports.Invasor = Invasor;
