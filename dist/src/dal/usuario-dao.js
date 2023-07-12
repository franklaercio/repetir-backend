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
exports.UsuarioDao = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const usuario_1 = require("../core/models/impl/usuario");
const mysql_service_1 = require("../core/mysql/mysql.service");
const result_query_1 = require("../core/result-query");
let UsuarioDao = exports.UsuarioDao = class UsuarioDao {
    constructor(mysqlService) {
        this.mysqlService = mysqlService;
    }
    async cadastrar(params) {
        try {
            const [res] = await this.mysqlService.query('call usuario_cadastrar(?,?,?,?);', [
                params.data.email,
                params.data.nome,
                params.data.sobrenome,
                params.data.senha,
            ]);
            return (0, class_transformer_1.plainToClass)(usuario_1.UsuarioImpl, result_query_1.ResultQuery.create(res).normalizeResult());
        }
        catch (e) {
            console.error(e?.code);
            if (e?.code === 'ER_DUP_ENTRY')
                throw new common_1.BadRequestException('Este usuário já existe');
            else
                throw new common_1.InternalServerErrorException();
        }
    }
    async recuperarPorEmail(params) {
        const [res] = await this.mysqlService.query('call usuario_recuperarPorEmail(?);', [params.data]);
        return (0, class_transformer_1.plainToClass)(usuario_1.UsuarioImpl, result_query_1.ResultQuery.create(res).normalizeResult());
    }
};
exports.UsuarioDao = UsuarioDao = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mysql_service_1.MysqlService])
], UsuarioDao);
//# sourceMappingURL=usuario-dao.js.map