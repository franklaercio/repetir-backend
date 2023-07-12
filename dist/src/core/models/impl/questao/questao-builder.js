"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestaoBuilder = void 0;
const questao_1 = require("./questao");
class QuestaoBuilder {
    constructor() { }
    static create() {
        const builder = new QuestaoBuilder();
        builder._questao = new questao_1.QuestaoImpl();
        return builder;
    }
    id(id) {
        this._questao.id = id;
        return this;
    }
    categoriaId(categoriaId) {
        this._questao.categoriaId = categoriaId;
        return this;
    }
    elaboradorId(elaboradorId) {
        this._questao.elaboradorId = elaboradorId;
        return this;
    }
    enunciado(enunciado) {
        this._questao.enunciado = enunciado;
        return this;
    }
    nivel(nivel) {
        this._questao.nivel = nivel;
        return this;
    }
    qualidade(qualidade) {
        this._questao.qualidade = qualidade;
        return this;
    }
    alternativas(alternativas) {
        this._questao.alternativas = alternativas;
        return this;
    }
    build() {
        return this._questao;
    }
}
exports.QuestaoBuilder = QuestaoBuilder;
//# sourceMappingURL=questao-builder.js.map