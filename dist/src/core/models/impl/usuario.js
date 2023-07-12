"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioImpl = void 0;
const bcrypt = require("bcrypt");
class UsuarioImpl {
    get senha() {
        return this._senha;
    }
    setSenhaComCriptografia(senha) {
        this._senha = senha;
    }
    async setSenhaSemCriptografia(senha) {
        const s = await bcrypt.hash(senha, 10);
        this._senha = s;
    }
    async compararSenha(senhaDescriptografada) {
        return await bcrypt.compare(senhaDescriptografada, this.senha);
    }
}
exports.UsuarioImpl = UsuarioImpl;
//# sourceMappingURL=usuario.js.map