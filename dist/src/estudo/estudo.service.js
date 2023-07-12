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
exports.EstudoService = void 0;
const common_1 = require("@nestjs/common");
const categoria_store_1 = require("../categoria-store");
const alternativa_nao_faz_parte_de_questao_exception_1 = require("../core/exceptions/alternativa-nao-faz-parte-de-questao.exception");
const entidade_nao_existe_exception_1 = require("../core/exceptions/entidade-nao-existe.exception");
const questao_ja_foi_avaliada_exception_1 = require("../core/exceptions/questao-ja-foi-avaliada.exception");
const questao_ja_foi_respondida_exception_1 = require("../core/exceptions/questao-ja-foi-respondida.exception");
const todas_as_questoes_foram_estudadas_exception_1 = require("../core/exceptions/todas-as-questoes-foram-estudadas.exception");
const estudo_1 = require("../core/models/impl/estudo/estudo");
const estudo_builder_1 = require("../core/models/impl/estudo/estudo-builder");
const questao_1 = require("../core/models/impl/questao/questao");
const questao_estudada_1 = require("../core/models/impl/questao/questao-estudada");
const questao_estudada_builder_1 = require("../core/models/impl/questao/questao-estudada-builder");
const nivel_1 = require("../core/models/interface/nivel");
const mysql_service_1 = require("../core/mysql/mysql.service");
const estudo_dao_1 = require("../dal/estudo-dao");
const questao_dao_1 = require("../dal/questao-dao");
const questao_estudada_dao_1 = require("../dal/questao-estudada-dao");
const usuario_dao_1 = require("../dal/usuario-dao");
const proxima_questao_template_method_1 = require("./framework/proxima-questao-template-method");
let EstudoService = exports.EstudoService = class EstudoService {
    constructor(estudoDao, usuarioDao, proximaQuestaoTemplateMethod, questaoDao, questaoEstudadaDao, categoriaStore, mysqlService) {
        this.estudoDao = estudoDao;
        this.usuarioDao = usuarioDao;
        this.proximaQuestaoTemplateMethod = proximaQuestaoTemplateMethod;
        this.questaoDao = questaoDao;
        this.questaoEstudadaDao = questaoEstudadaDao;
        this.categoriaStore = categoriaStore;
        this.mysqlService = mysqlService;
    }
    async recuperarPorId(estudoId, email) {
        const usuario = await this.usuarioDao.recuperarPorEmail({ data: email });
        const estudo = await this.estudoDao.recuperarPorId({ data: estudoId });
        if (!estudo) {
            throw new entidade_nao_existe_exception_1.EntidadeNaoExisteException(estudo_1.EstudoImpl.name, 'Estudo não encontrado');
        }
        if (estudo.estudanteId !== usuario.id) {
            throw new common_1.BadRequestException('Estudo não encontrado');
        }
        return estudo;
    }
    async cadastrar(estudo, email) {
        const usuario = await this.usuarioDao.recuperarPorEmail({ data: email });
        if (await this.estudoDao.recuperarAtivaPorCategoriaId({
            data: { categoriaId: estudo.categoriaId, estudanteId: usuario.id },
        })) {
            throw new common_1.BadRequestException('Já existe um estudo cadastrado para essa categoria');
        }
        const estudoItem = estudo_builder_1.EstudoBuilder.create()
            .categoriaId(estudo.categoriaId)
            .estudanteId(usuario.id)
            .nivelAtual(nivel_1.Nivel.MuitoFacil)
            .build();
        return await this.estudoDao.criar({ data: estudoItem });
    }
    async proximaQuestao(estudoId, email) {
        const usuario = await this.usuarioDao.recuperarPorEmail({ data: email });
        const estudo = await this.estudoDao.recuperarPorId({ data: estudoId });
        if (!estudo) {
            throw new common_1.BadRequestException('Estudo não existe');
        }
        if (estudo.estudante.id !== usuario.id) {
            throw new common_1.BadRequestException('Você não é dono deste estudo');
        }
        try {
            return await this.proximaQuestaoTemplateMethod.proximaQuestao(estudo);
        }
        catch (e) {
            if (e instanceof todas_as_questoes_foram_estudadas_exception_1.TodasAsQuestoesForamEstudadasException) {
                console.log('DO SOMETHING');
            }
            throw e;
        }
    }
    async resolverQuestao(estudoId, questaoId, alternativaId, username) {
        const [usuario, estudo, questao, alternativas] = await Promise.all([
            this.usuarioDao.recuperarPorEmail({ data: username }),
            this.estudoDao.recuperarPorId({ data: estudoId }),
            this.questaoDao.recuperarPorId({ data: questaoId }),
            this.questaoDao.recuperarAlternativasPorQuestaoId({ data: questaoId }),
        ]);
        if (!estudo) {
            throw new entidade_nao_existe_exception_1.EntidadeNaoExisteException(estudo_1.EstudoImpl.name, estudoId.toString());
        }
        if (estudo.estudante.id !== usuario.id) {
            throw new common_1.BadRequestException('Você não é dono deste estudo');
        }
        if (!questao) {
            throw new entidade_nao_existe_exception_1.EntidadeNaoExisteException(questao_1.QuestaoImpl.name, questaoId.toString());
        }
        if (!alternativas.map((a) => a.id).includes(alternativaId)) {
            throw new alternativa_nao_faz_parte_de_questao_exception_1.AlternativaNaoFazParteDeQuestaoException(alternativaId.toString());
        }
        const questaoEstudadaFoiEncontrada = await this.estudoDao.recuperarQuestaoEstudadaPorQuestaoId({
            data: {
                estudoId,
                questaoId,
            },
        });
        if (questaoEstudadaFoiEncontrada)
            throw new questao_ja_foi_respondida_exception_1.QuestaoJaFoiRespondidaException(questaoId.toString());
        const alternativaCorreta = alternativas.find((a) => a.resposta);
        const questaoEstudada = questao_estudada_builder_1.QuestaoEstudadaBuilder.create()
            .estudanteId(usuario.id)
            .estudoId(estudo.id)
            .alternativaId(alternativaId)
            .acertou(alternativaCorreta?.id === alternativaId)
            .build();
        return await this.estudoDao.criarQuestaoEstudadaEmEstudo({
            data: questaoEstudada,
        });
    }
    async listar(email) {
        const usuario = await this.usuarioDao.recuperarPorEmail({ data: email });
        return await this.estudoDao.listar({ data: usuario.id });
    }
    async avaliarQuestao(questaoEstudadaId, nivel, qualidade, username) {
        const usuario = await this.usuarioDao.recuperarPorEmail({ data: username });
        const questaoEstudada = await this.questaoEstudadaDao.recuperarPorId({
            data: questaoEstudadaId,
        });
        if (!questaoEstudada) {
            throw new entidade_nao_existe_exception_1.EntidadeNaoExisteException(questao_estudada_1.QuestaoEstudadaImpl.name, questaoEstudadaId.toString() + ', questão ainda não foi respondida');
        }
        if (questaoEstudada.estudante.id !== usuario.id) {
            throw new common_1.BadRequestException('Não foi você quem estudou esta questão');
        }
        if (questaoEstudada.nivel || questaoEstudada.qualidade)
            throw new questao_ja_foi_avaliada_exception_1.QuestaoJaFoiAvaliadaException(questaoEstudadaId.toString() + ', questão já foi avaliada');
        questaoEstudada.nivel = nivel;
        questaoEstudada.qualidade = qualidade;
        const pool = await this.mysqlService.getConnection();
        try {
            pool.query('START TRANSACTION;');
            const res = await this.questaoEstudadaDao.atualizarNivelEQualidade({
                data: questaoEstudada,
                tx: pool,
            });
            pool.query('COMMIT;');
            return res;
        }
        catch (e) {
            pool.query('ROLLBACK;');
            throw e;
        }
    }
    async desativar(estudoId, email) {
        const usuario = await this.usuarioDao.recuperarPorEmail({ data: email });
        const estudo = await this.estudoDao.recuperarPorId({ data: estudoId });
        if (!estudo) {
            throw new entidade_nao_existe_exception_1.EntidadeNaoExisteException(estudo_1.EstudoImpl.name, estudoId.toString());
        }
        if (estudo.estudante.id !== usuario.id) {
            throw new common_1.BadRequestException('Você não é dono deste estudo');
        }
        const pool = await this.mysqlService.getConnection();
        try {
            pool.query('START TRANSACTION;');
            await this.estudoDao.desativar({ data: estudoId });
            pool.query('COMMIT;');
        }
        catch (e) {
            pool.query('ROLLBACK;');
            throw e;
        }
    }
};
exports.EstudoService = EstudoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [estudo_dao_1.EstudoDao,
        usuario_dao_1.UsuarioDao,
        proxima_questao_template_method_1.ProximaQuestaoTemplateMethod,
        questao_dao_1.QuestaoDao,
        questao_estudada_dao_1.QuestaoEstudadaDao,
        categoria_store_1.CategoriaStore,
        mysql_service_1.MysqlService])
], EstudoService);
//# sourceMappingURL=estudo.service.js.map