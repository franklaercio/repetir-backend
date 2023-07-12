"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudoBuilder = void 0;
const estudo_1 = require("./estudo");
class EstudoBuilder {
    constructor() { }
    static create() {
        const builder = new EstudoBuilder();
        builder._estudo = new estudo_1.EstudoImpl();
        return builder;
    }
    id(id) {
        this._estudo.id = id;
        return this;
    }
    categoriaId(categoriaId) {
        this._estudo.categoriaId = categoriaId;
        return this;
    }
    estudanteId(estudanteId) {
        this._estudo.estudanteId = estudanteId;
        return this;
    }
    nivelAtual(nivelAtual) {
        this._estudo.nivelAtual = nivelAtual;
        return this;
    }
    desativado(desativado) {
        this._estudo.desativado = desativado;
        return this;
    }
    build() {
        return this._estudo;
    }
}
exports.EstudoBuilder = EstudoBuilder;
//# sourceMappingURL=estudo-builder.js.map