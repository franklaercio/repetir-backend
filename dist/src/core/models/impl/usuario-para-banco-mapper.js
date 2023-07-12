"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioParaBancoMapper = void 0;
class UsuarioParaBancoMapper {
    static mapear(usuario) {
        return {
            id: usuario?.id,
            email: usuario?.email,
            nome: usuario?.nome,
            sobrenome: usuario?.sobrenome,
            senha: usuario?.senha,
        };
    }
}
exports.UsuarioParaBancoMapper = UsuarioParaBancoMapper;
//# sourceMappingURL=usuario-para-banco-mapper.js.map