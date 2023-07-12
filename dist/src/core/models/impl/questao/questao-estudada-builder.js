"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestaoEstudadaBuilder = void 0;
const questao_estudada_1 = require("./questao-estudada");
class QuestaoEstudadaBuilder {
    constructor() { }
    static create() {
        const builder = new QuestaoEstudadaBuilder();
        builder._questaoEstudada = new questao_estudada_1.QuestaoEstudadaImpl();
        return builder;
    }
    id(id) {
        this._questaoEstudada.id = id;
        return this;
    }
    nivel(nivel) {
        this._questaoEstudada.nivel = nivel;
        return this;
    }
    qualidade(qualidade) {
        this._questaoEstudada.qualidade = qualidade;
        return this;
    }
    alternativaId(alternativaId) {
        this._questaoEstudada.alternativaId = alternativaId;
        return this;
    }
    estudanteId(estudanteId) {
        this._questaoEstudada.estudanteId = estudanteId;
        return this;
    }
    estudoId(estudoId) {
        this._questaoEstudada.estudoId = estudoId;
        return this;
    }
    acertou(acertou) {
        this._questaoEstudada.acertou = acertou;
        return this;
    }
    build() {
        return this._questaoEstudada;
    }
}
exports.QuestaoEstudadaBuilder = QuestaoEstudadaBuilder;
//# sourceMappingURL=questao-estudada-builder.js.map