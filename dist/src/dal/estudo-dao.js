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
exports.EstudoDao = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const estudo_1 = require("../core/models/impl/estudo/estudo");
const questao_estudada_1 = require("../core/models/impl/questao/questao-estudada");
const mysql_service_1 = require("../core/mysql/mysql.service");
const result_query_1 = require("../core/result-query");
let EstudoDao = exports.EstudoDao = class EstudoDao {
    constructor(mysqlService) {
        this.mysqlService = mysqlService;
    }
    async criar(params) {
        const [res] = await this.mysqlService.query('call estudo_cadastrar(?,?,?);', [
            params.data.estudanteId,
            params.data.categoriaId,
            params.data.nivelAtual,
        ]);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return (0, class_transformer_1.plainToClass)(estudo_1.EstudoImpl, res);
    }
    async listar(params) {
        const res = await this.mysqlService.query('call estudo_recuperar(?);', [
            params.data,
        ]);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return (0, class_transformer_1.plainToInstance)(estudo_1.EstudoImpl, res);
    }
    async recuperarAtivaPorCategoriaId(params) {
        const [res] = await this.mysqlService.query('call estudo_recuperarAtivaPorCategoriaId(?, ?);', [params.data.estudanteId, params.data.categoriaId]);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return (0, class_transformer_1.plainToInstance)(estudo_1.EstudoImpl, res);
    }
    async recuperarPorId(params) {
        const [res] = await this.mysqlService.query('call estudo_recuperarPorId(?);', [params.data]);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return (0, class_transformer_1.plainToInstance)(estudo_1.EstudoImpl, res);
    }
    async atualizarNivelAtual(params) {
        await this.mysqlService.query('call Estudo_atualizarNivelAtual(?, ?);', [
            params.data.id,
            params.data.nivelAtual,
        ]);
        return {};
    }
    async criarQuestaoEstudadaEmEstudo(params) {
        const [res] = await this.mysqlService.query('call Estudo_criarQuestaoEstudadaEmEstudo(?,?,?,?);', [
            params.data.estudanteId,
            params.data.estudoId,
            params.data.alternativaId,
            params.data.acertou,
        ]);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return (0, class_transformer_1.plainToInstance)(questao_estudada_1.QuestaoEstudadaImpl, res);
    }
    async recuperarQuestaoEstudadaPorQuestaoId(params) {
        const [res] = await this.mysqlService.query('call Estudo_recuperarQuestaoEstudadaPorQuestaoId(?,?);', [params.data.estudoId, params.data.questaoId]);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return (0, class_transformer_1.plainToInstance)(questao_estudada_1.QuestaoEstudadaImpl, res);
    }
    async desativar(params) {
        await this.mysqlService.query('call Estudo_desativar(?);', [params.data], params?.tx);
    }
};
exports.EstudoDao = EstudoDao = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mysql_service_1.MysqlService])
], EstudoDao);
//# sourceMappingURL=estudo-dao.js.map