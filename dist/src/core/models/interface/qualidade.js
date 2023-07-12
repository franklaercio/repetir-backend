"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdemQualidade = exports.QualidadeOrdem = exports.Qualidade = void 0;
var Qualidade;
(function (Qualidade) {
    Qualidade["MuitoRuim"] = "MuitoRuim";
    Qualidade["Ruim"] = "Ruim";
    Qualidade["Boa"] = "Boa";
    Qualidade["MuitoBoa"] = "MuitoBoa";
})(Qualidade || (exports.Qualidade = Qualidade = {}));
exports.QualidadeOrdem = new Map([
    [Qualidade.MuitoRuim, 1],
    [Qualidade.Ruim, 2],
    [Qualidade.Boa, 3],
    [Qualidade.MuitoBoa, 4],
]);
exports.OrdemQualidade = new Map([
    [1, Qualidade.MuitoRuim],
    [2, Qualidade.Ruim],
    [3, Qualidade.Boa],
    [4, Qualidade.MuitoBoa],
]);
//# sourceMappingURL=qualidade.js.map