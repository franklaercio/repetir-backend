"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestaoService = void 0;
const common_1 = require("@nestjs/common");
const usuario_dao_1 = require("../dal/usuario-dao");
const questao_builder_1 = require("../core/models/impl/questao/questao-builder");
let QuestaoService = exports.QuestaoService = class QuestaoService {
    constructor(usuarioDao) {
        this.usuarioDao = usuarioDao;
    }
    async criar(params, email) {
        const usuario = await this.usuarioDao.recuperarPorEmail({ data: email });
        questao_builder_1.QuestaoBuilder.create()
            .elaboradorId(usuario.id)
            .categoriaId(params.categoriaId)
            .enunciado(params.enunciado)
            .nivel(params.nivel)
            .qualidade(params.qualidade)
            .build();
    }
};
exports.QuestaoService = QuestaoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_dao_1.UsuarioDao])
], QuestaoService);
//# sourceMappingURL=questao.service.js.map