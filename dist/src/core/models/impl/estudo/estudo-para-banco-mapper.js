"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudoParaBancoMapper = void 0;
class EstudoParaBancoMapper {
    static mapear(estudo) {
        return {
            nivel_atual: estudo.nivelAtual,
            categoria_id: estudo.categoriaId,
            estudante_id: estudo.estudanteId,
            id: estudo.id,
            desativado: estudo.desativado,
        };
    }
}
exports.EstudoParaBancoMapper = EstudoParaBancoMapper;
//# sourceMappingURL=estudo-para-banco-mapper.js.map