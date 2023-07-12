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
exports.CategoriaDao = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const categoria_1 = require("../core/models/impl/categoria/categoria");
const mysql_service_1 = require("../core/mysql/mysql.service");
const result_query_1 = require("../core/result-query");
let CategoriaDao = exports.CategoriaDao = class CategoriaDao {
    constructor(mysqlService) {
        this.mysqlService = mysqlService;
    }
    async recuperarPorNome(nome) {
        const res = await this.mysqlService.query('call categoria_recuperarPorNome(?);', [nome]);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return (0, class_transformer_1.plainToInstance)(categoria_1.CategoriaImpl, res);
    }
    async recuperarVersaoCache() {
        const [res] = await this.mysqlService.query('call CategoriaVersaoCache_recuperar();', []);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return res.versao;
    }
    async recuperarTodas() {
        const res = await this.mysqlService.query('call Categoria_recuperarTodas();', []);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return res.map((e) => (0, class_transformer_1.plainToInstance)(categoria_1.CategoriaImpl, e));
    }
};
exports.CategoriaDao = CategoriaDao = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mysql_service_1.MysqlService])
], CategoriaDao);
//# sourceMappingURL=categoria-dao.js.map