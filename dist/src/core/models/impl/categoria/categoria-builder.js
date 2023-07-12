"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaBuilder = void 0;
const categoria_1 = require("./categoria");
class CategoriaBuilder {
    constructor() { }
    static create() {
        const builder = new CategoriaBuilder();
        builder._categoria = new categoria_1.CategoriaImpl();
        return builder;
    }
    id(id) {
        this._categoria.id = id;
        return this;
    }
    nome(nome) {
        this._categoria.nome = nome;
        return this;
    }
    categoriaPaiId(categoriaPaiId) {
        this._categoria.categoriaPaiId = categoriaPaiId;
        return this;
    }
    build() {
        return this._categoria;
    }
}
exports.CategoriaBuilder = CategoriaBuilder;
//# sourceMappingURL=categoria-builder.js.map