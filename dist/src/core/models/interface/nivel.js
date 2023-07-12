"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdemNivel = exports.NivelOrdem = exports.Nivel = void 0;
var Nivel;
(function (Nivel) {
    Nivel["MuitoFacil"] = "MuitoFacil";
    Nivel["Facil"] = "Facil";
    Nivel["Medio"] = "Medio";
    Nivel["Dificil"] = "Dificil";
    Nivel["MuitoDificil"] = "MuitoDificil";
})(Nivel || (exports.Nivel = Nivel = {}));
exports.NivelOrdem = new Map([
    [Nivel.MuitoFacil, 1],
    [Nivel.Facil, 2],
    [Nivel.Medio, 3],
    [Nivel.Dificil, 4],
    [Nivel.MuitoDificil, 5],
]);
exports.OrdemNivel = new Map([
    [1, Nivel.MuitoFacil],
    [2, Nivel.Facil],
    [3, Nivel.Medio],
    [4, Nivel.Dificil],
    [5, Nivel.MuitoDificil],
]);
//# sourceMappingURL=nivel.js.map