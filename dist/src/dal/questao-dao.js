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
exports.QuestaoDao = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const alternativa_1 = require("../core/models/impl/questao/alternativa");
const questao_1 = require("../core/models/impl/questao/questao");
const mysql_service_1 = require("../core/mysql/mysql.service");
const prisma_service_1 = require("../core/prisma/prisma.service");
const result_query_1 = require("../core/result-query");
let QuestaoDao = exports.QuestaoDao = class QuestaoDao {
    constructor(prismaService, mysqlService) {
        this.prismaService = prismaService;
        this.mysqlService = mysqlService;
    }
    async criar(params) {
        const prisma = params?.tx ?? this.prismaService;
        const isTransaction = params?.tx ? true : false;
        let res;
        try {
            if (!isTransaction) {
                [res] = await prisma.$transaction(async (tx) => {
                    return await this.criarQuery(params.data, tx);
                });
            }
            else {
                [res] = await this.criarQuery(params.data, params?.tx);
            }
        }
        catch (e) {
            console.error(e);
            throw new common_1.InternalServerErrorException();
        }
        result_query_1.ResultQuery.create(res).normalizeResult();
        return (0, class_transformer_1.plainToClass)(questao_1.QuestaoImpl, res);
    }
    async criarQuery(questao, prisma) {
        await prisma.$queryRaw `
          insert into questao (enunciado, qualidade, nivel, elaborar_id, categoria_id)
          values (
            ${questao.enunciado},
            ${questao.qualidade},
            ${questao.nivel},
            ${questao.elaboradorId},
            ${questao.categoriaId}

        )`;
        const [{ id: lastId }] = await prisma.$queryRaw `select last_insert_id() 'id'`;
        return await prisma.$queryRaw `
        select
          -- CONTINUA...
        from questao q
        where e.id = ${lastId};
      `;
    }
    async recuperarPorCategoriaSomenteId(params) {
        const res = await this.mysqlService.query('call Questao_recuperarSomenteIdPorCategoria(?);', [params.data?.join(',')]);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return res.map((e) => (0, class_transformer_1.plainToInstance)(questao_1.QuestaoImpl, e));
    }
    async recuperarPorCategoriaENivelSomenteId(params) {
        const res = await this.mysqlService.query('call Questao_recuperarSomenteIdPorCategoriaENivel(?, ?);', [params.data?.categoriasIds?.join(','), params.data?.nivel]);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return res.map((e) => (0, class_transformer_1.plainToInstance)(questao_1.QuestaoImpl, e));
    }
    async recuperarPorIds(params) {
        if (params.data?.length === 0) {
            return [];
        }
        const res = await this.mysqlService.query('call Questao_recuperarPorIds(?);', [params.data.join(',')]);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return res.map((e) => (0, class_transformer_1.plainToInstance)(questao_1.QuestaoImpl, e));
    }
    async recuperarAlternativasPorQuestaoId(params) {
        const res = await this.mysqlService.query('call Questao_recuperarAlternativasPorQuestaoId(?);', [params.data]);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return res.map((e) => (0, class_transformer_1.plainToInstance)(alternativa_1.AlternativaImpl, e));
    }
    async recuperarPorId(params) {
        const [res] = await this.mysqlService.query('call Questao_recuperarPorId(?);', [params.data]);
        result_query_1.ResultQuery.create(res).normalizeResult();
        return (0, class_transformer_1.plainToInstance)(questao_1.QuestaoImpl, res);
    }
};
exports.QuestaoDao = QuestaoDao = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mysql_service_1.MysqlService])
], QuestaoDao);
//# sourceMappingURL=questao-dao.js.map