"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DalModule = void 0;
const common_1 = require("@nestjs/common");
const categoria_dao_1 = require("./categoria-dao");
const estudo_dao_1 = require("./estudo-dao");
const questao_dao_1 = require("./questao-dao");
const questao_estudada_dao_1 = require("./questao-estudada-dao");
const usuario_dao_1 = require("./usuario-dao");
let DalModule = exports.DalModule = class DalModule {
};
exports.DalModule = DalModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            usuario_dao_1.UsuarioDao,
            categoria_dao_1.CategoriaDao,
            estudo_dao_1.EstudoDao,
            questao_dao_1.QuestaoDao,
            questao_estudada_dao_1.QuestaoEstudadaDao,
        ],
        exports: [
            usuario_dao_1.UsuarioDao,
            categoria_dao_1.CategoriaDao,
            estudo_dao_1.EstudoDao,
            questao_dao_1.QuestaoDao,
            questao_estudada_dao_1.QuestaoEstudadaDao,
        ],
    })
], DalModule);
//# sourceMappingURL=dal.module.js.map