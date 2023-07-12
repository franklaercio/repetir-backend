"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioBuilder = void 0;
const usuario_1 = require("./usuario");
class UsuarioBuilder {
    constructor() { }
    static create() {
        const builder = new UsuarioBuilder();
        builder._usuario = new usuario_1.UsuarioImpl();
        return builder;
    }
    nome(nome) {
        this._usuario.nome = nome;
        return this;
    }
    sobrenome(sobrenome) {
        this._usuario.sobrenome = sobrenome;
        return this;
    }
    email(email) {
        this._usuario.email = email;
        return this;
    }
    senhaCriptografada(senhaCriptografada) {
        this._usuario.setSenhaComCriptografia(senhaCriptografada);
        return this;
    }
    async senhaSemCriptografiaAsync(senhaSemCriptografia) {
        await this._usuario.setSenhaSemCriptografia(senhaSemCriptografia);
        return this;
    }
    build() {
        return this._usuario;
    }
}
exports.UsuarioBuilder = UsuarioBuilder;
//# sourceMappingURL=usuario-builder.js.map