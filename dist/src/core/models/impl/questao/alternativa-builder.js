"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlternativaBuilder = void 0;
const alternativa_1 = require("./alternativa");
class AlternativaBuilder {
    constructor() { }
    static create() {
        const builder = new AlternativaBuilder();
        builder._alternativa = new alternativa_1.AlternativaImpl();
        return builder;
    }
    id(id) {
        this._alternativa.id = id;
        return this;
    }
    descricao(descricao) {
        this._alternativa.descricao = descricao;
        return this;
    }
    questaoId(questaoId) {
        this._alternativa.questaoId = questaoId;
        return this;
    }
    resposta(resposta) {
        this._alternativa.resposta = resposta;
        return this;
    }
    build() {
        return this._alternativa;
    }
}
exports.AlternativaBuilder = AlternativaBuilder;
//# sourceMappingURL=alternativa-builder.js.map