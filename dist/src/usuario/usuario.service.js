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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const usuario_builder_1 = require("../core/models/impl/usuario-builder");
const usuario_dao_1 = require("../dal/usuario-dao");
let UsuarioService = exports.UsuarioService = class UsuarioService {
    constructor(usuarioDao) {
        this.usuarioDao = usuarioDao;
    }
    async cadastrar(params) {
        let usuario = usuario_builder_1.UsuarioBuilder.create()
            .email(params.email)
            .nome(params.nome)
            .sobrenome(params.sobrenome);
        usuario = await usuario.senhaSemCriptografiaAsync(params.senha);
        return await this.usuarioDao.cadastrar({
            data: usuario.build(),
        });
    }
};
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_dao_1.UsuarioDao])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map