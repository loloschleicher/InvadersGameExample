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
var Nave = /** @class */ (function (_super) {
    __extends(Nave, _super);
    function Nave(vida, velocidad) {
        return _super.call(this, vida, velocidad) || this;
    }
    Nave.prototype.destruir = function (personaje) {
        personaje.destruitePorNave();
        /*console.log(personaje instanceof Invasor);
        if(personaje instanceof Invasor){
            var vidaPerdida = (personaje.getVelocidad() * this.getVelocidad()) / 100;
            var nuevaVida = personaje.getVida() - vidaPerdida;
            personaje.setVida(nuevaVida);
        }else if(personaje instanceof InvasorVikingo){

        }*/
    };
    return Nave;
}(Personaje_1.Personaje));
exports.Nave = Nave;
